import {Component} from 'react'

import {IoCloseSharp} from 'react-icons/io5'
import {BiSearch} from 'react-icons/bi'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeMainContainer,
  HomeCardModalContainer,
  HomeCardModalCloseBtn,
  HomeCardModalWebsiteLogo,
  HomeCardModalContentContainer,
  HomeCardModalContent,
  HomeCardModalGetItNowBtn,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearchIconBtn,
} from './styledComponents'
import './index.css'

class Home extends Component {
  state = {
    banner: true,
  }

  onClickBanner = () => {
    this.setState({banner: false})
  }

  render() {
    const {banner} = this.state
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <HomeMainContainer bg={isDarkTheme}>
                {banner && (
                  <HomeCardModalContainer bg={isDarkTheme}>
                    <HomeCardModalCloseBtn onClick={this.onClickBanner}>
                      <IoCloseSharp />
                    </HomeCardModalCloseBtn>
                    <HomeCardModalContentContainer>
                      <HomeCardModalWebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
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
                  <HomeSearchInput type="search" placeholder="Search" />
                  <HomeSearchIconBtn type="button">
                    <BiSearch />
                  </HomeSearchIconBtn>
                </HomeSearchContainer>
              </HomeMainContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default Home
