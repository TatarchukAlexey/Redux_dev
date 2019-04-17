import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Form from "./redux/Form/Form";
import {userList2} from "./redux/action/changeComponent";
import List from "./redux/List/List"
import {getLocal} from "./redux/action/changeComponent"


class App extends Component {

  componentDidMount(){
    this.props.getLocal() 
  }

  render() {
  let {form,userList2,list} = this.props;
   
    return (
      
      <div className="container">
      <button className="btn" onClick={userList2}>ADD USER
      </button>
       {form && <Form/>}
       {list &&<List/>}

      </div>
    );
  }
}


const MSTP = (state) => ({  
  form: state.hideForm.form,
  list: state.hideForm.list,

});


function MDTP (dispatch) {
  return{
    userList2: function(e){
          dispatch (userList2())
      },
    getLocal: function(){
          dispatch (getLocal())
      }
     }
     }
    

export default connect(MSTP,MDTP) (App);
