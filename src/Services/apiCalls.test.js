import * as apiCalls from './apiCalls.js';

describe('apiCalls tests', () => {
	const members = ['array', 'of', 'members']

	  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
          ['array', 'of', 'houses']
      )
    }));
  });

	it('should fetch houses', async () => {
		const houses = await apiCalls.fetchHouses()
		expect(houses).toEqual(['array', 'of', 'houses'])
	})

})