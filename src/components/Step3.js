import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Step3 extends Component{
    
    
    render(){
        return(
            <div className="S1-component">
            <div className="S1-title">
                <div>Add New Listing</div>
                <button>Cancel</button>
            </div>
            <div className="S2-inputs">
            Monthly Mortgage Amount
              <input></input>
            Desired Monthly Rent
              <input></input>
            
            </div>
            <div className="S2-next-button">
            <Link to="/step1"><button >Previous Step</button></Link>
            <Link to="/step3"><button >Complete</button></Link>
            </div>
        </div>
        )
    }
}

export default Step3