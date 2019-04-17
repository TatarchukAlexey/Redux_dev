import React from 'react';
import {connect} from 'react-redux';
import './List.css'
import {edit} from '../action/enterAction';
import {logic} from '../action/changeComponent';
import {del} from '../action/deleteAction';


const List = ({arr,edit,logic,value,del}) => {
     
    return (
        
        <ul>
            {arr.map(el=>(<li>
                <span>{el.name}</span>
                <span>{el.namelast}</span>
                <span>{el.phone}</span>
                <button className="btt"
                 onClick={ (e) => {edit(e,arr,value); logic()}}
                     data-id={el.id}
                >Edit</button>
                <button className="btt"
                 onClick ={(e) => {del(e,value);}}
                 data-id={el.id}
                >Del</button>
            </li>))}
        </ul>
    );
};
 const MSTP =  (state) =>({
    arr: state.userdata,
    value: state.value,
 })
 const MDTP =  (dispatch) =>({
    edit:  function(e, arr,value){
        dispatch(edit(e, arr,value))
    }, 
    logic:  function(){
        dispatch(logic())
    },
    del: function(e,value){ 
        dispatch (del(e,value))
    },
 })

export default connect(MSTP,MDTP) (List);
