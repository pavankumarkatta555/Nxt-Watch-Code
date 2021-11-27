import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import Cookie from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideMenuBar from '../SideMenuBar'

import {
  GamingMainContainer,
  GamingRouteBannerGamesContainer,
  GamingRouteBannerContainer,
  GamingImage,
  GamingHeading,
  GamingGamesContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureViewDescription,
  RetryButton,
  GamesListContainer,
  GamesListItem,
  GameThumbnailImage,
  GameTitle,
  GameDescription,
} from './styledComponents'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    loadingStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.gettingGamesList()
  }

  onClickRetryBtn = () => {
    this.gettingGamesList()
  }

  gettingGamesList = async () => {
    this.setState({loadingStatus: apiConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const jwtToken = Cookie.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const apiResponse = await fetch(apiUrl, options)

    if (apiResponse.ok) {
      const gamesResponseData = await apiResponse.json()

      const updatedGamesList = gamesResponseData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        loadingStatus: apiConstants.success,
        gamesList: updatedGamesList,
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

  renderGamesVideos = () => {
    const {gamesList} = this.state

    return (
      <>
        <ThemeContext>
          {value => {
            const {isDarkTheme} = value

            return (
              <GamesListContainer>
                {gamesList.map(each => {
                  const {id, title, thumbnailUrl, viewCount} = each

                  return (
                    <Link
                      className="jobs-link-item"
                      key={id}
                      to={`/videos/${id}`}
                    >
                      <GamesListItem key={id}>
                        <GameThumbnailImage
                          src={thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <GameTitle bg={isDarkTheme}>{title}</GameTitle>
                        <GameDescription>{viewCount} Watching</GameDescription>
                        <GameDescription>World Wide</GameDescription>
                      </GamesListItem>
                    </Link>
                  )
                })}
              </GamesListContainer>
            )
          }}
        </ThemeContext>
      </>
    )
  }

  renderGames = () => {
    const {loadingStatus} = this.state

    switch (loadingStatus) {
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.success:
        return this.renderGamesVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <GamingMainContainer>
                <SideMenuBar />
                <GamingRouteBannerGamesContainer
                  data-testid="gaming"
                  bg={isDarkTheme}
                >
                  <GamingRouteBannerContainer bg={isDarkTheme}>
                    <GamingImage bg={isDarkTheme}>
                      <SiYoutubegaming color="#ff0000" fontSize="36" />
                    </GamingImage>
                    <GamingHeading bg={isDarkTheme}>Gaming</GamingHeading>
                  </GamingRouteBannerContainer>
                  <GamingGamesContainer>
                    {this.renderGames()}
                  </GamingGamesContainer>
                </GamingRouteBannerGamesContainer>
              </GamingMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
