export const swornMembersReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_MEMBERS':
    return {...state, ...action.houseMembers};
  default:
    return state;
  }
};