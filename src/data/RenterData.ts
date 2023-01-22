interface IRenterCard {
	renterImg: string
	name: string
	description: string
	stayDuration: string
	occupation: string
	matchedProperties: string[]
	preferences: string[]
}

const renter1 = "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg"
const renter2 = "https://media.istockphoto.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?s=612x612&w=0&k=20&c=2hQ4Sm9Puyf1otnVwcyvnY0fk4af-XxHyGqq9ozPpgE="
const renter3 = "https://thumbs.dreamstime.com/b/headshot-happy-asian-man-face-beard-mustache-91099404.jpg"
const renter4 = "https://media.istockphoto.com/id/878395336/photo/portrait-of-businessman-smiling-against-wall.jpg?s=612x612&w=0&k=20&c=nd_rYKkXtvtKsgzBRcOS1T0CrahJRlr87056UKVisPw="
const renter5 = "https://t4.ftcdn.net/jpg/01/90/17/51/360_F_190175122_pqOXT0HFw9A6E9omNiCtUvg8KxuOBrUr.jpg"
const renter6 = "https://media.istockphoto.com/id/1251308867/photo/smiling-friendly-young-woman-wearing-spectacles.jpg?s=612x612&w=0&k=20&c=CCQIn3bIJZ0zT3uqXwFxqqePh7c2Sv30ts4EyNXT5-s="
const renter7 = "https://media.istockphoto.com/id/685132223/photo/businesswoman-with-braided-hair-over-white.jpg?s=612x612&w=0&k=20&c=HmsQrf9AuqHReVZ7GNAggi5udYR7-wW7OzhcHFaqU6Y="
const renter8 = "https://media.istockphoto.com/id/969233490/photo/young-african-woman-smiling-at-sunset.jpg?s=612x612&w=0&k=20&c=G0cagT6s1rXm455ZN8TCReO1C78ua1xGJPXDi6eKGLA="
const renter9 = "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8="
const renter10 = "https://www.planetsport.com/image-library/square/500/p/pep-guardiola-profile.jpg"
const renter11 = "https://asroma2-cloudinary.corebine.com/asroma2-production/image/upload/c_fill,dpr_3.0,f_webp,g_auto,q_auto,w_768/v1/asroma2-prod/HeadshotMourinho2_iwlwuc"
const renter12 = "https://www.planetsport.com/image-library/square/500/s/sir-alex-ferguson-17-february-2021.jpg"
const renter13 = "https://cdn.prod.www.manager-magazin.de/images/3ad24c02-0001-0004-0000-000001373259_w1200_r1_fpx39.92_fpy55.jpg"
const renter14 = "https://www.theplace2.ru/archive/zinadin_zidan/img/zidane2nr8.jpg"
const renter15 = "https://www.coachesvoice.com/wp-content/uploads/2021/06/AllegriMobile.jpg"
const renter16 = "https://resources.premierleague.com/premierleague/photos/players/250x250/man50.png"
const renter17 = "https://resources.premierleague.com/premierleague/photos/players/250x250/man51018.png"
const renter18 = "https://resources.premierleague.com/premierleague/photos/players/250x250/man39237.png"
const renter19 = "https://bet-bet.net/wp-content/uploads/2021/04/Sam-Allardyce-1-300x300.png"
const renter20 = "https://resources.premierleague.com/premierleague/photos/players/250x250/man36.png"
const renter21 = "https://resources.premierleague.com/premierleague/photos/players/250x250/man85.png"

