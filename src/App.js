import React, { Component } from 'react';
import { IndexRoute, Route, BrowserRouter as Router } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import SkillsView from './skills/SkillsView'
import Skills from './skills/Skills'
import Login from './login/Login.js'

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Arolla Skillz</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/dashboard">Dashboard</NavItem>
      <NavItem eventKey={2} href="/login">Login</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

const skills = new Skills();

const skillsView = (props) => {
  return <SkillsView skills={skills} {...props} />
};

class App extends Component {

  render() {
    return (
        <Router>
        <div className="App">
        {navbarInstance}
          <Route path='/dashboard' component={skillsView} />
          <Route path='/login' component={Login} />
        </div>
        </Router>

    );
  }
}

export default App;
