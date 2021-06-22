import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { GlobalStyle } from 'utils/styled/globalStyle'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from './utils/theme'
import Head from 'components/templetes/Head'

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <Head />
          <App />
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
