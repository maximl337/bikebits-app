let branding = {
	name: 'My App',
	description: 'Lorem ipsum'
}

let mainCategories = [
	{
		id: 1,
		title: "Bike",
		description: "Maintenance, upgrades, Build a bike",
		image: "https://i.imgur.com/rbcf0Fc.png"
	},
	{
		id: 2,
		title: "Me",
		description: "Fitness, Wellness, Skills, Nutrition",
		image: "https://i.imgur.com/rbcf0Fc.png"
	},
	{
		id: 3,
		title: "Trails",
		description: "Find a Ride, Maps, Guides",
		image: "https://i.imgur.com/rbcf0Fc.png"
	},
]

export function _getBranding () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...branding}), 1000)
  })
}

export function _getMainCategories () {
	return new Promise((res, rej) => {
    setTimeout(() => res([...mainCategories]), 1000)
  })
}