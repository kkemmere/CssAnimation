// Kevin Kemmerer
// Happy Birthday stuff

const colors = [
    "color: blue",
    "color: red",
    "color: green",
    "color: AliceBlue",
    "color: Aqua",
    "color: BlueViolet",
    "color: Chartreuse",
    "color: CadetBlue",
    "color: Coral",
    "color: Crimson",
    "color: DarkGoldenRod",
    "color: DarkMagenta",
    "color: Gold",
    "color: HotPink",
    "color: IndianRed"

];

document.addEventListener("DOMContentLoaded", function randomColor() { 
    setInterval(function () {
        let color = colors[Math.floor(Math.random()*colors.length)];
        document.getElementById("headingB").style = color;
    }, 40);
  });



//document.getElementById("headingB").style = "color: blue";