import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import reducers from './reducer'
import Head from 'components/templetes/Head'
import { GlobalStyle } from 'utils/styled/globalStyle'
import theme from './utils/theme'

const store = createStore(reducers())

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
