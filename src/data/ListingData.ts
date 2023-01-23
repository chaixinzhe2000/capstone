import { IListingCard } from "../components"

const const_city = "New York, NY"

const dumbo = "https://images.adsttc.com/media/images/5a95/95a7/f197/cc10/a800/004b/newsletter/Exterior6.jpg?1519752609"
const fin_dist = "https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2Fhx07mxa66s0e4gj8bda2qn2zg1i215&option=N&h=472&permitphotoenlargement=false"
const hoboken = "https://images1.apartments.com/i2/BgZtw_wKUdT5jnawo4XoKQ6lVJVhkp9hZXUSW3T4fwk/117/grand-adams-hoboken-nj-building-photo.jpg"
const east_side = "https://www.compass.com/m3/6fbacaccc24e75a4523e220fd721bdb932a7a5fa.jpg"
const bowery = "https://media.cntraveler.com/photos/59e9fce98d4f736d51415bf2/master/pass/Bowery_NYC_1734_BH_Lobby_Annie-Schlechter.jpg"
const brook = "https://imgs.6sqft.com/wp-content/uploads/2021/03/15175537/149-Clinton-Street-1.jpg"
const chelsea = "https://cdn.mos.cms.futurecdn.net/HiRheCRWLdsiB3KFAGd5nF.jpg"
const hell = "https://imgs.6sqft.com/wp-content/uploads/2016/09/21201823/347-West-44th-Street-3.jpg"
const oyo = "https://www.hotels-newyorkcity.org/data/Photos/OriginalPhoto/9721/972168/972168652.JPEG"
const soho = "http://cdn.home-designing.com/wp-content/uploads/2014/06/white-modern-studio-design.jpeg"
const chinatown = "http://www.contemporist.com/wp-content/uploads/2019/10/modern-apartment-design-hidden-lighting-111019-1249-01-800x408.jpg"
const brooklyn = "https://www.bezmirno.com/wp-content/uploads/2019/05/06.1.-Tiny-Apartments-kitchen.jpg"
const harlem = "https://www.mydomaine.com/thmb/blnXRIB4ad-EwfHiLAGIwgHXRFE=/2226x1482/filters:no_upscale():max_bytes(150000):strip_icc()/jessicanelsondesign-77444ac1077e44449eb5b50c42b2ad12.png"
const bronx = "https://fontanarchitecture.com/wp-content/uploads/2020/04/Modern-Apartment-Design-Ideas.jpg"
const perri = "https://images.adsttc.com/media/images/5be3/3bc4/08a5/e549/e300/031a/newsletter/42449.jpg?1541618579"
const tribos = "https://www.idesignarch.com/wp-content/uploads/Alvhem-Apartment-Interior-Design_3.jpg"
const tribeca = "https://decoholic.org/wp-content/uploads/2020/04/London-apartment-interior-1-880x660.jpeg"
const west_side = "https://www.londonperfect.com/blog/wp-content/uploads/2019/09/10-Stylish-London-Vacation-Apartments-with-Chic-Interior-De%CC%81cor-by-London-Perfect1.jpg"
const south_side = "https://i.pinimg.com/originals/1b/fb/73/1bfb7390791e1e1cfd5b932e39bcd910.jpg"
const central = "https://www.londonperfect.com/blog/wp-content/uploads/2019/05/Churchill.jpg"
const bed_sty = "https://st.hzcdn.com/simgs/877114a1086e696e_4-1743/midcentury-living-room.jpg"

// 20 Listings in New York
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
	},

	{
		listingImg: soho,
		title: "Soho Flat",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 1,
		numOfBathrooms: 1,
		price: "$6,500/month",
		numOfMatches: 3


	},
	{
		listingImg: chinatown,
		title: "Chinatown Flat",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 3,
		numOfBathrooms: 3.5,
		price: "$10,500/month",
		numOfMatches: 1
	},
	{
		listingImg: brooklyn,
		title: "Brooklyn High Rise",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 3,
		numOfBathrooms: 3.5,
		price: "$10,500/month",
		numOfMatches: 1
	},
	{
		listingImg: harlem,
		title: "Harlem High Rise",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 3,
		numOfBathrooms: 3.5,
		price: "$7,500/month",
		numOfMatches: 1
	},
	{
		listingImg: bronx,
		title: "Bronx Cozy Condo",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 3,
		numOfBathrooms: 3.5,
		price: "$7,500/month",
		numOfMatches: 1
	},
	{
		listingImg: perri,
		title: "Perri's Palace Apartments",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 2,
		numOfBathrooms: 1.5,
		price: "$9,500/month",
		numOfMatches: 1
	},
	{
		listingImg: tribos,
		title: "Tribos Apartment Complex",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 2,
		numOfBathrooms: 2.5,
		price: "$1,500/month",
		numOfMatches: 0
	},
	{
		listingImg: tribeca,
		title: "Tribeca Cozy House",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 5,
		numOfBathrooms: 5.5,
		price: "$3,500/month",
		numOfMatches: 0
	},


	{
		listingImg: west_side,
		title: "West Side Cozy House",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 2,
		numOfBathrooms: 2.5,
		price: "$2,500/month",
		numOfMatches: 0
	},
	{
		listingImg: south_side,
		title: "South Side Cozy House",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 2,
		numOfBathrooms: 2.5,
		price: "$11,500/month",
		numOfMatches: 0
	},
	{
		listingImg: central,
		title: "Cozy House Northbound of Central Park",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 2,
		numOfBathrooms: 2.5,
		price: "$7,500/month",
		numOfMatches: 0
	},
	{
		listingImg: bed_sty,
		title: "Bed Stuy Cozy House",
		city: const_city,
		zipCode: "11213",
		numOfBedrooms: 2,
		numOfBathrooms: 2.5,
		price: "$9,500/month",
		numOfMatches: 0
	}
];
