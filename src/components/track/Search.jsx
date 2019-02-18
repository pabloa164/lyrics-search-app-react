import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchTrack } from '../../store/actions'

import './Search.scss'

const Search = class extends Component {
  state = {
    trackTitle: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.searchTrack(this.state.trackTitle)
    this.setState({ trackTitle: '' })
  }

  render() {
    const { trackTitle } = this.state
    return (
      <div>
        <h2 className="text-secondary text-center mb-2">Search for Lyrics</h2>
        <form className="mb-4" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="trackTitle"
            placeholder="Search for a Song..."
            value={trackTitle}
            onChange={this.handleInput}
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { searchTrack }
)(Search)
