import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Track from './Track'
import Spinner from '../layout/Spinner'

const mapStateToProps = state => {
  return { trackList: state.trackList, heading: state.heading }
}

const TrackList = class extends Component {
  render() {
    var { trackList, heading } = this.props
    if (trackList === undefined || Object.keys(trackList).length === 0) {
      return <Spinner />
    } else {
      return (
        <Fragment>
          <h2 className="text-center font-weight-bold mb-4 text-secondary">
            {heading}
          </h2>
          <div className="row">
            {trackList.map(item => {
              return <Track key={item.track.track_id} track={item.track} />
            })}
          </div>
        </Fragment>
      )
    }
  }
}

export default connect(mapStateToProps)(TrackList)
