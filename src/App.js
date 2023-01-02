
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import ./Component/addy.com
import './App.css';

class 
App extends Component {
  constructor(){
    super();
    this.state = {addy:[],
    checkAddy:"" };
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
  const filteredMonsters = addy.filter(monster => monster.name.toLowerCase().includes(addy.toLocaleLowerCase()));
 

  return (
      <div className="App searchbox">
       <div className='search'>
       <h1 className='heading'>are you dumplisted?</h1>
       <form className='faform' onSubmit={this.handleSubmit} >
        <input  type="text" className="searcharea" 
         placeholder='wallet address' value={checkAddy} onChange={this.handleChange}
         />
         <input className="button"  type="submit" 
         value="submit" placeholder='wallet address' 
        />
         </form>
       <h2 className='heading'>you are dumplisted!</h2>
       
         </div>
             <CardList monsters={filteredMonsters}/>
      </div>
    );
  
  
  }
 

}
export default App;
