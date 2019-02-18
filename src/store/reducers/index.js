import {
  LOAD_TRACKS,
  SEARCH_TRACK
} from '../actions/actions-types'

const rootReducer = (state, action) => {
  const {
    type,
    payload
  } = action
  switch (type) {
    case LOAD_TRACKS:
      return {
        ...state,
        trackList: payload
      }
    case SEARCH_TRACK:
      return {
        ...state,
        trackList: payload,
        heading: 'Search Results'
      }
    default:
      return state
  }
}

export default rootReducer