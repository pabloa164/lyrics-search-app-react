import {
  LOAD_TRACKS,
  SEARCH_TRACK
} from './actions-types'
import {
  topTracks,
  oneTrack
} from '../../backendEP'

const loadTracks = () => async dispatch => {
  const response = await fetch(topTracks)
  const json = await response.json()
  dispatch({
    type: LOAD_TRACKS,
    payload: json.message.body.track_list
  })
}

const searchTrack = (payload) => async dispatch => {
  const response = await fetch(oneTrack.replace('$track_title', payload))
  const json = await response.json()
  dispatch({
    type: SEARCH_TRACK,
    payload: json.message.body.track_list
  })
}

export {
  loadTracks,
  searchTrack
}