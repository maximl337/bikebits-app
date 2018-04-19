import {
  _getBranding,
} from './_DATA.js'

export function getBranding () {
  return Promise.all([
    _getBranding(),
  ]).then(([branding]) => ({
    branding
  }))
}