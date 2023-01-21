interface IListingCard {
	listingImg: string
	title: string
	city: string
	zipCode: string
	numOfBedrooms: number
	numOfBathrooms: number
	price: string
	numOfMatches: number
}


const const_city = "New York,NY"

const dumbo = "https://images.adsttc.com/media/images/5a95/95a7/f197/cc10/a800/004b/newsletter/Exterior6.jpg?1519752609"
const fin_dist = "https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2Fhx07mxa66s0e4gj8bda2qn2zg1i215&option=N&h=472&permitphotoenlargement=false"
const hoboken = "https://images1.apartments.com/i2/BgZtw_wKUdT5jnawo4XoKQ6lVJVhkp9hZXUSW3T4fwk/117/grand-adams-hoboken-nj-building-photo.jpg"
const east_side = "https://www.compass.com/m3/6fbacaccc24e75a4523e220fd721bdb932a7a5fa.jpg"
const bowery = "https://media.cntraveler.com/photos/59e9fce98d4f736d51415bf2/master/pass/Bowery_NYC_1734_BH_Lobby_Annie-Schlechter.jpg"
const brook = "https://imgs.6sqft.com/wp-content/uploads/2021/03/15175537/149-Clinton-Street-1.jpg"
const chelsea = "https://cdn.mos.cms.futurecdn.net/HiRheCRWLdsiB3KFAGd5nF.jpg"
const hell = "https://imgs.6sqft.com/wp-content/uploads/2016/09/21201823/347-West-44th-Street-3.jpg"
const oyo = "https://www.hotels-newyorkcity.org/data/Photos/OriginalPhoto/9721/972168/972168652.JPEG"

export const ListingData: IListingCard[] = [
	{
		listingImg: dumbo,
		title: "Town House in Dumbo",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 3,
		numOfBathrooms: 4,
		price: "$2,750",
		numOfMatches: 3
	},
	{
		listingImg: fin_dist,
		title: "Intimate Condo in Financial District",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 2,
		numOfBathrooms: 1,
		price: "$3,750",
		numOfMatches: 3
	},

	{
		listingImg: hoboken,
		title: "Apartment in Hoboken",
		city: const_city,
		zipCode: "11214",
		numOfBedrooms: 3,
		numOfBathrooms: 3,
		price: "$3,200",
		numOfMatches: 3
	},
	{

		listingImg: hoboken,
		title: "Apartment in Hoboken",
		city: const_city,
		zipCode: "11214",
		numOfBedrooms: 3,
		numOfBathrooms: 3,
		price: "$3,200",
		numOfMatches: 3
	},
	{
		listingImg: east_side,
		title: "Town House in lower east side",
		city: const_city,
		zipCode: "11217",
		numOfBedrooms: 3,
		numOfBathrooms: 4,
		price: "$1,825",
		numOfMatches: 3
	},
	{
		listingImg: bowery,
		title: "Town House in Bowery",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 3,
		numOfBathrooms: 3,
		price: "$1,750",
		numOfMatches: 3
	},
	{
		listingImg: brook,
		title: "Town House in Brooklyn",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 4,
		numOfBathrooms: 4,
		price: "$3,300",
		numOfMatches: 3
	},
	{
		listingImg: chelsea,
		title: "Chelsea Townhouse",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 3,
		numOfBathrooms: 3,
		price: "$4,500/month",
		numOfMatches: 3
	},
	{
		listingImg: hell,
		title: "Hell's Kitchen Flat",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 1,
		numOfBathrooms: 1,
		price: "$3,500/month",
		numOfMatches: 3
	},
	{
		listingImg: oyo,
		title: "Oyo Flat",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 1,
		numOfBathrooms: 1,
		price: "$6,500/month",
		numOfMatches: 3
	}
]
