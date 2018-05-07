import {
	GET_SUBCATEGORIES_REQUEST,
	GET_SUBCATEGORIES_SUCCESS,
	GET_SUBCATEGORIES_FAILURE
} from '../actions/subCategories'

const initialState = {
	loading: true
}

export default function subCategories(state=initialState, action) {
	switch (action.type) {
		case GET_SUBCATEGORIES_REQUEST:
			return {
				...state,
				loading: true
			}
			break;
		case GET_SUBCATEGORIES_SUCCESS:
			return {
				...state,
				data: action.subCategories,
				loading: false
			}
			break;
		case GET_SUBCATEGORIES_FAILURE:
			return {
				loading: false,
				error: action.error
			}
		default:
			return state;
			break;
	}
}