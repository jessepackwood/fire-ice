import houseReducer from './houseReducer'
import * as actions from '../actions'

describe('houseReducer tests', () => {
	let state;
	beforeEach( () => {
	state = [];
	})
	it('should return null by default', () => {
		const expected = [];
		expect(houseReducer(undefined, actions)).toEqual(expected)
	})

	it('should return a new state with houses', () => {
		const houses = ['This', 'is', 'a', 'house']
		const expected = [...houses]
		expect(houseReducer(undefined, actions.setHouses(houses))).toEqual(expected)
	})
})