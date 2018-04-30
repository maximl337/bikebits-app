import React, { Component, Fragment } from 'react';
import { handleGetInitialData } from '../actions/shared';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainCategoriesList from '../components/MainCategoriesList';

class App extends Component {
	componentDidMount() {
    this.props.dispatch(handleGetInitialData());
  }
	render() {
		const { branding, mainCategories } = this.props
		return (
			<Fragment>
				<Header branding={branding} />
				<MainCategoriesList mainCategories={mainCategories} />
			</Fragment>
		); 
	}
}

const mapStateToProps = (state, ownProps) => {
	const { branding, mainCategories } = state;
	return {
		branding,
		mainCategories
	}
}
export default connect(mapStateToProps)(App);
