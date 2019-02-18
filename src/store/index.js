import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {
  trackList: [],
  heading: 'Top 10 Tracks in Colombia'
}

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, initialState, storeEnhancers(applyMiddleware(thunk)))

export default store