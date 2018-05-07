import React, { Component, Fragment } from 'react'

class Search extends Component {
	state = {
		searchTerm: ''
	}
	onInputChange = (e) => {
		e.preventDefault();
		this.setState({
			searchTerm: e.target.value
		})
	}
	onSearchSubmit = (e) => {
		e.preventDefault();
		alert(this.state.searchTerm);
	}
	render() {
		return (
			<Fragment>
				<form onSubmit={this.onSearchSubmit}>
					<div className="input-group mb-3">
					  <input 
					  	onChange={this.onInputChange} 
					  	value={this.state.searchTerm}
					  	type="text" 
					  	className="form-control" 
					  	placeholder="Search" />
					  <div className="input-group-append">
					    <button 
					    	className="btn btn-primary" 
					    	type="submit">Button</button>
					  </div>
					</div>
				</form>
			</Fragment>
		)
	}
}

export default Search