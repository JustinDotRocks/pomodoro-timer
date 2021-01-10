import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CountdownTimer from './components/TimerSettings';

const NavBarContainer = styled.nav`
  background-color: #0089aa;
  display: flex;
  align-items: center;

  height: 35px;

  border-bottom: 3px solid #008894;

`

const NavItemsList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;

`
const NavItem = styled.li`
  margin-left: 1.2rem;

  > * {
    text-decoration: none;
    color: white;
  }
`

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
        <NavBarContainer>
          <NavItemsList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/settings">Settings</Link>
            </NavItem>
          </NavItemsList>
        </NavBarContainer>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/settings">
            <Main>
              <h1>
                Settings
              </h1>
              <CountdownTimerContainer>
                <CountdownTimer />
              </CountdownTimerContainer>
            </Main>
          </Route>
          <Route path="/">
            <Main>
              <h1>
                Pomodoro Timer
              </h1>
              
            </Main>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

