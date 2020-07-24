/* eslint-disable */
import "../assets/img/4geeks.ico";
import "../assets/img/rigo-baby.jpg";
import "../style/index.scss";
//import 'breathecode-dom'; //DOM override to make JS easier to use

let color = ["purple", "green", "pink", "yellow", "blue"];

let balloonCount = 0;

function pop(event) {
  var id = event.target.id;
  document.getElementById(id).classList.add("invisible");
  balloonCount -= 1;
  document.querySelector("#add").innerHTML =
    "Pop All " + balloonCount + " Balloons!";
}

function randomColor() {
  return color[Math.floor(Math.random() * color.length)];
}

window.onload = function() {
  parent = document.querySelector(".container");

  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    row.classList.add("classRow");
    parent.appendChild(row);

    for (let j = 0; j < 5; j++) {
      let cell = document.createElement("div");
      balloonCount += 1;
      cell.addEventListener("click", pop);
      cell.classList.add("classCell");
      cell.classList.add(randomColor());
      cell.setAttribute("id", j.toString() + i.toString());
      row.appendChild(cell);
    }
  }
  document.querySelector("#add").innerHTML =
    "Pop All " + balloonCount + " Balloons!";
};
