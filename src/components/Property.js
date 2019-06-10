import React from 'react'
import "../App.css"

function Property(props){
return(
    <div className="property-component">
        <div><img className = 'property-img' src={props.property.img}/></div>
        <div className= "row-1">
        <div>Property Name: {props.property.name}</div>
        <div>Address: {props.property.address}</div>
        <div>City: {props.property.city}</div>
        <div>State: {props.property.state}</div>
        <div>Zip: {props.property.zip}</div>
        </div>
        <div className="row-2">
        <div>Monthly Mortgage: {props.property.mortgage}</div>
        <div>Desired Rent: {props.property.rent}</div>

        </div>
    </div>
)
}

export default Property