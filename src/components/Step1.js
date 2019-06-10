import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Step1 extends Component{
    
    
    render(){
        return(
            <div className="S1-component">
                <div className="S1-title">
                    <div>Add New Listing</div>
                    <button>Cancel</button>
                </div>
                <div className="S1-inputs">
                Property Name
                  <input></input>
                Address
                  <input></input>
                  <div>
                  City
                  <input></input>
                  State
                  <input></input>
                  Zip
                  <input></input>
                  </div>
                </div>
                <div className="S1-next-button">
                <Link to="/step2"><button >Next Step</button></Link>
                </div>
            </div>
        )
    }
}

export default Step1