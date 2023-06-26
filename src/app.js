/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = { spade: "♠", club: "♣", heart: "♥", diamond: "♦" };

function changeFace() {
  const cardFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let cardFace = cardFaces[Math.floor(Math.random() * cardFaces.length)];
  let suitsArray = Object.keys(suits);
  let suitClass = suitsArray[Math.floor(Math.random() * suitsArray.length)];
  let suitString = suits[suitClass];
  document.querySelector(".cardFace").innerHTML = cardFace;

  if (suitClass === "spade" || suitClass === "club") {
    document.querySelector(".cardFace").style.color = "black";
  } else if (suitClass === "heart" || suitClass === "diamond") {
    document.querySelector(".cardFace").style.color = "red";
  }

  document.querySelectorAll(".suit > p")[0].className = suitClass;
  document.querySelectorAll(".suit > p")[0].innerHTML = suitString;
  document.querySelectorAll(".suit > p")[1].className = suitClass;
  document.querySelectorAll(".suit > p")[1].innerHTML = suitString
    .split("")
    .reverse()
    .join("");
  console.log(suitString, suitClass, cardFace);
}

document.getElementById("newCard").addEventListener("click", function() {
  changeFace();
});
