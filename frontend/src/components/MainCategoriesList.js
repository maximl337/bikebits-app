import React from 'react';
import PropTypes from 'prop-types';
import MainCategory from './MainCategory';

const MainCategoriesList = ({ mainCategories }) => (
	<div className="row">
		<div className="col-md-10 col-sm-12 offset-md-1">
			<div className="row">
				{ mainCategories.loading && !mainCategories.hasOwnProperty('data') 
					? <span>Loading categories</span>
					: mainCategories.data.map((mainCategory) => (
						<MainCategory key={mainCategory.id} mainCategory={mainCategory} />
					))
				}
			</div>
		</div>
	</div>
);

MainCategoriesList.propType = {
	mainCategories: PropTypes.array.isRequired
}

export default MainCategoriesList
