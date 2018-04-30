import {
	GET_MAIN_CATEGORIES_REQUEST,
	GET_MAIN_CATEGORIES_SUCCESS,
	GET_MAIN_CATEGORIES_FAILURE
} from '../actions/mainCategories';

const initialState = {
	loading: true
}

export default function mainCategories (state=initialState, action) {
	switch (action.type) {
		case GET_MAIN_CATEGORIES_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_MAIN_CATEGORIES_SUCCESS:
			return {
				...state,
				data: action.mainCategories,
				loading: false
			};
		case GET_MAIN_CATEGORIES_FAILURE:
			return {
				...state,
				error: action.error,
				loading: false
			}
		default:
			return state;
	}
}

