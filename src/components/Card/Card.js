import React, { Component } from 'react';
import { fetchHouseMembers } from '../../services/apiCalls.js';
import './Card.css'
class Card extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	// getMembers = async (swornMembers) => {
	// 	const members = await fetchHouseMembers(swornMembers)
	// 	console.log(members)
	// }


	render() {
		const { house } = this.props;
		console.log(house)
		return (
			<div className='card'>
				<h2>{ house.name }</h2>
				<p>Founded: { house.founded } </p>
				<p>Seats: {house.seats[0]}</p>
				<p>Titles: {house.titles[0]}</p>
				<h3>Coat of Arms</h3>
				<p>{ house.coatOfArms}</p>
				<h3>Ancestral Weapons</h3>
				<div>{ house.ancestralWeapons } </div>
			</div>
			)
		
	}
}

export default Card
