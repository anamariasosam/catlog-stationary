import {
  AUTH_USER,
  AUTH_ERROR,
  DEAUTH_USER,
} from '../constants/actions'

const authReducer = (
  state = false,
  action,
) => {
  switch (action.type) {
    case AUTH_USER:
      return action.payload
    case DEAUTH_USER:
      return action.payload
    case AUTH_ERROR:
      return action.payload
    default:
      return state
  }
}

export default authReducer
