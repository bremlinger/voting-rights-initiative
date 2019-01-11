import React from 'react';

export class StateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stateCaseDetails : props.stateCaseDetails }
//    this.statesThatShouldDisplay = this.statesThatShouldDisplay.bind(this)
  }

  statesThatShouldDisplay(){
    let elements = []
    for (let st in this.state.stateCaseDetails) {
      if (this.state.stateCaseDetails[st]['element']){ 
        elements.push(this.state.stateCaseDetails[st]) 
        }
    }
    return elements
  }

  render(){
    let elements = this.statesThatShouldDisplay()
    return (<div>
    {elements.map(x => {
      if (x.show) {return x.element}
      })}
    </div>) 
  }
}
