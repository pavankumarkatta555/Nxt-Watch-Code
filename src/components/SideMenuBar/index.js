import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeMenuSideMenuBar,
  HomeSideMenuListContainer,
  HomeMenuListItem,
  HomeSideMenuBarBottomSection,
  ContactUsHeading,
  SocialMediaContainer,
  SocialMediaImage,
  SocialMediaDescription,
} from './styledComponents'

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

const SideMenuBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {history} = props
      const {pathname} = history.location

      return (
        <HomeMenuSideMenuBar bg={isDarkTheme}>
          <HomeSideMenuListContainer>
            {popUpLinks.map(each => {
              const {tabId, text, navLink, icon} = each

              return (
                <HomeMenuListItem key={tabId} isActive={navLink === pathname}>
                  {icon}
                  <Link key={tabId} className="nav-link" to={navLink}>
                    {text}
                  </Link>
                </HomeMenuListItem>
              )
            })}
            <HomeSideMenuBarBottomSection>
              <ContactUsHeading bg={isDarkTheme}>CONTACT US</ContactUsHeading>
              <SocialMediaContainer>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaContainer>
              <SocialMediaDescription bg={isDarkTheme}>
                Enjoy! Now to see your <br />
                channels and <br />
                recommendations!
              </SocialMediaDescription>
            </HomeSideMenuBarBottomSection>
          </HomeSideMenuListContainer>
        </HomeMenuSideMenuBar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(SideMenuBar)
