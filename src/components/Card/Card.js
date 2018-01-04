import React, { Component } from 'react';


class Card extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		const { house } = this.props;
		return (
			<div className='card'>
				<h2>{ house.name }</h2>
				<span>{ house.founded } </span>
				<h3>Coat of Arms</h3>
				<span>{ house.coatOfArms}</span>
				<h3>Ancestral Weapons</h3>
				<div>{ house.ancestralWeapons } </div>
			</div>
			)
		
	}
}

export default Card
