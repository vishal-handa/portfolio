import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Writings from "./Writings";

const App = () => {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/writings">
            <Writings />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin: auto;
  padding: 1.5rem;
  height: 100vh;
  width: 100vw;
  background-color: #f4f4f4;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export default App;
