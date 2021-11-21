import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errMsg: '',
    showErrMsg: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({showErrMsg: true, errMsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const apiResponse = await fetch(loginApiUrl, options)
    const loginResponseData = await apiResponse.json()

    if (apiResponse.ok) {
      this.onSubmitSuccess(loginResponseData.jwt_token)
    } else {
      this.onSubmitFailure(loginResponseData.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, showErrMsg, errMsg} = this.state
    const showingPassword = showPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const loginBgColor = isDarkTheme
            ? 'login-bg-dark-container'
            : 'login-bg-light-container'

          const loginWebsiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const loginFormContainer = isDarkTheme
            ? 'login-form-dark-container'
            : 'login-form-light-container'

          const inputLabelClassName = isDarkTheme
            ? 'input-label-dark'
            : 'input-label-light'

          const errorMsg = isDarkTheme ? 'err-msg-dark' : 'err-msg-light'

          return (
            <div className={`login-bg-container ${loginBgColor}`}>
              <div className="login-responsive-container">
                <form
                  className={`login-form-container ${loginFormContainer}`}
                  onSubmit={this.onSubmitForm}
                >
                  <img
                    src={loginWebsiteLogo}
                    alt="website logo"
                    className="login-website-logo"
                  />
                  <label
                    htmlFor="loginUserNameInput"
                    className={`input-label ${inputLabelClassName}`}
                  >
                    USERNAME
                  </label>
                  <input
                    id="loginUserNameInput"
                    type="text"
                    placeholder="Username"
                    className="login-input"
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                  <label
                    htmlFor="loginUserNameInput"
                    className={`input-label ${inputLabelClassName}`}
                  >
                    PASSWORD
                  </label>
                  <input
                    id="loginPasswordInput"
                    type={showingPassword}
                    placeholder="Password"
                    className="login-input"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                  <div className="check-box-container">
                    <input
                      type="checkBox"
                      id="loginInputCheckBox"
                      className="input-check-box"
                      onClick={this.onClickCheckbox}
                    />
                    <label
                      htmlFor="loginInputCheckBox"
                      className={`input-label-check-box ${inputLabelClassName}`}
                    >
                      Show Passwords
                    </label>
                  </div>
                  <button type="submit" className="login-button">
                    Login
                  </button>
                  {showErrMsg && (
                    <p className={`error-msg ${errorMsg}`}> *{errMsg}</p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
