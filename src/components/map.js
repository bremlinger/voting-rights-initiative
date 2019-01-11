import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"
import USA from "../data/states.json"
import vriData from "../data/vriData.json"
import { stateCaseDetails } from "./stateCaseDetails";
import { StateList } from "./statelist";


const stateData = (stateID) => {
  if (stateID in vriData) {
    return vriData[stateID]['numCases']
    } else {
    return 0 }
}

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const popScale = scaleLinear()
  .domain([0,3,5])
  .range(["#CFD8DC","#607D8B","#37474F"])

export class ChoroplethMap extends Component {
//code adapted from https://www.react-simple-maps.io/choropleth-map

  constructor(props){
    super(props);
    this.state = {stateCaseDetails: stateCaseDetails};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(geography, evt) {
    let stateID = geography.properties.id
    console.log(this.state.stateCaseDetails[stateID]);
    if (this.state.stateCaseDetails[stateID].numCases) {
      let selectedState = Object.assign(this.state.stateCaseDetails[stateID])
      if (selectedState.show ? selectedState.show = false : selectedState.show = true);
      this.setState({selectedState})
    }
  }

  render() {
    return (
      <div style={wrapperStyles}>
      <h1 align="center">Click on a state to see VRI results:</h1>
        <ComposableMap
          projection = 'albersUsa'
          projectionConfig={{
            scale: 1000,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning={true}>
            <Geographies geography={ USA }>
              {(geographies, projection) => geographies.map((geography, i) => (
                <Geography
                  key={ i }
                  geography={ geography }
                  projection={ projection }
                  onClick={ this.handleClick }
                  style={{
                    default: {
                      fill: popScale(stateData(geography.properties.id)),
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#263238",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#263238",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    }
                  }}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <StateList stateCaseDetails={this.state.stateCaseDetails}/>
      </div>
    )
  }
}

