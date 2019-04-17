function isactive(state = false, action) {

    switch (action.type) {
  
      case "ISACTIVE": return true;
      case "DISACTIVE": return false;
  
      default: return state;
    }
  }
  export default isactive;