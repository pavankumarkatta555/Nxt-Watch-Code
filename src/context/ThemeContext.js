import react from 'react'

const ThemeContext = react.createContext({
  isDarkTheme: false,
  activeTabId: 'HOME',
  savedVideosList: [],
  toggleTheme: () => {},
  activeTabIdFunc: () => {},
  savedVideosFunc: () => {},
})

export default ThemeContext
