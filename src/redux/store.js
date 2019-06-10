import { createStore } from "redux";

const initialState = {
  propertyName: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgageAmt: 0,
  desiredRent: 0,
  properties: []

};

export const ADD_PROPERTY_NAME = "ADD_PROPERTY_NAME";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_CITY = "ADD_CITY";
export const ADD_STATE = "ADD_STATE";
export const ADD_ZIP = "ADD_ZIP";
export const ADD_IMG = "ADD_IMG";
export const ADD_MORTGAGE = "ADD_MORTGAGE";
export const ADD_RENT = "ADD_RENT";
export const CLEAR_INPUTS = "CLEAR_INPUTS";
export const UPDATE_PROPERTIES = "GET_PROPERTIES"

function reducer(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case ADD_PROPERTY_NAME:
      return { ...state, propertyName: action.payload };
    case ADD_ADDRESS:
      return { ...state, address: action.payload };
    case ADD_CITY:
      return { ...state, city: action.payload };
    case ADD_STATE:
      return { ...state, state: action.payload };
    case ADD_ZIP:
      return { ...state, zip: action.payload };
    case ADD_IMG:
      return { ...state, img: action.payload };
    case ADD_MORTGAGE:
      return { ...state, mortgageAmt: action.payload };
    case ADD_RENT:
      return { ...state, desiredRent: action.payload };
    case CLEAR_INPUTS:
      return {
        ...state,
        propertyName: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        img: "",
        mortgageAmt: 0,
        desiredRent: 0
      }
    case UPDATE_PROPERTIES:
    return {state, properties: action.payload}
    default:
      return state;
  }
}

export default createStore(reducer);
