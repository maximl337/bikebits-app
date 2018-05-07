import React from 'react'
import queryString from 'query-string'

const SearchResult = ({ location }) => (
	<div>
		<p>{JSON.stringify(queryString.parse(location.search))}</p>
	</div>
)

export default SearchResult