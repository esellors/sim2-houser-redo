import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends Component{
    
    
    render(){
        return(
            <div className="db-component">
            <div className="db-title">
            <div>Dashboard</div>
            <Link to='/step1'><button>Add New Property</button></Link>
            </div>
            <div className="db-listings">
                <div>Home Listings</div>
                <div></div>
            </div>
            </div>
        )
    }
}

export default Dashboard