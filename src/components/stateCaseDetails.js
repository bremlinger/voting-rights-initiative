import React from 'react';
import { StateElement } from './stateElement';


//set default values
export let stateCaseDetails = {
    AL : {name: 'AL', fullname : 'Alabama'},
    AK : {name: 'AK', fullname : 'Alaska'},
    AZ : {name: 'AZ', fullname : 'Arizona'},
    AR : {name: 'AR', fullname : 'Arkansas'},
    CA : {name: 'CA', fullname : 'California'},
    CO : {name: 'CO', fullname : 'Colorado'},
    CT : {name: 'CT', fullname : 'Connecticut'},
    DE : {name: 'DE', fullname : 'Delaware'},
    FL : {name: 'FL', fullname : 'Florida'},
    GA : {name: 'GA', fullname : 'Georgia'},
    HI : {name: 'HI', fullname : 'Hawaii'},
    ID : {name: 'ID', fullname : 'Idaho'},
    IL : {name: 'IL', fullname : 'Illinois'},
    IN : {name: 'IN', fullname : 'Indiana'},
    IA : {name: 'IA', fullname : 'Iowa'},
    KS : {name: 'KS', fullname : 'Kansas'},
    KY : {name: 'KY', fullname : 'Kentucky'},
    LA : {name: 'LA', fullname : 'Louisiana'},
    ME : {name: 'ME', fullname : 'Maine'},
    MD : {name: 'MD', fullname : 'Maryland'},
    MA : {name: 'MA', fullname : 'Massachusetts'},
    MI : {name: 'MI', fullname : 'Michigan'},
    MN : {name: 'MN', fullname : 'Minnesota'},
    MS : {name: 'MS', fullname : 'Mississippi'},
    MO : {name: 'MO', fullname : 'Missouri'},
    MT : {name: 'MT', fullname : 'Montana'},
    NE : {name: 'NE', fullname : 'Nebraska'},
    NV : {name: 'NV', fullname : 'Nevada'},
    NH : {name: 'NH', fullname : 'New Hampshire'},
    NJ : {name: 'NJ', fullname : 'New Jersey'},
    NM : {name: 'NM', fullname : 'New Mexico'},
    NY : {name: 'NY', fullname : 'New York'},
    NC : {name: 'NC', fullname : 'North Carolina'},
    ND : {name: 'ND', fullname : 'North Dakota'},
    OH : {name: 'OH', fullname : 'Ohio'},
    OK : {name: 'OK', fullname : 'Oklahoma'},
    OR : {name: 'OR', fullname : 'Oregon'},
    PA : {name: 'PA', fullname : 'Pennsylvania'},
    RI : {name: 'RI', fullname : 'Rhode Island'},
    SC : {name: 'SC', fullname : 'South Carolina'},
    SD : {name: 'SD', fullname : 'South Dakota'},
    TN : {name: 'TN', fullname : 'Tennessee'},
    TX : {name: 'TX', fullname : 'Texas'},
    UT : {name: 'UT', fullname : 'Utah'},
    VT : {name: 'VT', fullname : 'Vermont'},
    VA : {name: 'VA', fullname : 'Virginia'},
    WA : {name: 'WA', fullname : 'Washington'},
    WV : {name: 'WV', fullname : 'West Virginia'},
    WI : {name: 'WI', fullname : 'Wisconsin'},
    WY : {name: 'WY', fullname : 'Wyoming'},
    };

for (let state in stateCaseDetails) {
  let stateObject = stateCaseDetails[state];
  let elementID = stateObject.name + "_info";

  //hide by default
  stateObject['show'] = false;

  //create elements using StateElement
  stateObject.element = <StateElement key={elementID} obj={stateObject} />
  };
