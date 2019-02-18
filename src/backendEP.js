const topTracks = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=co&f_has_lyrics=1&apikey=${
  process.env.REACT_APP_MM_KEY
}`

const oneTrack = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=$track_title&page_size=10&page=1&s_track_rating=desc&apikey=${
  process.env.REACT_APP_MM_KEY
}`

const specificTrack = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=$id&apikey=${
  process.env.REACT_APP_MM_KEY
}`

const trackDetail = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=$id&apikey=${
  process.env.REACT_APP_MM_KEY
}`

export { topTracks, oneTrack, specificTrack, trackDetail }
