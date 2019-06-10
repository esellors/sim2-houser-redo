import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import store, {ADD_PROPERTY_NAME, ADD_ADDRESS, ADD_CITY, ADD_STATE, ADD_ZIP} from '../redux/store';

class Step1 extends Component{
    constructor(){
        super()
        this.state={
            propertyName: store.getState().propertyName,
            address: store.getState().address,
            city: store.getState().city,
            state: store.getState().state,
            zip: store.getState().zip
        }
    }

    componentDidMount(){
        store.subscribe(()=>{this.setState({propertyName: store.getState().propertyName})})
        store.subscribe(()=>{this.setState({address: store.getState().address})})
        store.subscribe(()=>{this.setState({city: store.getState().city})})
        store.subscribe(()=>{this.setState({state: store.getState().state})})
        store.subscribe(()=>{this.setState({zip: store.getState().zip})})
        
    }
    

    handleName(e){
        let action = {
            type: ADD_PROPERTY_NAME,
            payload: e.target.value
        }
        store.dispatch(action)
    }
    handleAddress(e){
        let action = {
            type: ADD_ADDRESS,
            payload: e.target.value
        }
        store.dispatch(action)
    }
    handleCity(e){
        let action = {
            type: ADD_CITY,
            payload: e.target.value
        }
        store.dispatch(action)
    }
    handleState(e){
        let action = {
            type: ADD_STATE,
            payload: e.target.value
        }
        store.dispatch(action)
    }
    handleZip(e){ let action = {
        type: ADD_ZIP,
        payload: e.target.value
    }
    store.dispatch(action)}
    
    
    render(){
        return(
            <div className="S1-component">
                <div className="S1-title">
                    <div>Add New Listing</div>
          
                    <button onClick={()=> this.props.history.push(`/`)} className='cancel'>Cancel</button>
                 
                </div>
                <div className="S1-inputs">
                Property Name
                  <input onChange={this.handleName} value={this.state.propertyName}></input>
                Address
                  <input onChange={this.handleAddress} value={this.state.address}></input>
                  <div>
                  City
                  <input onChange={this.handleCity} value={this.state.city}></input>
                  State
                  <input onChange={this.handleState} value={this.state.state}></input>
                  Zip
                  <input onChange={this.handleZip} value={this.state.zip}></input>
                  </div>
                </div>
                <div className="S1-next-button">
                <Link to="/step2"><button className='step' >Next Step</button></Link>
                </div>
            </div>
        )
    }
}

export default Step1