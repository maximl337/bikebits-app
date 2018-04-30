export const GET_BRANDING_REQUEST = 'GET_BRANDING_REQUEST';
export const GET_BRANDING_SUCCESS = 'GET_BRANDING_SUCCESS';
export const GET_BRANDING_FAILURE = 'GET_BRANDING_FAILURE';

export function getBrandingRequest() {
	return {
		type: GET_BRANDING_REQUEST
	}
}

export function getBrandingSuccess(branding) {
	return {
		type: GET_BRANDING_SUCCESS,
		branding
	}
}

export function getBrandingFailure(errorMessages) {
	return {
		type: GET_BRANDING_FAILURE,
		errorMessages
	}
}