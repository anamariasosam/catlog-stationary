import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import cx from 'classnames'

import * as actions from '../../actions/actionCreators'

class AuthenticatedMenu extends Component {
  constructor() {
    super()

    this.state = {
      ddopen: false,
    }
  }

  render() {
    const ddClass = cx('dropdown', {
      open: this.state.ddopen,
    })

    return (
      <li className={ddClass}>
        <a
          href="#dropdown"
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={e => {
            e.preventDefault()
            this.setState({
              ddopen: !this.state.ddopen,
            })
          }}
        >Menu <i className="glyphicon glyphicon-menu-hamburger" /></a>
        <ul className="dropdown-menu">
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/notifications">Notificaciones</Link></li>
          <li role="separator" className="divider" />
          <li>
            <a
              href="#auth"
              onClick={e => {
                e.preventDefault()
                this.props.deauthenticate()
              }}
            >Salir</a>
          </li>
        </ul>
      </li>
    )
  }
}

AuthenticatedMenu.propTypes = {
  deauthenticate: PropTypes.func,
}

export default connect(null, {
  deauthenticate: actions.deauthenticate,
})(AuthenticatedMenu)
