import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import AuthenticatedMenu from './auth/AuthenticatedMenu'

// import './styles/TopNav.scss'

const TopNav = ({ authenticated = false }) => (
  <div className="hamburger__placeholder">
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">

        <div className="navbar-header hamburger">
          <div className="visible-xs-inline mobileHeader">
            <h3 className="mobileHeader__headline">Catlog.co</h3>
          </div>

          <button type="button" className="hamburger__button navbar-toggle collapsed" >
            <span className="sr-only">Toggle navigation</span>

            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <i className="glyphicon glyphicon-remove" />
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-left js_topMenu">
            <li>
              <Link className="menu__logo" to="/">
                <img className="img-responsive" src="https://catlog.co/logo.png" alt="Logo" />
              </Link>
            </li>
            <li>
              <Link to="/categorias">Categorias</Link>
            </li>
            <li>
              <Link to="/tiendas">Tiendas</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            { !authenticated ?
              <li>
                <Link to="/login" className="login_btn">
                  <i className="fa fa-instagram" /> Iniciar Sesión
                </Link>
              </li>
            : <AuthenticatedMenu />
            }
          </ul>
        </div>
      </div>
    </nav>
  </div>
)

TopNav.propTypes = {
  authenticated: PropTypes.bool,
}

const mapStateToProps = ({ authenticated }) => ({ authenticated })

// export default connect(mapStateToProps)(TopNav)
export default TopNav
