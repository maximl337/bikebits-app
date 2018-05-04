import React, { Fragment } from 'react'
import HomePageMessage from './HomePageMessage'
import MainCategoriesList from './MainCategoriesList'

const Home = ({ mainCategories }) => (
	<Fragment>
		<HomePageMessage />
		<MainCategoriesList mainCategories={mainCategories} />
	</Fragment>
)

export default Home