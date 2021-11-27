import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginRouteMainContainer,
  LoginRouteResponsiveContainer,
  LoginFormContainer,
  LoginWebsiteLogo,
  LoginForm,
  LoginInputContainer,
  LoginInputLabel,
  LoginInput,
  LoginCheckBoxContainer,
  LoginCheckBoxInput,
  LoginCheckBoxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errMsg: '',
    showErrMsg: false,
  }

  onSubmitSuccess = JWTtoken => {
    const {history} = this.props

    Cookies.set('jwt_token', JWTtoken, {expires: 30})
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

          const loginWebsiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginRouteMainContainer bg={isDarkTheme}>
              <LoginRouteResponsiveContainer>
                <LoginFormContainer bg={isDarkTheme}>
                  <LoginWebsiteLogo src={loginWebsiteLogo} alt="website logo" />
                  <LoginForm onSubmit={this.onSubmitForm}>
                    <LoginInputContainer>
                      <LoginInputLabel
                        htmlFor="loginUserNameInput"
                        bg={isDarkTheme}
                      >
                        USERNAME
                      </LoginInputLabel>
                      <LoginInput
                        id="loginUserNameInput"
                        type="text"
                        placeholder="Username"
                        onChange={this.onChangeUsername}
                        value={username}
                      />
                    </LoginInputContainer>
                    <LoginInputContainer>
                      <LoginInputLabel
                        htmlFor="loginUserNameInput"
                        bg={isDarkTheme}
                      >
                        PASSWORD
                      </LoginInputLabel>
                      <LoginInput
                        id="loginPasswordInput"
                        type={showingPassword}
                        placeholder="Password"
                        onChange={this.onChangePassword}
                        value={password}
                      />
                    </LoginInputContainer>
                    <LoginCheckBoxContainer>
                      <LoginCheckBoxInput
                        type="checkbox"
                        id="loginInputCheckBox"
                        onClick={this.onClickCheckbox}
                      />
                      <LoginCheckBoxLabel
                        htmlFor="loginInputCheckBox"
                        bg={isDarkTheme}
                      >
                        Show Password
                      </LoginCheckBoxLabel>
                    </LoginCheckBoxContainer>
                    <LoginButton type="submit">Login</LoginButton>
                    {showErrMsg && <ErrorMsg>*{errMsg}</ErrorMsg>}
                  </LoginForm>
                </LoginFormContainer>
              </LoginRouteResponsiveContainer>
            </LoginRouteMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
