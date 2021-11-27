import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {format, formatDistanceStrict} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Cookie from 'js-cookie'

import Header from '../Header'
import SideMenuBar from '../SideMenuBar'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoPlayerMainContainer,
  VideoPlayerDescriptionContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureViewDescription,
  RetryButton,
  VideoPlayerDescriptionResponsiveContainer,
  VideoPlayerContainer,
  VideoDescriptionContainer,
  VideoTitle,
  ViewPublishedButtonsContainer,
  ViewPublishedContainer,
  ViewListItem,
  TimeListItem,
  LikeDisLikeSaveButtonsList,
  ButtonListItem,
  DLSButton,
  HorizontalLine,
  ChannelContainer,
  ChannelLogo,
  ChannelDescriptionContainer,
  ChannelSubscribers,
  ChannelName,
  Description,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoPlayer extends Component {
  state = {
    videoDetails: [],
    loadingStatus: apiConstants.initial,
    likeBtn: false,
    disLikeBtn: false,
    saveBtn: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickRetryBtn = () => {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState({likeBtn: true, disLikeBtn: false})
  }

  onClickDisLike = () => {
    this.setState({likeBtn: false, disLikeBtn: true})
  }

  changeSaveBtnInState = () => {
    this.setState(prevState => ({saveBtn: !prevState.saveBtn}))
  }

  getVideoDetails = async () => {
    this.setState({loadingStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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

      const updatedVideoDetails = {
        id: videoDetailsData.video_details.id,
        title: videoDetailsData.video_details.title,
        videoUrl: videoDetailsData.video_details.video_url,
        thumbnailUrl: videoDetailsData.video_details.thumbnail_url,
        viewCount: videoDetailsData.video_details.view_count,
        publishedAt: videoDetailsData.video_details.published_at,
        description: videoDetailsData.video_details.description,
        channelName: videoDetailsData.video_details.channel.name,
        channelLogo: videoDetailsData.video_details.channel.profile_image_url,
        subscriberCount:
          videoDetailsData.video_details.channel.subscriber_count,
      }
      this.setState({
        loadingStatus: apiConstants.success,
        videoDetails: updatedVideoDetails,
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

  renderVideoDetails = () => {
    const {videoDetails, likeBtn, disLikeBtn, saveBtn} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideosFunc} = value

          const onClickSave = () => {
            savedVideosFunc(videoDetails)
            this.changeSaveBtnInState()
          }

          const formattedDate = format(
            new Date(videoDetails.publishedAt),
            'yyyy-MM-dd',
          )
          const replacedDate = formattedDate.split('-')

          const formattedToNow = formatDistanceStrict(
            new Date(replacedDate[0], replacedDate[1], replacedDate[2]),
            new Date(),
          )

          return (
            <VideoPlayerDescriptionResponsiveContainer>
              <VideoPlayerContainer>
                <ReactPlayer
                  url={videoDetails.videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoPlayerContainer>
              <VideoDescriptionContainer>
                <VideoTitle bg={isDarkTheme}>{videoDetails.title}</VideoTitle>
                <ViewPublishedButtonsContainer>
                  <ViewPublishedContainer>
                    <ViewListItem>{videoDetails.viewCount} views</ViewListItem>
                    <TimeListItem>{formattedToNow} ago</TimeListItem>
                  </ViewPublishedContainer>
                  <LikeDisLikeSaveButtonsList>
                    <ButtonListItem bg={likeBtn}>
                      <BiLike />
                      <DLSButton
                        type="button"
                        bg={likeBtn}
                        onClick={this.onClickLike}
                      >
                        Like
                      </DLSButton>
                    </ButtonListItem>
                    <ButtonListItem bg={disLikeBtn}>
                      <BiDislike />
                      <DLSButton
                        type="button"
                        bg={disLikeBtn}
                        onClick={this.onClickDisLike}
                      >
                        DisLike
                      </DLSButton>
                    </ButtonListItem>
                    <ButtonListItem bg={saveBtn}>
                      <MdPlaylistAdd />
                      <DLSButton
                        type="button"
                        onClick={onClickSave}
                        bg={saveBtn}
                      >
                        {saveBtn ? 'Saved' : 'Save'}
                      </DLSButton>
                    </ButtonListItem>
                  </LikeDisLikeSaveButtonsList>
                </ViewPublishedButtonsContainer>
              </VideoDescriptionContainer>
              <HorizontalLine />
              <ChannelContainer>
                <ChannelLogo
                  src={videoDetails.channelLogo}
                  alt="channel logo"
                />
                <ChannelDescriptionContainer>
                  <ChannelName bg={isDarkTheme}>
                    {videoDetails.channelName}
                  </ChannelName>
                  <ChannelSubscribers>
                    {videoDetails.subscriberCount} subscribers
                  </ChannelSubscribers>
                </ChannelDescriptionContainer>
              </ChannelContainer>
              <Description bg={isDarkTheme}>
                {videoDetails.description}
              </Description>
            </VideoPlayerDescriptionResponsiveContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideos = () => {
    const {loadingStatus} = this.state

    switch (loadingStatus) {
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.success:
        return this.renderVideoDetails()
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
              <VideoPlayerMainContainer>
                <SideMenuBar />
                <VideoPlayerDescriptionContainer
                  data-testid="videoItemDetails"
                  bg={isDarkTheme}
                >
                  {this.renderVideos()}
                </VideoPlayerDescriptionContainer>
              </VideoPlayerMainContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default VideoPlayer
