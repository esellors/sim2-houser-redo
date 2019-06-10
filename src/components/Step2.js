import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Step2 extends Component{
    
    
    render(){
        return(
            <div className="S1-component">
            <div className="S1-title">
                <div>Add New Listing</div>
                <button className='cancel' onClick={()=> this.props.history.push(`/`)}>Cancel</button>
            </div>
            <div className="S2-inputs">
            Image URL
              <input></input>
            
            </div>
            <div className="S2-next-button">
            <Link to="/step1"><button className='step' >Previous Step</button></Link>
            <Link to="/step3"><button className='step' >Next Step</button></Link>
            </div>
        </div>
        )
    }
}

export default Step2