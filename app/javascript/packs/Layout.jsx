import React from 'react'
import PropTypes from 'prop-types'

import TopNav from './components/TopNav'
import Footer from './components/Footer'
import './style/main.scss'

const Layout = props => (
  <div>
    <TopNav />
    <div className="content">
      {props.children}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
