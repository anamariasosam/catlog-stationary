import React from 'react'
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'

import TopNav from './components/TopNav'
import Footer from './components/Footer'

import Blog from './pages/Blog'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './containers/Login'
import LoginHome from './components/LoginHome'
import Order from './pages/Order'
import Product from './pages/Product'
import Profile from './pages/Profile'
import Post from './pages/Post'
import requireAuth from './components/auth/require_auth'
import { saveState } from './store/defaultState'
import store from './store/configureStore'
import Stores from './pages/Stores'

// TODO replace string routes with variables on all files
import {
  PROFILE_PATH,
  CATEGORIES_PATH,
  CONTACT_PATH,
  LOGIN_PATH,
  PRODUCT_PATH,
  BLOG_PATH,
  STORES_PATH,
} from './constants/routes'

// save the last state on localStorage
store.subscribe(() => saveState(store.getState()))

// TODO rebuild the router to match router 4
const App = props => (
  <Provider store={store}>
      <Router>
        <div>
        <TopNav />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path={BLOG_PATH} component={Blog} />
              <Route path="/blog/post/:postID" component={Post} />
              <Route path={`${CATEGORIES_PATH}/:name(/:pageNumber)`} component={Categories} />
              <Route path={`${CATEGORIES_PATH}(/:pageNumber)`} component={Categories} />
              <Route path={CONTACT_PATH} component={Contact} />
              <Route path={LOGIN_PATH} component={LoginHome} />
              <Route path={`${PRODUCT_PATH}/:productID`} component={Product} />
              <Route path={`${PRODUCT_PATH}/:productID/orden`} component={requireAuth(Order)} />
              <Route path={STORES_PATH} component={Stores} />
              <Route path="/users/auth/instagram/callback" component={Login} />
            </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  </Provider>
)

export default App
