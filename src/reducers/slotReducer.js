import {   COUNTER, ERROR} from '../actions/types';




const initialState  = {
    slots : true,
    counter: [null],
    error : null
}


export default (state= initialState, action) => {
    switch(action.type){
        case COUNTER:
            return{
                ...state,
                counter: [...state.counter,
                initialState.counter++]
            }
    
       case ERROR:
           return{
               ...state,
               error: action.COUNTER
           }     
        default:
            return state;
    }
}

