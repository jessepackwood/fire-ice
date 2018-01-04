import React, { Component } from 'react';
import { fetchHouseMembers } from '../../services/apiCalls.js';
import './Card.css'
class Card extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	async componentDidMount() {
		// const swornMemberUrls = this.props.house.map( house => {
		// 	return house.swornMembers
		// })
	}


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

	// const mapStateToProps = state => {
	// 	swornMembers: state.houses.map( house => )
	// }
}

export default Card
