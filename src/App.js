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
import PostsList from './components/posts/PostsList';
import AddPostForm from './components/posts/AddPostForm';
import SinglePostPage from './components/posts/SinglePostPage';

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
            </Main>
          </Route>
          <Route exact path="/posts/:postId" >
            <Main>
              <SinglePostPage />
            </Main>
          </Route>
          <Route path="/posts">
            <Main>
              <AddPostForm />
              <PostsList />
            </Main>
          </Route>
          <Route path="/counter">
            <Main>
              <Counter />
            </Main>
          </Route>
          <Route path="/">
            <Main>
              <Timer />
            </Main>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
