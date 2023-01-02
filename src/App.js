
import React, { Component } from 'react';
import "./components/card/addy.styles.css"
import './App.css';

class 
App extends Component {
  constructor(){
    super();
    this.state = {checkAddy:"" };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
handleChange(event){
  this.setState({checkAddy: event.target.value});
}
handleSubmit(event){
  alert(`is this addy wled? ${this.state.checkAddy}`);
  event.preventDefault();
}

render(){
  const {addy, checkAddy} = this.state;
  console.log(addy);
  const wallets = ["habeeb"];
  //console.log(checkAddy);  

  return (
      <div className="App searchbox">
       <div className='search'>
       <h1 className='heading'>are you jointlisted?</h1>
       <form className='faform' onSubmit={this.handleSubmit} >
        <input  type="text" className="searcharea" 
         placeholder='wallet address' value={checkAddy} onChange={this.handleChange}
         />
         <input className="button"  type="submit" 
         value="submit" placeholder='wallet address' 
        />
         </form>
       <h2 className='heading'>you are jointlisted!</h2>
        {wallets.map(wallet=> (
          <div>{wallet===this.state.checkAddy} </div>
        )
          )}

         </div>
        
      </div>
    );
  
  
  }
 

}
export default App;
