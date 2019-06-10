import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store, { ADD_MORTGAGE, ADD_RENT, CLEAR_INPUTS, UPDATE_PROPERTIES } from "../redux/store";

class Step3 extends Component {
  constructor() {
    super();
    this.state = {
      propertyName: store.getState().propertyName,
      address: store.getState().address,
      city: store.getState().city,
      state: store.getState().state,
      zip: store.getState().zip,
      img: store.getState().img,
      mortgageAmt: store.getState().mortgageAmt,
      desiredRent: store.getState().desiredRent
    };
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ mortgageAmt: store.getState().mortgageAmt });
    });
    store.subscribe(() => {
      this.setState({ desiredRent: store.getState().desiredRent });
    });
  }

  submitForm() {
   
    axios.post("/api/property", { name: this.state.propertyName, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip, img: this.state.img, mortgage: this.state.mortgageAmt, rent: this.state.desiredRent }).then(response=> store.dispatch({type: UPDATE_PROPERTIES, payload: response.data}))

    store.dispatch({type:CLEAR_INPUTS })
    
  }

  handleMortgage(e) {
    let action = {
      type: ADD_MORTGAGE,
      payload: e.target.value
    };
    store.dispatch(action);
  }

  handleRent(e) {
    let action = {
      type: ADD_RENT,
      payload: e.target.value
    };
    store.dispatch(action);
  }

  render() {
    console.log(this.state);
    return (
      <div className="S1-component">
        <div className="S1-title">
          <div>Add New Listing</div>
          <button
            className="cancel"
            onClick={() => this.props.history.push(`/`)}
          >
            Cancel
          </button>
        </div>
        <div className="S3-recommended-rent">Recommended Rent:</div>
        <div className="S2-inputs">
          Monthly Mortgage Amount
          <input
            onChange={this.handleMortgage}
            value={this.state.mortgageAmt}
          />
          Desired Monthly Rent
          <input onChange={this.handleRent} value={this.state.desiredRent} />
        </div>
        <div className="S2-next-button">
          <Link to="/step1">
            <button className="step">Previous Step</button>
          </Link>
          <Link to="/">
            <button className="complete" onClick={()=>this.submitForm()}>
              Complete
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Step3;
