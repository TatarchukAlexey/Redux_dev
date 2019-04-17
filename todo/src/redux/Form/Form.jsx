import React from 'react';
import {connect} from 'react-redux';
import {change} from "../action/enterAction";
import {userList,disactive} from "../action/changeComponent";
import {name,namelast,phone,email,bithday} from "../action/enterAction";
import "./Form.css";
import {isactive} from '../action/enterAction';

const Form = ({name,isactive,namelast,disactive,
    phone,email,bithday,userList,active,value}) => {
     
    return (
        <form action="" className="form"
        onSubmit={(evt)=>{evt.preventDefault();
            userList();
            isactive(active,value);
            disactive();
            }} >         
       

        <div className="formDiv"> 
        <input type="text" className="input"  name='NAME'
         value={value.name} onChange={name} placeholder="Введите Имя"/>
        <input type="text"  name='' className="input"  
        value={value.namelast} onChange={namelast} placeholder="Введите Фамилию" />
        <input type="text"  name='' className="input"  
        value={value.phone} onChange={phone} placeholder="Номер телефона"/>
        <input type="text"  name='' className="input"  
        value={value.email} onChange={email} placeholder=" Email"/>
        <input type="text"  name='' className="input"  
        value={value.bithday} onChange={bithday} placeholder="Дата рождения"/>
        </div>
        <div className="photo">Foto</div>
                
         <button type="submit"  >Save</button>      
       </form>
    );
};
    const MSTP = (state) => ({        
        active: state.isactive, 
        value: state.value, 

});


    function MDTP (dispatch) {
    return{
        isactive: function( active,userData){  //функция кот зап объект с введенными в массив
            dispatch (isactive(active,userData))
        },
        change: function(e){
            dispatch (change(e)) // слушатель
        },
        name: function(e){
            dispatch (name(e)) // слушатель на импуте с неймом
        },
        namelast: function(e){
            dispatch (namelast(e)) // слушатель на импуте с неймом
        },
        phone: function(e){
            dispatch (phone(e)) // слушатель на импуте с неймом
        },
        email: function(e){
            dispatch (email(e)) // слушатель на импуте с неймом
        },
        bithday: function(e){
            dispatch (bithday(e)) // слушатель на импуте с неймом
        },
        userList: function(){ 
            dispatch (userList())
        },
        disactive: function(){ 
            dispatch (disactive())
        },
      
    }
}

export default connect (MSTP, MDTP)(Form);
