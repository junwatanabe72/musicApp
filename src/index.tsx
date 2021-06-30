import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import App from './App'
import reducer from './reducer/game'
import reportWebVitals from './reportWebVitals'
import Head from 'components/templetes/Head'
import { GlobalStyle } from 'utils/styled/globalStyle'
import theme from './utils/theme'

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <Head />
          <Provider store={store}>
            <App />
          </Provider>
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
