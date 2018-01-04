export const houseReducer = (state=[], action) => {
  switch (action.type) {
  	case 'SET_HOUSES':
  		return [...state, ...action.houses]
  default:
    return state;
  }
};
