import {
  _getBranding,
  _getMainCategories,
  _getSubCategories
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getBranding(),
    _getMainCategories(),
  ]).then(([branding, mainCategories]) => ({
    data: {
    	branding: branding.data,
    	mainCategories: mainCategories.data
    }
  }))
}

export function getSubCategories(categoryId) {
	return _getSubCategories(categoryId);
}