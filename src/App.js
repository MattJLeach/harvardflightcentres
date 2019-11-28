import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Trial from './pages/Trial';
import Footer from './components/Footer';
import styled from 'styled-components';
import logo from './assets/logo.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
`;

const Logo = styled.img`
  display: block;
  height: 100px;
  margin: 10px auto;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <HeadContainer>
          <Logo src={logo} alt="Harvard Flight Centers" />
          <Navigation />
        </HeadContainer>
        {/* <Container> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/training-courses">
              <Courses />
            </Route>
            <Route path="/trial-lessons">
              <Trial />
            </Route>
          </Switch>
        {/* </Container> */}
        <Footer />
      </Router>
    );
  }
}

export default App;
