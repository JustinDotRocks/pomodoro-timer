import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Counter from './components/counter/Counter';
import Timer from './components/timer/Timer';

const Main = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Router>
      <div>
        <Navbar />
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
          <Route path="/counter">
            <Main>
              <h1>
                Counter
              </h1>
              <Counter />
            </Main>
          </Route>
          <Route path="/">
            <Main>
              <h1>
                Pomodoro Timer
              </h1>
              <Timer />
            </Main>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
