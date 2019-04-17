import {combineReducers} from 'redux';
import value from './valueReducer';
import userdata from '../reducers/saveReducer';
import hideForm from '../reducers/trueFalse';
import isactive from './isActive';



const rootReducer = combineReducers ( {
    value,
    userdata: userdata,
    hideForm: hideForm,
    isactive: isactive,
})

export default rootReducer;