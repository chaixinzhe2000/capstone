interface IListingCard {
	listing_img: string
    title: string
    address_city: string
    address_zip: string
    num_bedrooms: string
    num_bathrooms: string
    monthly_price: string
    num_matches: string

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
        listing_img: dumbo,
        title: "Town House in Dumbo",
        address_city: const_city,
        address_zip: "11213",
        num_bedrooms: "3",
        num_bathrooms: "4",
        monthly_price: "$2,750",
        num_matches: "3"
    },

    {
        listing_img: fin_dist,
        title: "Intimate Condo in Financial District",
        address_city: const_city,
        address_zip: "11213",
        num_bedrooms: "2",
        num_bathrooms: "1",
        monthly_price: "$3,750",
        num_matches: "3"
    },

    {
        listing_img: hoboken,
        title: "Apartment in Hoboken",
        address_city: const_city,
        address_zip: "11214",
        num_bedrooms: "3",
        num_bathrooms: "3",
        monthly_price: "$3,200",
        num_matches: "3"
    },
    {

        listing_img: hoboken,
        title: "Apartment in Hoboken",
        address_city: const_city,
        address_zip: "11214",
        num_bedrooms: "3",
        num_bathrooms: "3",
        monthly_price: "$3,200",
        num_matches: "3"
    },
    {
        listing_img: east_side,
        title: "Town House in lower east side",
        address_city: const_city,
        address_zip: "11217",
        num_bedrooms: "3",
        num_bathrooms: "4",
        monthly_price: "$1,825",
        num_matches: "3"
    },
    {
        listing_img: bowery,
        title: "Town House in Bowery",
        address_city: const_city,
        address_zip: "11213",
        num_bedrooms: "3",
        num_bathrooms: "3",
        monthly_price: "$1,750",
        num_matches: "3"
    },
    {
        listing_img: brook,
        title: "Town House in Brooklyn",
        address_city: const_city,
        address_zip: "11213",
        num_bedrooms: "4",
        num_bathrooms: "4",
        monthly_price: "$3,300",
        num_matches: "3"
    },
    {
        listing_img: chelsea,
        title: "Chelsea Townhouse",
        address_city: const_city,
        address_zip: "11213",
        num_bedrooms: "3",
        num_bathrooms: "3",
        monthly_price: "$4,500/month",
        num_matches: "3"
    },
    {
        listing_img: hell,
        title: "Hell's Kitchen Flat",
        address_city: const_city,
        address_zip: "11213",
        num_bedrooms: "1",
        num_bathrooms: "1",
        monthly_price: "$3,500/month",
        num_matches: "3"
    },
    {
        listing_img: oyo,
        title: "Oyo Flat",
        address_city: const_city,
        address_zip: "11213",
        num_bedrooms: "1",
        num_bathrooms: "1",
        monthly_price: "$6,500/month",
        num_matches: "3"
    }
]
