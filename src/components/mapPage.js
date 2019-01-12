import React from 'react';
//import vriData from "../data/vriData.json"
import { ChoroplethMap } from './map';
import { stateCaseDetails } from "./stateCaseDetails";
import { StateList } from "./statelist";

export class MapPage extends React.Component {
  constructor(props) {
    super(props);

    //stateCaseDetails creates HTML elements for each state that has data
    this.state = {stateCaseDetails: stateCaseDetails};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(stateID) {
    let selectedState = Object.assign(this.state.stateCaseDetails[stateID])
    if (selectedState.show ? selectedState.show = false : selectedState.show = true);
    this.setState({selectedState})
    }

  render() {
    return (
      <div>
      <ChoroplethMap stateCaseDetails={this.state.stateCaseDetails} 
      handleClick={this.handleClick} />
      <StateList stateCaseDetails={this.state.stateCaseDetails} />
      </div>
    )};

}
