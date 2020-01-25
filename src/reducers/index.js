import { combineReducers } from 'redux';
import slotReducer from './slotReducer';

export default combineReducers({
    slot: slotReducer
});