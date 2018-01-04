import * as actions from './index.js'

describe('All actions', () => {
	describe('house actions', () => {

		it('setHouse returns an object with type of SET_HOUSES')
			const houses = {
				name: 'house',
				saying: 'saying'
			}
			const expected = {
				type: 'SET_HOUSES',
			}
			expect(actions.setHouses(houses.type)).toEqual(expected)
	})
})