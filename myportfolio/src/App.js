import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import GlobalStyles from "./GlobalStyles";
import {
  onPhone,
  onDesktop,
  onTablet,
  onWideDesktop,
} from "./utils/responsivecode";

const App = () => {
  useEffect(() => {
    document.title = "Vishal Handa || Portfolio";
    document.body.style.margin = "0";
  }, []);
  return (
    <Wrapper>
      {/* <GlobalStyles /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
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
  background-color: #f4f4f4;
  overflow-x: hidden;
  padding: 3rem;
  ${onWideDesktop()} {
    padding: 3rem;
  }
  ${onDesktop()} {
    padding: 3rem;
  }
  ${onTablet()} {
    padding: 0rem;
  }
  ${onPhone()} {
    padding: 0rem;
  }
`;

export default App;
