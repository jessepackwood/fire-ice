import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'

describe('CardContainer tests', () => {

	const mockHouses = ['houses']
	const store={}

	it('should be defined', () => {
		const cardContainer = shallow(<CardContainer store={store}/>)
		expect(cardContainer).toBeDefined()
	})


})