import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Projects from "./Projects";
import {
  onPhone,
  onDesktop,
  onTablet,
  onWideDesktop,
} from "./utils/responsivecode";

const App = () => {
  const [home, setHome] = useState(false);
  const [work, setWork] = useState(false);
  const [projects, setProjects] = useState(false);
  useEffect(() => {
    document.title = "Vishal Handa || Portfolio";
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
  padding: 3rem;
  background-color: #f4f4f4;
  overflow-x: hidden;
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
