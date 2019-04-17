function userdata(state = [], action) {

  switch (action.type) {

    case "CREATE":
    // console.log(action.data);

     if (action.isActive){
      localStorage.setItem('test', JSON.stringify(
        state.map(el => 
          el.id == action.data.id ? action.data: el)
      ))
     } else {
      return [...state,{...action.data, id: Date.now()}];
     }
      
       if (action.isActive){
    return state.map(el => 
      el.id == action.data.id ? action.data: el)
   } else {
    return [...state,{...action.data, id: Date.now()}];
   }
    
    case "DEL":
    
    console.log(action.id);

    let result = state.filter(el => el.id != action.id )

     console.log(result);
     
    
    return result;
  
    
    
    
    case "GET":
    let getObj = JSON.parse(localStorage.getItem('test'));
    return getObj ? getObj : [...state];
  
    default: return state;





  }
}
export default userdata;
