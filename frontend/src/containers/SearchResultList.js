import React, { Component } from 'react'
import queryString from 'query-string'
import YTSearch from 'youtube-api-search'
import ReactPlayer from 'react-player'
import SearchResult from '../components/SearchResult'

const API_KEY = 'AIzaSyCapK2P3i5AERyaaRJ1JndnojwJ-QyMTeY'

class SearchResultList extends Component {
	state = {
		loading: true,
		term: '',
		videos: []
	}
	componentDidMount() {
		const searchTerm = this.props.location.search
		YTSearch({ key: 'AIzaSyCue6uy1WzHxnmwFpQj7YAWEB9MGxe5Tv4', term: searchTerm }, (vids) => {
			console.log("-----VIDEOs----", vids)
    	const videos = vids.map((vid) => (
				{
					id: vid.id.videoId,
					thumbnail: vid.snippet.thumbnails.high.url,
					title: vid.snippet.title,
					desc: vid.snippet.description,
					url: `https://www.youtube.com/watch?v=${vid.id.videoId}`
				}
			));
			this.setState({
				loading: false,
				videos
			})
		});
	} // EO componentDidMount

	render() {
		return (
			<div className="row">
				{
					this.state.loading 
					? <p className="alert alert-info">Loading</p> 
					: this.state.videos.map((v) => (
						<div className="col-4" key={v.id}>
							<SearchResult video={v} />
						</div>
					))
				}
				
			</div>
		)
	}
}

export default SearchResultList