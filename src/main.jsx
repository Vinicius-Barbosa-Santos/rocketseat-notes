import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { Global } from './styles/global'
import { SignUp } from './pages/SignUp'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SignUp />
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
)
