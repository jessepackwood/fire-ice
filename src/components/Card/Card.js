import React, { Component } from 'react';
import { fetchHouseMembers } from '../../services/apiCalls.js';
import './Card.css'
import { swornFetch } from '../../actions';


class Card extends Component {
	constructor() {
		super();
		this.state = {

		}
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
				<p className='sworn hide'>Sworn Members:</p>
			</div>
			)
		}
	}


	// const mapDispatchToProps = dispatch => ({
	// 	swornFetch: () => dispatch(swornFetch())
	// })

export default Card
