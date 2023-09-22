import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { Global } from './styles/global'
import { Details } from './pages/Details'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Details />
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
)
