import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadTracks } from './store/actions'

import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Lyrics from './components/track/Lyrics'

import './App.scss'

class App extends Component {
  componentDidMount() {
    this.props.loadTracks()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect(
  null,
  { loadTracks }
)(App)
