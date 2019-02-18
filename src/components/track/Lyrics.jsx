import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { specificTrack, trackDetail } from '../../backendEP'
import Spinner from '../layout/Spinner'

import './Lyrics.scss'

const Lyrics = class extends Component {
  state = {
    lyrics: '',
    track: {}
  }

  async componentDidMount() {
    const lyricsResponse = await fetch(
      specificTrack.replace('$id', this.props.match.params.id)
    )
    const lyricsJson = await lyricsResponse.json()
    this.setState({ lyrics: lyricsJson.message.body.lyrics.lyrics_body })

    const trackResponse = await fetch(
      trackDetail.replace('$id', this.props.match.params.id)
    )
    const trackJson = await trackResponse.json()

    this.setState({ track: trackJson.message.body.track })
  }

  render() {
    const { lyrics } = this.state
    const { track_name, artist_name } = this.state.track

    if (
      lyrics === undefined ||
      lyrics.length === 0 ||
      track_name === undefined
    ) {
      return (
        <div className="container">
          <Link to="/" className="button-go-back">
            Go Back
          </Link>

          <div className="mt-4">
            <Spinner />
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <Link to="/" className="button-go-back">
            Go Back
          </Link>

          <div className="mt-4">
            <h1 className="mb-2">
              Lyrics for "{track_name}" by {artist_name}
            </h1>
            <p>{lyrics}</p>
          </div>
        </div>
      )
    }
  }
}

export default Lyrics
