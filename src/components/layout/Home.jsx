import React from 'react'

import TrackList from '../track/TrackList'
import Search from '../track/Search'

export default () => {
  return (
    <div className="container">
      <Search />
      <TrackList />
    </div>
  )
}
