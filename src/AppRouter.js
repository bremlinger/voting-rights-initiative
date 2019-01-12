import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import './AppRouter.css';
import { MapPage } from './components/mapPage';
import { AllCasesTable } from './components/allCasesTable';
import { About } from './components/about';



const AppRouter = () => (
  <Router>
    <div className="containter-fluid">
    <div class="row" style={{paddingLeft:"15px",paddingRight:"15px"}}>
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1}>
          <Link to="/data/">The Data</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/about/">About</Link>
        </NavItem>
      </Nav>
      </Navbar>
      </div>


      <Route path="/" exact component={MapPage} />
      <Route path="/data/" component={AllCasesTable} />
      <Route path="/about/" component={About} />
    </div>
  </Router>
);

export default AppRouter;
