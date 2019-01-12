import React from 'react';
import { Table } from 'react-bootstrap';
import { BrowserRouter as Router, Link} from "react-router-dom"; 
import vriData from '../data/vriData.json';

//look at an array that's just the rows of the csv file
const cases = vriData.allData;

//order the rows. Here we do it by state, but change props to whatever
const alphabetizeCases = (case1, case2) => {
  let prop1 = case1.state
  let prop2 = case2.state
  if(prop1 < prop2)
    return -1;
  if (prop1 > prop2)
    return 1;
  return 0;
}

cases.sort(alphabetizeCases)


export class AllCasesTable extends React.Component {

    blanksToUnclear(d) {
        return(d === '' ? 'Unclear' : d)
    }

  render () {
    let key = '';
    return (
      <Router>
      <div className='container-fluid' id='allCasesTable'>
      <p style={{textAlign:"center"}}>
      Download the full dataset <Link to="../data/data.csv" download target="_self" >here</Link>.</p>
      <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th width='5%'>#</th>
          <th >Case Name</th>
          <th width='20%'>Citation</th>
          <th width='10%'>State</th>
          <th width='10%'>Year</th>
          <th width='5%'>Success?</th>
          <th width='5%'>Finding of Intentional Discrimination?</th>
        </tr>
      </thead>
      <tbody>
        {cases.map((c,i) => {
          key = c.state+"_"+i
          return (
            <tr key={key}>
              <td>{i+1}</td>
              <td>{c.caseTitle}</td>
              <td>{c.citation}</td>
              <td>{c.state}</td>
              <td>{c.year}</td>
              <td style={{textAlign:"center"}}>{c.success}</td>
              <td style={{textAlign:"center"}}>{this.blanksToUnclear(c.intent)}</td>
            </tr>)})
        }
      </tbody>
      </Table>
      </div>
      </Router>
  )}
  }
