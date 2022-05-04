var dj = document.getElementById("letUsDj")

dj.style.fontSize = '50px';
dj.style.textAlign = 'center';
dj.style.border = "5px solid black";
dj.style.backgroundColor = "tan";

var innerbox = document.getElementById("innerBox")
innerbox.style.display = "flex";
innerbox.style.alignItems = "center";
innerbox.style.justifyContent = "space-around";


document.addEventListener("keydown", e => {
    if (e.key === 'b') {
        blue.style.backgroundColor = "blue"
    } else if (e.key === 'r') {
        red.style.backgroundColor = "red"
    } else if (e.key === 'g') {
        green.style.backgroundColor = "green"
    } else if (e.key === 'y') {
        yellow.style.backgroundColor = "yellow"
    } else if (e.key === 'o') {
        orange.style.backgroundColor = "orange"
    }
})

var blue = document.getElementById("blue")
blue.style.padding = "30px"
blue.style.height = "30px"
blue.style.border = "10px solid black"
blue.style.margin = "15px"
blue.addEventListener("mouseenter", function (event) {
    event.target.style.backgroundColor = "blue";
    setTimeout(function () {
        event.target.style.backgroundColor = "";
    }, 1000);
}, false);
blue.addEventListener("keydown", function (event) {
    if (event.key == 66) {
        blue.style.backgroundColor = "blue";
    }
})

var red = document.getElementById("red")
red.style.padding = "30px"
red.style.height = "30px"
red.style.border = "10px solid black"
red.style.margin = "15px"
red.addEventListener('mousedown', function (event) {
    setTimeout(function () {
        event.target.style.backgroundColor = "red";
    }, 500);
}, false);

var yellow = document.getElementById("yellow")
yellow.style.padding = "30px"
yellow.style.height = "30px"
yellow.style.border = "10px solid black"
yellow.style.margin = "15px"
yellow.addEventListener("mouseup", function (event) {
    event.target.style.backgroundColor = "yellow";
    setTimeout(function () {
        event.target.backgroundColor = "";
    }, 1000);
}, false);

var green = document.getElementById("green")
green.style.padding = "30px"
green.style.height = "30px"
green.style.border = "10px solid black"
green.style.margin = "15px"
green.addEventListener("dblclick", function (event) {
    event.target.style.backgroundColor = "green";
    setTimeout(function (event) {
        event.target.style.backgroundColor = "";
    }, 700);
}, false);

var orange = document.getElementById("orange")
orange.style.padding = "30px"
orange.style.height = "30px"
orange.style.border = "10px solid black"
orange.style.margin = "15px"
orange.addEventListener("wheel", function (event) {
    event.target.style.backgroundColor = "orange";
    setTimeout(function (event) {
        event.target.style.backgroundColor = "";
    }, 700);
}, false);

