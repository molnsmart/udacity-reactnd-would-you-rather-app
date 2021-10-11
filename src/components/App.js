import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <p>Hello App</p>
        <button type="button" className="btn btn-primary">Hello Bootstrap</button>      </div>
    );
  }

}

export default connect()(App);
