const CATLOG_STORAGE_KEY = 'Catlog-State'

const initialState = {
  authenticate: false,
}

/**
 * loadState
 * @return {object} The new state from LS or undefined if is empty.
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(CATLOG_STORAGE_KEY)
    if (serializedState === null) return {}

    return JSON.parse(serializedState)
    // Do not handle localStorage errors, just return {}.
  } catch (err) {
    // ignore errors outside development
    if (process.env.NODE_ENV === 'development') {
      throw new Error(err)
    }
    return {}
  }
}

/**
 * saveState
 * @param  {object} state The params to save on localstorage.
 * @return {object} The same state from the params in case you want chaining.
 */
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(CATLOG_STORAGE_KEY, serializedState)
  } catch (err) {
    // ignore errors outside development
    if (process.env.NODE_ENV === 'development') {
      throw new Error(err)
    }
  }
  return state
}

export const resetState = () => {
  try {
    localStorage.removeItem(CATLOG_STORAGE_KEY)
  } catch (err) {
    // ignore errors outside development
    if (process.env.NODE_ENV === 'development') {
      throw new Error(err)
    }
  }
}

const defaultState = loadState() || initialState

export default defaultState
