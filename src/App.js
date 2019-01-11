import React, { Component } from 'react';
import './App.css';
import { ChoroplethMap } from './components/map';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ChoroplethMap />
      </div>
    );
  }
}

export default App;
