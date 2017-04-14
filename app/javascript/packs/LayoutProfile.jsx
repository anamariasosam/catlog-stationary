import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import TopNav from './components/TopNav'
import Footer from './components/Footer'

const links = [
  {
    url: '/perfil',
    name: 'Perfil',
    icon: 'home',
  },
  {
    url: '/perfil/ordenes',
    name: 'Mis Compras',
    icon: 'shopping-bag',
  },
  {
    url: '/information',
    name: 'Información',
    icon: 'pencil-square',
  },
  {
    url: '/contacto',
    name: 'Sugerencias',
    icon: 'envelope',
  },
]

const LayoutProfile = props => (
  <div>
    <TopNav />
    <div className="content">
      <div className="profile clearfix">

        <div className="profile__sidebar">
          <ul className="profile__list">

            {links.map(item => (
              <li className="profile__menuItem" key={item.name}>
                <Link activeClassName="active" className="profile__link " to={item.url}>
                  <i className={`fa fa-${item.icon}`} />
                  <span className="hidden-xs">{item.name}</span>
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {props.children}

      </div>
    </div>
    <Footer />
  </div>
)

LayoutProfile.propTypes = {
  children: PropTypes.node,
}

export default LayoutProfile
