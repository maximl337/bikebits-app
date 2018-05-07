import React, { Component, Fragment } from 'react'
import { handleGetInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import SubCategories from './SubCategories'
import SearchResultList from './SearchResultList'

class App extends Component {
	componentDidMount() {
    this.props.dispatch(handleGetInitialData())
  }
	render() {
		const { branding, mainCategories } = this.props
		return (
			<Fragment>
				<Header branding={branding} />
				<Switch>
					<Route path="/category/:categoryId" component={SubCategories} />
					<Route path="/search" component={SearchResultList} />
					<Route render={(props) => <Home {...props} mainCategories={mainCategories} />}  />
				</Switch>
			</Fragment>
		); 
	}
}

const mapStateToProps = ({ branding, mainCategories }, ownProps) => {
	return {
		branding,
		mainCategories
	}
}
export default connect(mapStateToProps)(App)
