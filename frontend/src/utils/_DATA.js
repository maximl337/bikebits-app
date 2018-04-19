let branding = {
	name: 'BikeBits',
	description: 'Lorem ipsum'
}

export function _getBranding () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...branding}), 1000)
  })
}