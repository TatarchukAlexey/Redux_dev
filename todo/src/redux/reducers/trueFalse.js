function hideForm (state= 
    {
        form: false,
        list: false,
    },
    
        action){
switch (action.type){
    case "START": return {...state,form: true};
    
    case "CARDS": return {...state,form: false, list: true};

    case "EDIT":return {...state, form: true,list: false,};


    
    default: return state;

}
}
export default hideForm;