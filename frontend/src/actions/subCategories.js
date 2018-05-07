import { showLoading, hideLoading } from 'react-redux-loading'
import { getSubCategories } from '../utils/api'

export const GET_SUBCATEGORIES_REQUEST = 'GET_SUBCATEGORIES_REQUEST'
export const GET_SUBCATEGORIES_SUCCESS = 'GET_SUBCATEGORIES_SUCCESS'
export const GET_SUBCATEGORIES_FAILURE = 'GET_SUBCATEGORIES_FAILURE'

export const handleGetSubCategories = (categoryId) => (dispatch, getState) => {
	dispatch(showLoading)
	dispatch(getSubcategoriesRequest(categoryId))
	getSubCategories(categoryId)
		.then((resp) => {
			dispatch(getSubcategoriesSuccess(resp.data))
		})
		.catch(err => dispatch(getSubcategoriesFailure(err.response.data)))
		.then(() => dispatch(hideLoading))
}

export function getSubcategoriesRequest() {
	return {
		type: GET_SUBCATEGORIES_REQUEST
	}
}

export function getSubcategoriesSuccess(subCategories) {
	return {
		type: GET_SUBCATEGORIES_SUCCESS,
		subCategories
	}
}

export function getSubcategoriesFailure(error) {
	return {
		type: GET_SUBCATEGORIES_FAILURE,
		error
	}
}