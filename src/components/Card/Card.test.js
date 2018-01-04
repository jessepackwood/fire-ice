import React from 'react';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card tests', () => {
	let card;

  const mockHouse = {
    name: 'name',
    founded: 'sure',
    seats: 'yup',
    titles: 'titles',
    coatOfArms: 'coat',
    ancestralWeapons: 'wands',
    words: 'lit',
    swornMembers: ['urls']
  };

	it('should be defined', () => {
		const card = shallow(<Card house={mockHouse}/>)
		expect(card).toBeDefined()
	})

	it('should match snapshot', () => {
    expect(card).toMatchSnapshot();
  });
})