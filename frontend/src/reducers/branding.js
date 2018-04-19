import {
	GET_BRANDING_REQUEST,
	GET_BRANDING_SUCCESS,
	GET_BRANDING_FAILURE
} from '../actions/branding';

export default function branding (state={}, action) {
	switch (action.type) {
		case GET_BRANDING_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_BRANDING_SUCCESS:
			return {
				...state,
				...action.branding,
				loading: false
			};
		case GET_BRANDING_FAILURE:
			return {
				...state,
				errorMessages: action.errorMessages,
				loading: false
			}
		default:
			return state;
	}
}

