import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Property from "./Property"

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            properties: []
        }
    }

    componentDidMount(){
        axios.get('/api/properties').then(response=> 
          this.setState({properties: response.data})  )
         
    }
    
    render(){
        console.log(this.state.properties)
        return(
            <div className="db-component">
            <div className="db-title">
            <div>Dashboard</div>
            <Link to='/step1'><button className='add-new'>Add New Property</button></Link>
            </div>
            <div className="db-listings">
                <div className='db-home-listings'>Home Listings</div>
                <div>{this.state.properties && this.state.properties.map((property, index)=> {
                    return (
                        <Property key={property.property_id} property= {property} index={index}/>
                    )
                })}</div>
            </div>
            </div>
        )
    }
}

export default Dashboard