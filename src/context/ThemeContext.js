import react from 'react'

const ThemeContext = react.createContext({
  isDarkTheme: false,
  activeTabId: 'HOME',
  toggleTheme: () => {},
  activeTabIdFunc: () => {},
})

export default ThemeContext
