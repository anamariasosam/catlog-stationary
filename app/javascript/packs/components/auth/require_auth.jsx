import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      // TODO: find a way to save the previous route to return after login
      if (!this.props.authenticated) {
        this.context.router.push('/login')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/login')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }

  }

  Authentication.contextTypes = {
    router: PropTypes.object,
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool,
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}
