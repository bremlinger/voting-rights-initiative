import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import './AppRouter.css';
import { MapPage } from './components/mapPage';
import { AllCasesTable } from './components/allCasesTable';
import { About } from './components/about';

const homeLink = process.env.PUBLIC_URL + "/"
const dataLink = process.env.PUBLIC_URL + "/data/"
const aboutLink = process.env.PUBLIC_URL + "/about/"

const AppRouter = () => (
  <Router>
    <div className="containter-fluid" style={{paddingLeft:"15px",paddingRight:"15px"}}>
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={homeLink}>Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1}>
          <Link to={dataLink}>The Data</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to={aboutLink}>About</Link>
        </NavItem>
      </Nav>
      </Navbar>


      <Route path={homeLink} exact component={MapPage} />
      <Route path={dataLink} component={AllCasesTable} />
      <Route path={aboutLink} component={About} />
    </div>
  </Router>
);

export default AppRouter;
