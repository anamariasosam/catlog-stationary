import React from 'react'

import LoginHome from '../components/LoginHome'
import RecentProducts from '../containers/RecentProducts'
import RecentStores from '../containers/RecentStores'
import Hero from '../components/Hero'

const Home = () => (
  <div>
    <Hero />
    <RecentProducts />
    <LoginHome />
    <RecentStores />
  </div>
)

export default Home
