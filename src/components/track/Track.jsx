import React from 'react'
import { Link } from 'react-router-dom'

import './Track.scss'

export default ({ track }) => {
  const { track_name, artist_name, album_name, track_id } = track
  return (
    <div className="col-lg-4 col-md-6">
      <div className="track-card">
        <p className="label">Song Name</p>
        <h6 className="mb-4">{track_name}</h6>
        <p className="label">Artist Name</p>
        <p>{artist_name}</p>
        <p className="label">Album</p>
        <p>{album_name}</p>
        <Link to={`lyrics/track/${track_id}`} className="button">
          View Lyrics <i className="fas fa-arrow-right" />
        </Link>
      </div>
    </div>
  )
}
