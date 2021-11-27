import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import Cookie from 'js-cookie'

import {BsBrightnessHigh} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {IoMenu, IoCloseSharp} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'
import {
  NavContainer,
  NavWebsiteLogoContainer,
  NavWebsiteLogo,
  NavUnorderedListContainer,
  NavListItem,
  NavMenuIconContainer,
  NavMenuContainer,
  NavMenuListContainer,
  NavMenuListItem,
  NavCloseBtnMobile,
  NavMenuResponsiveContainer,
  NavProfileIconContainer,
  NavProfileLogo,
  NavLogOutPopUpMobile,
  NavLogOutPopUpDesktop,
  NavLogOutBtnMobile,
  NavLogOutBtnDesktop,
  NavPopUpModalContainer,
  NavPopUpModalMsg,
  NavPopUpModalLogOutCancelBtnContainer,
  NavPopUpModalLogOutCancelBtn,
  ThemeButton,
} from './styledComponents'
import './index.css'

const popUpLinks = [
  {
    tabId: 'HOME',
    text: 'Home',
    navLink: '/',
    icon: <AiFillHome />,
  },
  {
    tabId: 'TRENDING',
    text: 'Trending',
    navLink: '/trending',
    icon: <HiFire />,
  },
  {
    tabId: 'GAMING',
    text: 'Gaming',
    navLink: '/gaming',
    icon: <SiYoutubegaming />,
  },
  {
    tabId: 'SAVEDVIDEOS',
    text: 'Saved Videos',
    navLink: '/saved-videos',
    icon: <MdPlaylistAdd />,
  },
]

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const onClickLogOutBtn = () => {
        const {history} = props
        Cookie.remove('jwt_token')
        history.replace('/login')
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const bgModeIcon = isDarkTheme ? <BsBrightnessHigh /> : <FaMoon />

      const {history} = props
      const {pathname} = history.location

      return (
        <NavContainer bg={isDarkTheme}>
          <NavWebsiteLogoContainer>
            <Link to="/">
              <NavWebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
          </NavWebsiteLogoContainer>
          <NavUnorderedListContainer>
            <NavListItem modeColor={isDarkTheme} onClick={onToggleTheme}>
              <ThemeButton data-testid="theme" modeColor={isDarkTheme}>
                {bgModeIcon}
              </ThemeButton>
            </NavListItem>
            <NavListItem modeColor={isDarkTheme}>
              <NavMenuIconContainer>
                <Popup
                  modal
                  trigger={
                    <NavLogOutBtnMobile modeColor={isDarkTheme}>
                      <IoMenu fontSize="28" />
                    </NavLogOutBtnMobile>
                  }
                >
                  {close => (
                    <NavMenuContainer bg={isDarkTheme}>
                      <NavCloseBtnMobile
                        data-testid="close"
                        onClick={() => close()}
                      >
                        <IoCloseSharp color={isDarkTheme ? '#f9f9f9' : ''} />
                      </NavCloseBtnMobile>
                      <NavMenuResponsiveContainer>
                        <NavMenuListContainer>
                          {popUpLinks.map(each => {
                            const {tabId, text, navLink, icon} = each

                            return (
                              <NavMenuListItem
                                key={tabId}
                                isActive={navLink === pathname}
                              >
                                {icon}
                                <Link
                                  key={tabId}
                                  className="nav-link"
                                  to={navLink}
                                >
                                  {text}
                                </Link>
                              </NavMenuListItem>
                            )
                          })}
                        </NavMenuListContainer>
                      </NavMenuResponsiveContainer>
                    </NavMenuContainer>
                  )}
                </Popup>
              </NavMenuIconContainer>
              <NavProfileIconContainer>
                <NavProfileLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavProfileIconContainer>
            </NavListItem>
            <NavListItem modeColor={isDarkTheme}>
              <NavLogOutPopUpMobile>
                <Popup
                  modal
                  trigger={
                    <NavLogOutBtnMobile modeColor={isDarkTheme}>
                      <FiLogOut />
                    </NavLogOutBtnMobile>
                  }
                >
                  {close => (
                    <NavPopUpModalContainer bg={isDarkTheme}>
                      <NavPopUpModalMsg modeColor={isDarkTheme}>
                        Are you sure,you want to logout?
                      </NavPopUpModalMsg>
                      <NavPopUpModalLogOutCancelBtnContainer>
                        <NavPopUpModalLogOutCancelBtn
                          modeColor={isDarkTheme}
                          onClick={() => close()}
                        >
                          Cancel
                        </NavPopUpModalLogOutCancelBtn>
                        <NavPopUpModalLogOutCancelBtn
                          onClick={onClickLogOutBtn}
                          bg
                        >
                          Confirm
                        </NavPopUpModalLogOutCancelBtn>
                      </NavPopUpModalLogOutCancelBtnContainer>
                    </NavPopUpModalContainer>
                  )}
                </Popup>
              </NavLogOutPopUpMobile>
              <NavLogOutPopUpDesktop>
                <Popup
                  modal
                  trigger={
                    <NavLogOutBtnDesktop modeColor={isDarkTheme}>
                      Logout
                    </NavLogOutBtnDesktop>
                  }
                >
                  {close => (
                    <NavPopUpModalContainer bg={isDarkTheme}>
                      <NavPopUpModalMsg modeColor={isDarkTheme}>
                        Are you sure, you want to logout?
                      </NavPopUpModalMsg>
                      <NavPopUpModalLogOutCancelBtnContainer>
                        <NavPopUpModalLogOutCancelBtn
                          modeColor={isDarkTheme}
                          onClick={() => close()}
                        >
                          Cancel
                        </NavPopUpModalLogOutCancelBtn>
                        <NavPopUpModalLogOutCancelBtn
                          onClick={onClickLogOutBtn}
                          bg
                        >
                          Confirm
                        </NavPopUpModalLogOutCancelBtn>
                      </NavPopUpModalLogOutCancelBtnContainer>
                    </NavPopUpModalContainer>
                  )}
                </Popup>
              </NavLogOutPopUpDesktop>
            </NavListItem>
          </NavUnorderedListContainer>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
