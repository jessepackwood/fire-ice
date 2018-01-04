import {
	fetchHouses
} from '../services/apiCalls.js'

export const houseFetch = () => async (dispatch) => {
	const houses = await fetchHouses();
	dispatch(setHouses(houses))
}

export const setHouses = (houses) => ({
	type: 'SET_HOUSES',
	houses
})