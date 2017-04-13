import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actionCreators'

class Login extends Component {

  componentWillMount() {
    this.props.authenticate()
  }

  render() {
    return (
      <div className="container">
        <h3>Bienvenid@</h3>
      </div>
    )
  }
}

Login.propTypes = {
  authenticate: PropTypes.func,
}

export default connect(null, {
  authenticate: actions.authenticate,
})(Login)
