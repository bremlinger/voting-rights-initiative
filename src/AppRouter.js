import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './AppRouter.css';
import { MapPage } from './components/mapPage';


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div class="containter-fluid">
      <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">
            <Link to="/">Home</Link>
        </a>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </div>
      </nav>

      <Route path="/" exact component={MapPage} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;
