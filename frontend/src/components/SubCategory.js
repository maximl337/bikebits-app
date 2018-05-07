import React, {Fragment} from 'react'

const SubCategory = ({ subCategory }) => (
	<Fragment>
		<div className="col-md-4 text-center">
			<img src={subCategory.image} alt="Card cap" />
			<h2>{subCategory.title}</h2>
		</div>
		<div className="col-md-6 col-md-offset-1 search-terms-list">
			<h3>Search term  1</h3>
			<h3>Search term  2</h3>
			<h3>Search term  3</h3>
			<h3>Search term  4</h3>
			<h3>Search term  5</h3>
			<h3>Search term  6</h3>
		</div>
	</Fragment>
)

export default SubCategory