import {
  _getBranding,
  _getMainCategories
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getBranding(),
    _getMainCategories(),
  ]).then(([branding, mainCategories]) => ({
    branding,
    mainCategories
  }))
}