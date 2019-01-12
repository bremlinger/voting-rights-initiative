import React from 'react';
import vriData from '../data/vriData.json';
import { Table } from 'react-bootstrap';

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
  }

  pluralize(numCases){
    return (numCases > 1 ? 's.' :'.') 
  }

  render() {
    if (this.state.hasCases) {
      return (
      <div id="stateElement" className="container-fluid">
      <h1>{this.state.fullname} had {this.state.numCases} VRA suit{this.pluralize(this.state.numCases)}</h1>
        <Table striped bordered condensed hover>
          <thead>
            <tr> 
              <th width='20%'>Case Name</th>
              <th>Citation</th>
              <th>Success</th>
              <th>Finding of Intentional Discrimination?</th>
            </tr>
          </thead>
          <tbody>
        {this.state.cases.map((x,i) => {
          let key = this.state.name + i;
          return (<tr key={key}>
                   <td width='40%'>{x.caseTitle}</td>
                   <td>{x.citation}</td>
                   <td>{x.success}</td>
                   <td>{x.intent}</td>
                 </tr>)
        })}
          </tbody>
        </Table>
      </div>
      )
    } else {
      return (
        <div id="stateElement" className="container-fluid">
          <h1>{this.state.fullname} had no VRA suits.</h1>
        </div>
    )}
  }
  }
