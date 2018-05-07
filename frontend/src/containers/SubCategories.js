import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleGetSubCategories } from '../actions/subCategories'
import SubCategoriesList from '../components/SubCategoriesList'
import Search from '../components/Search'

class SubCategories extends Component {
	state = {
		loading: true
	}
	componentDidMount() {
		let categoryId = this.props.match.params.categoryId
		this.props.dispatch(handleGetSubCategories(categoryId))
	}
	render() {
		const { loading, data } = this.props.subCategories;
		return (
			<Fragment>
				<Search />
				{this.props.subCategories.loading && !this.props.subCategories.hasOwnProperty('data')
					? <p>Loading</p> 
					: <SubCategoriesList subCategories={this.props.subCategories.data} />
				}
			</Fragment>
		)
	}
}

function mapStateToProps({subCategories}) {
	return {
		subCategories
	}
}
export default connect(mapStateToProps)(SubCategories)