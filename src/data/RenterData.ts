interface IRenterCard {
    renter_img: string
    name: string
    dec: string
    stay_duration: string
    occupation: string
    matched_properties: string[]
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

export const renterData: IRenterCard[] = [
    {
        renter_img: renter1,
        name: "John Doe",
        dec: "I love to travel and explore new places!",
        stay_duration: "June 1 - August 31",
        occupation: "Software Engineer",
        matched_properties: ["44 Queens ", "214 Hope", "315 Thayer"],
        preferences: ["QUIET", "REMOTE WORK", "OUTDOOR"]
    },
    {
        renter_img: renter2,
        name: "James Siraj",
        dec: "I love to dance and bake pastries!",  
        stay_duration: "June 1 - January 31",
        occupation: "Product Manager",
        matched_properties: ["48 Keene", "214 Hope", "315 Thayer"],
        preferences: ["QUIET", "REMOTE WORK", "OUTDOOR"]
    },
    {
        renter_img: renter3,
        name: "Jack Smith",
        dec: "I love to play basketball and watch movies!",
        stay_duration: "June 1 - December 31",
        occupation: "Software Engineer",
        matched_properties: ["44 Queens ", "214 Brown", "315 Bowen"],
        preferences: ["LOVE", "PARTY", "VIBES"]
    },
    {
        renter_img: renter4,
        name: "David Arian",
        dec: "I love playing chess and listening to podcasts while walking",
        stay_duration: "June 1 - December 31",
        occupation: "Data Scientist",
        matched_properties: ["44 Wayland ", "214 Jefferson", "315 Thayer"],
        preferences: ["MATH", "QUIET", "EXTROVERTED"]
    },
    {
        renter_img: renter5,
        name: "Mason Quinn",
        dec: "I like to liverstream online speedruns and practice my piano skills",
        stay_duration: "June 1 - December 31",
        occupation: "Actor",
        matched_properties: ["44 Davidson ", "214 Hope", "315 Hope"],
        preferences: ["ROBOTICS", "TABLE TENNIS", "SOCCER"]
    },
    {
        renter_img: renter6,
        name: "Jessica Alvarez",
        dec: "I like to smoke some hookah, throwing parties and playing board games",
        stay_duration: "April 1 - November 31",
        occupation: "Student",
        matched_properties: ["65 Avalon ", "214 Lloyd", "Riverhouse"],
        preferences: ["FRIENDLY", "COOK", "LAZY"]
    },
    {
        renter_img: renter7,
        name: "Samantha Smith",
        dec: "I like to play video games, watch movies and go to the gym",
        stay_duration: "June 1 - December 31",
        occupation: "Student",
        matched_properties: ["23 Brook ", "214 Young", "315 Freemont"],
        preferences: ["INTROVERTED", "QUIET", "CLEAN"]
    },
    {
        renter_img: renter8,
        name: "Yuna Albano",
        dec: " I mediate often and i really like to sample perfumes sometimes!",
        stay_duration: "June 1 - December 31",
        occupation: "Student",
        matched_properties: ["44 Queens ", "214 Hope", "315 Thayer"],
        preferences: ["OUTDOOR", "REMOTE WORK", "QUIET"],
    },
    {
        renter_img: renter9,
        name: "Sara Parker",
        dec: "I love to dance, sing and paint! I Also have a pet cat named Mochi",
        stay_duration: "June 1 - December 31",
        occupation: "Actress",
        matched_properties: ["44 Queens ", "214 Hope", "315 Thayer"],
        preferences: ["ACTING", "PARTY", "CLEAN"],
    },
]
