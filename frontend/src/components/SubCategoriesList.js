import React from 'react'
import SubCategory from './SubCategory'

const SubCategoriesList = ({ subCategories }) => (
	<div className="row">
		{subCategories.map((subCategory) => <SubCategory subCategory={subCategory} />)}
	</div>
)

export default SubCategoriesList