// 20 Renter Cards
export const renterData: IRenterCard[] = [
	{
		renterImg: renter1,
		name: "John Doe",
		description: "I love to travel and explore new places!",
		stayDuration: "June 1 - August 31",
		occupation: "Software Engineer",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["QUIET", "REMOTE WORK", "OUTDOOR"]
	},
	{
		renterImg: renter2,
		name: "James Siraj",
		description: "I love to dance and bake pastries!",
		stayDuration: "June 1 - January 31",
		occupation: "Product Manager",
		matchedProperties: ["48 Keene", "214 Hope", "315 Thayer"],
		preferences: ["QUIET", "REMOTE WORK", "OUTDOOR"]
	},
	{
		renterImg: renter3,
		name: "Jack Smith",
		description: "I love to play basketball and watch movies!",
		stayDuration: "June 1 - December 31",
		occupation: "Software Engineer",
		matchedProperties: ["44 Queens ", "214 Brown", "315 Bowen"],
		preferences: ["LOVE", "PARTY", "VIBES"]
	},
	{
		renterImg: renter4,
		name: "David Arian",
		description: "I love playing chess and listening to podcasts while walking",
		stayDuration: "June 1 - December 31",
		occupation: "Data Scientist",
		matchedProperties: ["44 Wayland ", "214 Jefferson", "315 Thayer"],
		preferences: ["MATH", "QUIET", "EXTROVERTED"]
	},
	{
		renterImg: renter5,
		name: "Mason Quinn",
		description: "I like to liverstream online speedruns and practice my piano skills",
		stayDuration: "June 1 - December 31",
		occupation: "Actor",
		matchedProperties: ["44 Davidson ", "214 Hope", "315 Hope"],
		preferences: ["ROBOTICS", "TABLE TENNIS", "SOCCER"]
	},
	{
		renterImg: renter6,
		name: "Jessica Alvarez",
		description: "I like to smoke some hookah, throwing parties and playing board games",
		stayDuration: "April 1 - November 31",
		occupation: "Student",
		matchedProperties: ["65 Avalon ", "214 Lloyd", "Riverhouse"],
		preferences: ["FRIENDLY", "COOK", "LAZY"]
	},
	{
		renterImg: renter7,
		name: "Samantha Smith",
		description: "I like to play video games, watch movies and go to the gym",
		stayDuration: "June 1 - December 31",
		occupation: "Student",
		matchedProperties: ["23 Brook ", "214 Young", "315 Freemont"],
		preferences: ["INTROVERTED", "QUIET", "CLEAN"]
	},
	{
		renterImg: renter8,
		name: "Yuna Albano",
		description: " I mediate often and i really like to sample perfumes sometimes!",
		stayDuration: "June 1 - December 31",
		occupation: "Student",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["OUTDOOR", "REMOTE WORK", "QUIET"],
	},
	{
		renterImg: renter9,
		name: "Sara Parker",
		description: "I love to dance, sing and paint! I Also have a pet cat named Mochi",
		stayDuration: "June 1 - December 31",
		occupation: "Actress",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["ACTING", "PARTY", "CLEAN"],
	},
	{
		renterImg: renter10,
		name: "Pep Guardiola",
		description: "I love to play soccer and watch movies!",
		stayDuration: "June 1 - December 31",
		occupation: "Premier League Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["TIKI-TAKA", "REMOTE WORK", "GOAT"]
	}, 
	{
		renterImg: renter11,
		name: "Jose Mourinho",
		description: "I love to play soccer and watch movies! Sometimes I like to play chess",
		stayDuration: "June 1 - December 31",
		occupation: "Serie A Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["COUNTER-ATTACK", "REMOTE WORK", "BOAT"],
	},
	{
		renterImg: renter12,
		name: "Alex Ferguson",
		description: "I love to play soccer and watch movies! Sometimes I like to play chess and Tennis!",
		stayDuration: "June 1 - December 31",
		occupation: "Premier League Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["LONG BALL", "REMOTE WORK", "INDOOR"],
	},
	{
		renterImg: renter13,
		name: "Jurgen Klopp",
		description: "I love to Rock and Roll!",
		stayDuration: "June 1 - December 31",
		occupation: "Premier League Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["HIGH PRESSURE", "REMOTE WORK", "OUTDOOR"],
	},
	{
		renterImg: renter14,
		name: "Zinedine Zidane",
		description: "I absolutely love shaving my head and playing football!",
		stayDuration: "June 1 - December 31",
		occupation: "France Football Federation Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["TACTICAL", "REMOTE WORK", "OUTDOOR"],
	},
	{
		renterImg: renter15,
		name: "Masimiliano Allegri",
		description: "I just love reading books and playing chess.",
		stayDuration: "June 1 - December 31",
		occupation: "Serie A Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["NOT TACTICAL", "REMOTE WORK", "INDOOR"],
	},
	{
		renterImg: renter16,
		name: "Carlo Ancelotti",
		description: "I love to smoke and raise my eyebrows when i play chess!",
		stayDuration: "June 1 - December 31",
		occupation: "Serie A Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["CHAMPIONS LEAGUE", "REMOTE WORK", "OUTDOOR"],
	},
	{
		renterImg: renter17,
		name: "Mikel Arteta",
		description: "I enjoy Amazon documentaries and playing chess!",
		stayDuration: "June 1 - December 31",
		occupation: "Premier League Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["PRESS", "REMOTE WORK", "OUTDOOR"],
	},
	{
		renterImg: renter18,
		name: "Thomas Tuchel",
		description: "I adore watching football!",
		stayDuration: "June 1 - December 31",
		occupation: "Premier League Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["TERRORBALL", "REMOTE WORK", "INDOOR"],
	},
	{
		renterImg: renter19,
		name: "Sam Allardyce",
		description: "I love to watch talk shows and gamble!",
		stayDuration: "June 1 - December 31",
		occupation: "Premier League Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["LONG BALL", "REMOTE WORK", "INDOOR"],
	},
	{
		renterImg: renter20,
		name: "Rafa Benitez",
		description: "I love to watch talk shows and speak facts!",
		stayDuration: "June 1 - December 31",
		occupation: "Premier League Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["LONG BALL", "REMOTE WORK", "OUTDOOR"],
	},
	{
		renterImg: renter21,
		name: "David Moyes",
		description: "I love to watch talk shows and listen to podcasts about financial fair play.",
		stayDuration: "June 1 - December 31",
		occupation: "Premier League Manager",
		matchedProperties: ["44 Queens ", "214 Hope", "315 Thayer"],
		preferences: ["LONG BALL", "REMOTE WORK", "OUTDOOR"],
	},










]
