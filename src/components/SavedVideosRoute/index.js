import {Component} from 'react'
import {Link} from 'react-router-dom'
import {format, formatDistanceStrict} from 'date-fns'

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
  DateFormat,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureViewDescription,
} from './styledComponents'

import '../VideoItem/index.css'

class SavedVideos extends Component {
  renderVideosList = videosList => (
    <VideosUnorderedList>
      {videosList.map(each => (
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value

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
              <Link className="jobs-link-item" key={id} to={`/videos/${id}`}>
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
                        <DateFormat>{formattedToNow} ago</DateFormat>
                      </ChannelNameCountTimeContainer>
                    </DescriptionContainer>
                  </ChannelLogoDescriptionContainer>
                </VideoListItem>
              </Link>
            )
          }}
        </ThemeContext.Consumer>
      ))}
    </VideosUnorderedList>
  )

  renderNoSavedVideos = () => (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <FailureHeading>No saved videos found</FailureHeading>
      <FailureViewDescription>
        You can save your videos while watching them.
      </FailureViewDescription>
    </FailureViewContainer>
  )

  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme, savedVideosList} = value

            return (
              <TrendingMainContainer>
                <SideMenuBar />
                <TrendingRouteVideosBannerContainer
                  data-testid="savedVideos"
                  bg={isDarkTheme}
                >
                  <TrendingRouteBannerContainer bg={isDarkTheme}>
                    <TrendingImage bg={isDarkTheme}>
                      <HiFire color="#ff0000" fontSize="36" />
                    </TrendingImage>
                    <TrendingHeading bg={isDarkTheme}>
                      Saved Videos
                    </TrendingHeading>
                  </TrendingRouteBannerContainer>
                  <TrendingVideosContainer>
                    {savedVideosList.length > 0
                      ? this.renderVideosList(savedVideosList)
                      : this.renderNoSavedVideos()}
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

export default SavedVideos
