import Header from '../Header'
import SideMenuBar from '../SideMenuBar'

import ThemeContext from '../../context/ThemeContext'
import {
  NotFoundMainContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundContainer,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const notFoundImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

        return (
          <NotFoundContainer>
            <SideMenuBar />
            <NotFoundMainContainer bg={isDarkTheme}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading bg={isDarkTheme}>Page Not Found</NotFoundHeading>
              <NotFoundDescription bg={isDarkTheme}>
                We are sorry, the page you requested could <br /> not be found.
              </NotFoundDescription>
            </NotFoundMainContainer>
          </NotFoundContainer>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
