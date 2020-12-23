import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CountdownTimer from './components/CountdownTimer';


const Main = styled.div`
  height: 100vh;
  width: 100vw;
`
const CountdownTimerContainer = styled.div`
  font-size: 2.5rem;
`

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/settings">
            <Main>
              <h1>
                Settings
              </h1>
            </Main>
          </Route>
          <Route path="/">
            <Main>
              <h1>
                Pomodoro Timer
              </h1>
              <CountdownTimerContainer>
                <CountdownTimer />
              </CountdownTimerContainer>
            </Main>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

