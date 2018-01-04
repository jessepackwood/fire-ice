import {fetchHouses, getSwornMembers } from '../services/apiCalls.js'

export const houseFetch = () => async (dispatch) => {
	const houses = await fetchHouses();
	console.log(houses)
	dispatch(setHouses(houses))
}

export const swornFetch = () => async (dispatch) => {
	const sworn = await getSwornMembers();
	console.log(sworn)
	dispatch(setMembers(sworn))
}

export const setHouses = (houses) => ({
	type: 'SET_HOUSES',
	houses
})

export const setMembers = (swornMembers) => ({
  type: 'SET_MEMBERS',
  swornMembers
});