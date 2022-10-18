const reviewTotalDisplay = document.querySelector("#reviews") as HTMLDivElement;
const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLDivElement;
const userNameDisplay = document.querySelector("#user") as HTMLDivElement;

import { LoyaltyUser, Permissions } from "./enums";
import { Review } from "./interfaces";

export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    value +
    "review" +
    makeMultiple(value) +
    " | last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

export function showDetails(
  value: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (value) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + " golds/night";
    element.appendChild(priceDisplay);
  }
}

export function getTopTwoReviews(reviews: Review[]) {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
