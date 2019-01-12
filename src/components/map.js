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

const mapData = vriData.aggregateForMap;


//use this so states that have no data still get a value for colorizing
const stateData = (stateID) => {
  if (stateID in mapData) {
    return mapData[stateID]['numCases']
    } else {
    return 0 }
}

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const popScale = scaleLinear()
  .domain([0,5,20])
  .range(["#CFD8DC","#607D8B","#37474F"])

export class ChoroplethMap extends Component {
//code adapted from https://www.react-simple-maps.io/choropleth-map

  constructor(props){
    super(props);
    this.state = {stateCaseDetails: props.stateCaseDetails};
    this.handleClick = props.handleClick;
    this.onClick = this.onClick.bind(this);
  }

  onClick(geography, evt) {
    //pass the two letter abbreviation of the clicked-on state to MapPage
    this.handleClick(geography.properties.id)
  }

  render() {
    return (
      <div id='MapPage' style={wrapperStyles}>
      <h1 align="center">Click on a state to see VRI research results:</h1>
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
                  onClick={ this.onClick }
                  style={{
                    default: {
                      fill: popScale(stateData(geography.properties.id)),
                      stroke: "#505050",
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
      </div>
    )
  }
}

