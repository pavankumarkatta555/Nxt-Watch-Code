import {Component} from 'react'
import {Link} from 'react-router-dom'
import {format, formatDistanceStrict} from 'date-fns'

import Loader from 'react-loader-spinner'

import Cookie from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideMenuBar from '../SideMenuBar'

import {
  TrendingMainContainer,
  TrendingRouteVideosBannerContainer,
  TrendingRouteBannerContainer,
  TrendingImage,
  TrendingHeading,
  TrendingVideosContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureViewDescription,
  RetryButton,
  VideosUnorderedList,
  VideoListItem,
  Thumbnail,
  ChannelLogoDescriptionContainer,
  LogoContainer,
  ChannelLogo,
  DescriptionContainer,
  VideoTitle,
  ChannelNameCountTimeContainer,
  ChannelName,
  ViewsCount,
  PublishedAt,
} from './styledComponents'

import '../VideoItem/index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    loadingStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  onClickRetryBtn = () => {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({loadingStatus: apiConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const jwtToken = Cookie.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const apiResponse = await fetch(apiUrl, options)

    if (apiResponse.ok) {
      const videoDetailsData = await apiResponse.json()

      const updatedVideoDetailsList = videoDetailsData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        channelName: each.channel.name,
        channelLogo: each.channel.profile_image_url,
      }))
      this.setState({
        trendingVideosList: updatedVideoDetailsList,
        loadingStatus: apiConstants.success,
      })
    } else {
      this.setState({loadingStatus: apiConstants.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" width="50" className="loader" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewImage src={failureImgUrl} alt="failure view" />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureViewDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewDescription>
            <RetryButton onClick={this.onClickRetryBtn}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingVideos = () => {
    const {trendingVideosList} = this.state

    return (
      <VideosUnorderedList>
        {trendingVideosList.map(each => {
          const {
            id,
            title,
            thumbnailUrl,
            viewCount,
            publishedAt,
            channelName,
            channelLogo,
          } = each

          const formattedDate = format(new Date(publishedAt), 'yyyy-MM-dd')
          const replacedDate = formattedDate.split('-')

          const formattedToNow = formatDistanceStrict(
            new Date(replacedDate[0], replacedDate[1], replacedDate[2]),
            new Date(),
          )

          return (
            <ThemeContext.Consumer>
              {value => {
                const {isDarkTheme} = value

                return (
                  <Link
                    className="jobs-link-item"
                    key={id}
                    to={`/videos/${id}`}
                  >
                    <VideoListItem key={id}>
                      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                      <ChannelLogoDescriptionContainer>
                        <LogoContainer>
                          <ChannelLogo src={channelLogo} alt="channel logo" />
                        </LogoContainer>
                        <DescriptionContainer>
                          <VideoTitle bg={isDarkTheme}>{title}</VideoTitle>
                          <ChannelNameCountTimeContainer>
                            <ChannelName>{channelName}</ChannelName>
                            <ViewsCount>{viewCount} views</ViewsCount>
                            <PublishedAt>{formattedToNow} ago</PublishedAt>
                          </ChannelNameCountTimeContainer>
                        </DescriptionContainer>
                      </ChannelLogoDescriptionContainer>
                    </VideoListItem>
                  </Link>
                )
              }}
            </ThemeContext.Consumer>
          )
        })}
      </VideosUnorderedList>
    )
  }

  renderVideosList = () => {
    const {loadingStatus} = this.state

    switch (loadingStatus) {
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.success:
        return this.renderTrendingVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <TrendingMainContainer>
                <SideMenuBar />
                <TrendingRouteVideosBannerContainer
                  data-testid="trending"
                  bg={isDarkTheme}
                >
                  <TrendingRouteBannerContainer
                    data-testid="banner"
                    bg={isDarkTheme}
                  >
                    <TrendingImage bg={isDarkTheme}>
                      <HiFire color="#ff0000" fontSize="36" />
                    </TrendingImage>
                    <TrendingHeading bg={isDarkTheme}>Trending</TrendingHeading>
                  </TrendingRouteBannerContainer>
                  <TrendingVideosContainer>
                    {this.renderVideosList()}
                  </TrendingVideosContainer>
                </TrendingRouteVideosBannerContainer>
              </TrendingMainContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default Trending
