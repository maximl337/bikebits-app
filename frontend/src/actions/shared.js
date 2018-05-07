import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../utils/api'
import {
	getBrandingRequest,
	getBrandingSuccess,
	getBrandingFailure
} from './branding'
import {
	getMainCategoriesRequest,
	getMainCategoriesSuccess,
	getMainCategoriesFailure,
} from './mainCategories'

export const handleGetInitialData = () => (dispatch, getState) => {
	dispatch(getBrandingRequest())
	dispatch(getMainCategoriesRequest())
	dispatch(showLoading())
  getInitialData()
  	.then((resp) => {
  		const { branding, mainCategories } = resp.data
  		dispatch(getBrandingSuccess(branding))
  		dispatch(getMainCategoriesSuccess(mainCategories))
  	})
  	.catch(err => {
      console.log("ERROR", err);
  		if(err.response.status === 422) {
        dispatch(getBrandingFailure(err.response.data))
        dispatch(getMainCategoriesFailure(err.response.data))
      } else {
      	const message = "Something went wrong";
        dispatch(getBrandingFailure([message]))
        dispatch(getMainCategoriesFailure([message]))
      }
  	})
  	.then(() => dispatch(hideLoading()))
}