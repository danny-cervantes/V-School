// PRELIMINARIES
const h1 = document.createElement("h1");
h1.textContent = "Javascript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("h1");
subTitle.innerHTML = '<span class="name">Danny Cervantes</span> wrote this JavaScript';
document.getElementById("header").appendChild(subTitle);
subTitle.style.display = "flex";
subTitle.style.alignItems = "center";
subTitle.style.flexDirection = "column";

//BRONZE
const messages = document.getElementsByClassName("message");


messages[0].textContent = "Hey dad, whats up?";
messages[1].textContent = "Gas prices.";
messages[2].textContent = "Dad seriously, what are you doing?";
messages[3].textContent = "Asking Jesus to lower the gas price.";

const form = document.getElementById("form")
form.style.display = "flex";
form.style.alignItems = "right";
form.style.justifyContent = "right"

const clear = document.getElementById("clearButton")
clear.addEventListener("click", function () {
    // messages[0].textContent = "";
    // messages[1].textContent = "";
    // messages[2].textContent = "";
    // messages[3].textContent = "";

    // messages[0].remove();
    // messages[1].remove();
    // messages[2].remove();
    // messages[3].remove();

    document.getElementById("message1").remove();
    document.getElementById("message2").remove();
    document.getElementById("message3").remove();
    document.getElementById("message4").remove();
});

// SLIVER
Element.classList.toggle("theme-two")
for (let i = 0; i < messages.length; i++) {
    messages[i].classList.toggle("theme-two");
}