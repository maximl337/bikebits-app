import { getBranding } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading'

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

export const handleGetBranding = () => (dispatch, getState) => {
	dispatch(getBrandingRequest());
	dispatch(showLoading())
  getBranding()
  	.then(({ branding }) => {
  		console.log("in action----------", branding);
  		dispatch(getBrandingSuccess(branding));
  	})
  	.catch(err => {
  		if(err.response.status === 422) {
        dispatch(getBrandingFailure(err.response.data));   
      } else {
        dispatch(getBrandingFailure(["Something went wrong"]));
      }
  	})
  	.then(() => dispatch(hideLoading()))
}