import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { houseFetch } from '../../actions';
class App extends Component {

  componentDidMount() {
    this.props.houseFetch()
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.houseFetch();
            alert(this.props.houses);
          }}>Fetch Houses</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = (state) => ({
  houses: state.houses
});

const mapDispatchToProps = dispatch => ({ houseFetch:
  () => dispatch(houseFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
