import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import wolf from '../../assets/wolf.gif'
import './App.css';
import { connect } from 'react-redux';
import { houseFetch, swornFetch } from '../../actions';
import CardContainer from '../CardContainer/CardContainer'
class App extends Component {

  async componentDidMount() {
    await this.props.houseFetch()
    // await this.props.swornFetch(this.props.swornMembers)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        {!!this.props.houses.length && 
          <CardContainer houses={this.props.houses}/>
        }
        {!this.props.houses.length && 
          <img src={wolf} />
        }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houses: PropTypes.array,
  houseFetch:PropTypes.func
};

const mapStateToProps = (state) => ({
  houses: state.houses,
  swornMembers: state.swornMembers
});

const mapDispatchToProps = dispatch => ({ 
  houseFetch: () => dispatch(houseFetch()),
  swornFetch: () => dispatch(swornFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
