import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Top from 'components/pages/Top'
import { ROUTE } from 'utils/constant/number'
// import Game from 'components/pages/Game'
import Game from './container/game'
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Route exact path={ROUTE.TOP} render={() => <Top />} />
        <Route exact path={ROUTE.GAME} render={() => <Game />} />
      </Router>
    </>
  )
}

export default App
