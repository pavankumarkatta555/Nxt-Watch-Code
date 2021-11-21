import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'

import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTabId: 'HOME',
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  activeTabIdFunc = activeTabId => {
    this.setState({activeTabId})
  }

  render() {
    const {isDarkTheme, activeTabId} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeTabId,
          toggleTheme: this.toggleTheme,
          activeTabIdFunc: this.activeTabIdFunc,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
