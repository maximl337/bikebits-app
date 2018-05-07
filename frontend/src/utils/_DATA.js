let branding = {
	name: 'My App',
	description: 'Lorem ipsum'
}

const loremIpsumImage = "https://i.imgur.com/rbcf0Fc.png"

let mainCategories = [
	{
		id: 1,
		title: "Bike",
		description: "Maintenance, upgrades, Build a bike",
		image: loremIpsumImage,
	},
	{
		id: 2,
		title: "Me",
		description: "Fitness, Wellness, Skills, Nutrition",
		image: loremIpsumImage,
	},
	{
		id: 3,
		title: "Trails",
		description: "Find a Ride, Maps, Guides",
		image: loremIpsumImage,
	},
]

let subCategories = [
	{
		id: 1,
		title: "Drivetrain",
		description: "",
		image: loremIpsumImage,
		categoryId: 1
	},
	{
		id: 2,
		title: "Cockpit",
		description: "",
		image: loremIpsumImage,
		categoryId: 1
	},
]

let subCategoriesTerms = [
	{
		id: 3,
		title: "Drivetrain",
		description: "Find a Ride, Maps, Guides",
		image: loremIpsumImage,
		subCategoryId: ''
	},
]


export function _getBranding () {
  return new Promise((res, rej) => {
    setTimeout(() => res({ data: branding }), 1000)
  })
}

export function _getMainCategories () {
	return new Promise((res, rej) => {
    setTimeout(() => res({
    	data: [...mainCategories]
    	}), 1000)
  })
}

export function _getSubCategories( categoryId ) {
	return new Promise((res, rej) => {
    setTimeout(() => res({
    	data: subCategories.filter(o => o.categoryId == categoryId)
    	}), 1000)
  })
}