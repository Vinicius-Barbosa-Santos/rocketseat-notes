import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { Routes } from './routes/index'
import { AuthContextProvider } from './contexts/AuthContext'
import { Global } from './styles/global'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
)
