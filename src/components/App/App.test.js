import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('App tests', () => {
	const store = mockStore([])

	it('should be defined', () => {
		const app = shallow(<App store={store}/>)
		expect(app).toBeDefined()
	})
})