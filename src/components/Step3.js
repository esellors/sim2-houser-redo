import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios"

class Step3 extends Component {
  constructor(){
      super()
      this.state={

      }
      this.submitForm=this.submitForm.bind(this)
  }

  submitForm(){
    axios.post('/api/property', {string: 'post working'})
 
     
    
   
  }
  
  
    render() {
        console.log(this.props.location)
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
          <input />
          Desired Monthly Rent
          <input />
        </div>
        <div className="S2-next-button">
          <Link to="/step1">
            <button className="step">Previous Step</button>
          </Link>
          <Link to="/">
            <button className="complete" onClick={this.submitForm()}>Complete</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Step3;
