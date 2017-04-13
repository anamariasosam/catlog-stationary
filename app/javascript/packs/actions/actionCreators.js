import { browserHistory } from 'react-router'

import {
  AUTH_USER,
  AUTH_ERROR,
  DEAUTH_USER,
} from '../constants/actions'

export const authenticate = () => {
  if (/^#access_token=/.test(location.hash)) {
    const [, token] = location.hash.split('=')
    const isAuthenticated = !!token

    localStorage.setItem('token', token)
    browserHistory.push('/')

    return {
      type: AUTH_USER,
      payload: isAuthenticated,
    }
  }

  browserHistory.push('/login')

  return {
    type: AUTH_ERROR,
    payload: false,
  }
}

export const deauthenticate = () => {
  localStorage.removeItem('token')
  browserHistory.push('/login')

  return {
    type: DEAUTH_USER,
    payload: false,
  }
}
