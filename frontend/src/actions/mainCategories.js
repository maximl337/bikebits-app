export const GET_MAIN_CATEGORIES_REQUEST = 'GET_MAIN_CATEGORIES_REQUEST';
export const GET_MAIN_CATEGORIES_SUCCESS = 'GET_MAIN_CATEGORIES_SUCCESS';
export const GET_MAIN_CATEGORIES_FAILURE = 'GET_MAIN_CATEGORIES_FAILURE';

export function getMainCategoriesRequest() {
	return {
		type: GET_MAIN_CATEGORIES_REQUEST
	}
}

export function getMainCategoriesSuccess(mainCategories) {
	return {
		type: GET_MAIN_CATEGORIES_SUCCESS,
		mainCategories
	}
}

export function getMainCategoriesFailure(error) {
	return {
		type: GET_MAIN_CATEGORIES_FAILURE,
		error
	}
}