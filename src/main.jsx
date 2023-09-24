import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { Global } from './styles/global'
import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
)
