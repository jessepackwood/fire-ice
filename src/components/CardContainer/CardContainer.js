import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import './CardContainer.css'
import { Provider } from 'react-redux';

const CardContainer = ({ houses }) => {
  const cards = houses.map((house, index) => 
    <Card 
      key={`card-${index}`}
      house={house} />);

  return (
    <div className="card-container">
      {cards}
    </div>
  );
}

const mapStateToProps = ( state ) => {
	houses: state.houses
}


export default connect(mapStateToProps, null)(CardContainer)