import React,{useState}  from 'react';

const AddUserForm = ({addUser}) => {
    const initialFormState ={
        name: "",
        username:""
    };
    const [user,setUser] = useState(initialFormState);

    const inputChange = e =>{
        const{name,value}=e.target;
        setUser ({...user,[name]:value});
    }
    
    const formSubmit =e=>{
        e.preventDefault();
        if(!user.name || !user.username) return
         addUser(user);
         setUser(initialFormState);
    }

    return (
    <form onSubmit={formSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={user.name}
      onChange={inputChange}/>
      <label>Username</label>
      <input type="text" name="username" value={user.username}
      onChange={inputChange}/>
      <button>Add new user</button>
    </form>
    );
};

export default AddUserForm;