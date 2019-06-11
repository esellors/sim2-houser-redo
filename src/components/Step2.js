import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {ADD_IMG} from "../redux/store"

class Step2 extends Component{
   constructor(){
       super()
       this.state={
        img: store.getState().img
       }
   }

   componentDidMount(){
       store.subscribe(()=>{
           this.setState({img: store.getState().img})
       })
   }
    

   handleImg(e){
    let action = {
        type: ADD_IMG,
        payload: e.target.value
    }
    store.dispatch(action)
   } 
    
    render(){
        return(
            <div className="S1-component">
            <div className="S1-title">
                <div>Add New Listing</div>
                <button className='cancel' onClick={()=> this.props.history.push(`/`)}>Cancel</button>
            </div>
            <div className="S2-inputs">
            Image URL
              <input onChange={this.handleImg} value={this.state.img}></input>
            
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