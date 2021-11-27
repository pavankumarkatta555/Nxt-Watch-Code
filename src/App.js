import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import SavedVideos from './components/SavedVideosRoute'
import Gaming from './components/GamingRoute'
import VideoPlayer from './components/VideoItemDetailsRoute'
import NotFound from './components/NotFoundRoute'

import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTabId: 'HOME',
    savedVideosList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  activeTabIdFunc = activeTabId => {
    this.setState({activeTabId})
  }

  savedVideosFunc = videoDetails => {
    const {savedVideosList} = this.state

    const findingVideo = savedVideosList.find(
      each => each.id === videoDetails.id,
    )

    const filteredList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )

    if (findingVideo === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    } else {
      this.setState({savedVideosList: filteredList})
    }
  }

  render() {
    const {isDarkTheme, activeTabId, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeTabId,
          savedVideosList,
          toggleTheme: this.toggleTheme,
          activeTabIdFunc: this.activeTabIdFunc,
          savedVideosFunc: this.savedVideosFunc,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
