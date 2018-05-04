import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MainCategory = ({ mainCategory }) => (
	<div className="col-4">
		<div className="card main-category">
		  <img className="card-img-top" src={mainCategory.image} alt="Card cap" />
		  <div className="card-body">
		    <h5 className="card-title">
		    	<Link to={`/category/${mainCategory.id}`}>
		    	{mainCategory.title}
		    	</Link>
		    </h5>
		    <p className="card-text">{mainCategory.description}</p>
		  </div>
		</div>
	</div>
)

MainCategory.propTypes = {
	mainCategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default MainCategory