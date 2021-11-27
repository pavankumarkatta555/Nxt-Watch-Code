import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {IoCloseSharp} from 'react-icons/io5'
import {BiSearch} from 'react-icons/bi'

import Cookie from 'js-cookie'

import Header from '../Header'
import SideMenuBar from '../SideMenuBar'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeMainContainer,
  HomeSearchCardModalContainer,
  HomeCardModalContainer,
  HomeCardModalCloseBtn,
  HomeCardModalWebsiteLogo,
  HomeCardModalContentContainer,
  HomeCardModalContent,
  HomeCardModalGetItNowBtn,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearchIconBtn,
  HomeVideosContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureViewDescription,
  RetryButton,
  VideosUnorderedList,
  NoResultsContainer,
  NoSearchImage,
  NoSearchResultsHeading,
  NoSearchResultsDescription,
} from './styledComponents'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    banner: true,
    searchInput: '',
    loadingStatus: apiConstants.initial,
    videoDetailsList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  onClickRetryBtn = () => {
    this.setState({searchInput: ''}, this.getVideosList)
  }

  onClickSearchBtn = () => {
    this.getVideosList()
  }

  onClickBanner = () => {
    this.setState({banner: false})
  }

  onChangingSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideosList = async () => {
    this.setState({loadingStatus: apiConstants.inProgress})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videoDetailsList: updatedVideoDetailsList,
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

  renderVideos = () => {
    const {videoDetailsList} = this.state

    if (videoDetailsList.length > 0) {
      return (
        <VideosUnorderedList>
          {videoDetailsList.map(eachVideo => (
            <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </VideosUnorderedList>
      )
    }
    return (
      <NoResultsContainer>
        <NoSearchImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchResultsHeading>No Search Results found</NoSearchResultsHeading>
        <NoSearchResultsDescription>
          Try different key words or remove search filter
        </NoSearchResultsDescription>
        <RetryButton onClick={this.onClickRetryBtn}>Retry</RetryButton>
      </NoResultsContainer>
    )
  }

  renderVideosDetails = () => {
    const {loadingStatus} = this.state

    switch (loadingStatus) {
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.success:
        return this.renderVideos()
      default:
        return null
    }
  }

  render() {
    const {banner, searchInput} = this.state
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <HomeMainContainer data-testid="home" bg={isDarkTheme}>
                <SideMenuBar />
                <HomeSearchCardModalContainer bg={isDarkTheme}>
                  {banner && (
                    <HomeCardModalContainer
                      bg={isDarkTheme}
                      data-testid="banner"
                    >
                      <HomeCardModalCloseBtn
                        data-testid="close"
                        onClick={this.onClickBanner}
                      >
                        <IoCloseSharp />
                      </HomeCardModalCloseBtn>
                      <HomeCardModalContentContainer>
                        <HomeCardModalWebsiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <HomeCardModalContent>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </HomeCardModalContent>
                        <HomeCardModalGetItNowBtn>
                          GET IT NOW
                        </HomeCardModalGetItNowBtn>
                      </HomeCardModalContentContainer>
                    </HomeCardModalContainer>
                  )}
                  <HomeSearchContainer>
                    <HomeSearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangingSearchInput}
                    />
                    <HomeSearchIconBtn
                      type="button"
                      onClick={this.onClickSearchBtn}
                      data-testid="searchButton"
                    >
                      <BiSearch />
                    </HomeSearchIconBtn>
                  </HomeSearchContainer>
                  <HomeVideosContainer>
                    {this.renderVideosDetails(isDarkTheme)}
                  </HomeVideosContainer>
                </HomeSearchCardModalContainer>
              </HomeMainContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default Home
