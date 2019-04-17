function value (state={
    name: '',
    namelast: "",
    phone: "",
    email: "",
    bithday: "",
    }, action) { 

    switch (action.type){
        case "EDIT":

    let result =  action.array.find(el => el.id == action.evt )               
        return {...state,
        name: result.name,
        namelast: result.namelast,
        phone: result.phone,
        bithday: result.bithday,
        id: result.id,
        }; 
   
 case "NAME":
 return {
     ...state,
     name: action.text,
 };

 case "NAMELAST":
 return {
     ...state,
     namelast: action.text,
 };
 case "PHONE":
 return {
     ...state,
     phone: action.text,
 };
 case "EMAIL":
 return {
     ...state,
     email: action.text,
 };
 case "BITHDAY":
 return {
     ...state,
     bithday: action.text,
 };

 default:
   return state;
}

}
export default value;
