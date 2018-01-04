import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'

describe('CardContainer tests', () => {
	it('should be defined', () => {
		const cardContainer = shallow(<CardContainer />)
		expect(cardContainer).toBeDefined()
	})
})