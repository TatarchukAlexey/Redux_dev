import React, {useState} from 'react';

const ButtonHooks = () => {
   const {buttonText,setButtonText} = useState("Hello");
   function handleClick(){
       return setButtonText("Thank you");
   }
    return (
        <button onClick={handleClick}>
           {buttonText}
        </button>
    );
};

export default ButtonHooks;
