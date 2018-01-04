import { combineReducers } from 'redux';
import { houseReducer } from './fake-reducer';

const rootReducer = combineReducers({
  houses: houseReducer
});


export default rootReducer;
