import { combineReducers } from 'redux';
import { houseReducer } from './houseReducer';
import { swornMembersReducer } from './swornMembersReducer';

const rootReducer = combineReducers({
  houses: houseReducer,
  swornMembers: swornMembersReducer
});


export default rootReducer;
