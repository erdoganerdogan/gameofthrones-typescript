import { LoyaltyUser, Permissions } from "./enums";
import { Review, Property } from "./interfaces";
import {
  showReviewTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
} from "./utils";
import MainProperty from "./classes";

const propertyContainer = document.querySelector(
  ".properties"
) as HTMLDivElement;
const reviewContainer = document.querySelector(".reviews") as HTMLDivElement;
const container = document.querySelector(".container") as HTMLDivElement;
const button = document.querySelector("button") as HTMLButtonElement;
const footer = document.querySelector(".footer") as HTMLDivElement;

let isLoggedIn: boolean;

//Reviews
const reviews: Review[] = [
  {
    name: "Arya Stark",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "25.06.2022",
  },
  {
    name: "Samwell Tarly",
    stars: 3,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "25.06.2022",
  },
  {
    name: "Lyanna Mormont",
    stars: 4,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "25.06.2022",
  },
  {
    name: "Daenerys Targaryen",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "25.06.2022",
  },
];

const you = {
  firstName: "Jon",
  lastName: "Snow",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 29,
  stayedAt: ["qarth", "winterfell", "kings-landing"],
};

//Properties
const properties: Property[] = [
  {
    image: "images/casterly-rock-westerlands.jpg",
    title: "Casterly Rock",
    price: 35,
    location: {
      firstLine: "House Lannister",
      city: "Westeros",
      code: 18588,
      country: "Kingdom of the Rock",
    },
    contact: [123456, "lanister@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/kings-landing.jpg",
    title: "Kings Landing",
    price: 80,
    location: {
      firstLine: "Capital City",
      city: "Crownlands",
      code: 1,
      country: "Westeros",
    },
    contact: [123456, "king@gov.com"],
    isAvailable: true,
  },
  {
    image: "images/qarth.jpg",
    title: "Qarth Castle",
    price: 45,
    location: {
      firstLine: "Qarth",
      city: "Qarth",
      code: 52525,
      country: "Essos",
    },
    contact: [123456, "qarth@hotmail.com"],
    isAvailable: true,
  },
  {
    image: "images/slavers-bay.jpg",
    title: "Bay of Dragons",
    price: 30,
    location: {
      firstLine: "colonies",
      city: "Slavers Bay",
      code: 25241,
      country: "Essos",
    },
    contact: [123456, "slaversbay@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/tower-of-joy-in-dorne.jpg",
    title: "Tower of Joy",
    price: 25,
    location: {
      firstLine: "Joy",
      city: "Dorne",
      code: 3636,
      country: "Westeros",
    },
    contact: [123456, "joytower@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/winterfell.jpg",
    title: "Winterfell",
    price: 60,
    location: {
      firstLine: "House Stark",
      city: "Winterfell",
      code: 1,
      country: "Kingdom of the North",
    },
    contact: [123456, "winteriscoming@gmail.com"],
    isAvailable: true,
  },
];

//Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

// Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  showDetails(you.permissions, card, properties[i].price);
  propertyContainer.appendChild(card);
}

let count = 0;
function addReviews(array: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      reviewContainer.appendChild(card);
    }
    container.removeChild(button);
  }
}

button.addEventListener("click", () => addReviews(reviews));

let currentLocation: [string, string, string] = ["The Wall -", "Time: 01.32 -", "Temp: -35"];
footer.innerHTML =
  currentLocation[0] +
  " " +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  "°";

let yourMainProperty = new MainProperty('images/the_wall.jpg', 'The Wall', [
  {
    name: 'Jon',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '27.06.2022',
  },
]);

const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer?.appendChild(image);
