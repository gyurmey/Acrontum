import {  COUNTER, ERROR} from './types';



export const counterAdd = () => async dispatch => {
try {
       dispatch({
           type: COUNTER,
       })
} catch (err) {
    dispatch({
        type: ERROR,
    })
}
}