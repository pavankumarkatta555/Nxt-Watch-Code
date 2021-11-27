import {Link} from 'react-router-dom'
import {format, formatDistanceStrict} from 'date-fns'
import {
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
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const VideoItem = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channelName,
    channelLogo,
  } = videoDetails

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
          <VideoListItem key={id}>
            <Link className="jobs-link-item" key={id} to={`/videos/${id}`}>
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
            </Link>
          </VideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
