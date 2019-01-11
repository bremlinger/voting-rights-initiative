import React from 'react';
import vriData from '../data/vriData.json';

//set default values
export let stateCaseDetails = {
    AL : {show: false,},
    AK : {show: false,},
    AZ : {show: false,},
    AR : {show: false,},
    CA : {show: false,},
    CO : {show: false,},
    CT : {show: false,},
    DE : {show: false,},
    FL : {show: false,},
    GA : {show: false,},
    HI : {show: false,},
    ID : {show: false,},
    IL : {show: false,},
    IN : {show: false,},
    IA : {show: false,},
    KS : {show: false,},
    KY : {show: false,},
    LA : {show: false,},
    ME : {show: false,},
    MD : {show: false,},
    MA : {show: false,},
    MI : {show: false,},
    MN : {show: false,},
    MS : {show: false,},
    MO : {show: false,},
    MT : {show: false,},
    NE : {show: false,},
    NV : {show: false,},
    NH : {show: false,},
    NJ : {show: false,},
    NM : {show: false,},
    NY : {show: false,},
    NC : {show: false,},
    ND : {show: false,},
    OH : {show: false,},
    OK : {show: false,},
    OR : {show: false,},
    PA : {show: false,},
    RH : {show: false,},
    SC : {show: false,},
    SD : {show: false,},
    TN : {show: false,},
    TX : {show: false,},
    UT : {show: false,},
    VT : {show: false,},
    VA : {show: false,},
    WA : {show: false,},
    WV : {show: false,},
    WI : {show: false,},
    WY : {show: false,},
    };

for (let state in stateCaseDetails) {
  if (state in vriData) {
    let numCases = vriData[state]['numCases']
    stateCaseDetails[state].numCases = numCases
    stateCaseDetails[state].element = <h1>{state} had {numCases} VRA suits.</h1>
    }
  };
