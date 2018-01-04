import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'

describe('CardContainer tests', () => {

	const mockHouses = ['houses']

	it('should be defined', () => {
		const cardContainer = shallow(<CardContainer houses={mockHouses}/>)
		expect(cardContainer).toBeDefined()
	})
	
})