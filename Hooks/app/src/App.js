import React, { Component } from 'react';
import './App.css';
// import ButtonHooks from "./Button/ButtonHooks"
// import DataLoanding from "./DataLoanding/DataLoanding"
import CRUDapp from './CRUDapp/CRUDapp';

class App extends Component {

  render() {
    return (
      <div className="App">
      <CRUDapp/>


      {/* <ButtonHooks/>
      <DataLoanding/> */}
      </div>
    );
  }
}

export default App;
