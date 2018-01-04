import React from 'react';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card tests', () => {
	it('should be defined', () => {
		const card = shallow(<Card />)
		expect(card).toBeDefined()
	})
})