import React from 'react';
import PropTypes from 'prop-types';

const MainCategoriesList = ({ mainCategories }) => (
	<div className="row">
		{ mainCategories.loading && !mainCategories.hasOwnProperty('data') 
			? <span>Loading categories</span>
			: mainCategories.data.map((mainCategory) => (
				<div className="col-4" key={mainCategory.id}>
					<div className="card main-category">
					  <img className="card-img-top" src={mainCategory.image} alt="Card cap" />
					  <div className="card-body">
					    <h5 className="card-title">{mainCategory.title}</h5>
					    <p className="card-text">{mainCategory.description}</p>
					  </div>
					</div>
				</div>
			))
		}
	</div>
);

MainCategoriesList.propType = {
	mainCategories: PropTypes.array.isRequired
}

export default MainCategoriesList
