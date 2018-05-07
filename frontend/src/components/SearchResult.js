import React from 'react'
import PropTypes from 'prop-types'

const SearchResult = ({ video }) => (
		<div className="card main-category">
		  <img className="card-img-top" src={video.thumbnail} alt={video.title} />
		  <div className="card-body">
		    <h5 className="card-title">
		    	{/*<Link to={`/category/${mainCategory.id}`}>
		    	{mainCategory.title}
		    	</Link> */}
		    	{video.title}
		    </h5>
		    <p className="card-text">{video.description}</p>
		  </div>
		</div>
)

SearchResult.propTypes = {
	video: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string
  }).isRequired
}

export default SearchResult