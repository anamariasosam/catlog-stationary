import React, { PropTypes } from 'react'

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
