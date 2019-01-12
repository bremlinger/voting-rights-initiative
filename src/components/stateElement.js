import React from 'react';
import vriData from '../data/vriData.json';

const mapData = vriData.aggregateForMap;

export class StateElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : props.obj.name,
      fullname : props.obj.fullname,
    }

    if (mapData[this.state.name]) {
      this.state.hasCases = true;
      this.state.numCases = mapData[this.state.name].numCases;
      this.state.cases = mapData[this.state.name].cases;
      } else {
        this.state.hasCases = false;
      }

    this.createHTML = this.createHTML.bind(this);
  }

  createHTML(){
    if (this.state.hasCases) {
      return (
      <div>
      <h1>{this.state.fullname} had {this.state.numCases} VRA suits.</h1>
        <ul>
        {this.state.cases.map((x,i) => {
          let key = this.state.name + i;
          let text = x.caseTitle + ' (' + x.citation + ')';
          return <li key={key} align="left">{text}</li>
        })}
        </ul>
      </div>
      )
    } else {
      return <h1>{this.state.fullname} had no VRA suits.</h1>
    }
  }

  render() {
    return this.createHTML()
  }

}
