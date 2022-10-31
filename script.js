let shareIcon1 = document.getElementsByClassName("share-icon")[0]; // mobile share icon
let shareIcon2 = document.getElementsByClassName("share-icon")[1]; //desktop share icon 
let shareIcon3 = document.getElementsByClassName("share-icon")[2]; // mobile share icon in active state

shareIcon1.addEventListener("click", shareIcon1Event);

function shareIcon1Event() {
    document.querySelectorAll("figure")[0].classList.add("hidden");
    document.getElementById("share-div").style.display = "flex";
    document.getElementById("share-div").style.padding = "1em 0";
    document.getElementsByClassName("profile-sect")[0].style.paddingBottom = "0";
    document.getElementsByClassName("profile-sect")[0].style.backgroundColor = "hsl(217, 19%, 35%)";
    shareIcon3.style.backgroundColor = "hsl(212, 23%, 69%)";
}

shareIcon3.addEventListener("click", shareIcon3Event);

function shareIcon3Event() {
    document.querySelectorAll("figure")[0].classList.remove("hidden");
    document.getElementById("share-div").style.display = "none";
    document.getElementsByClassName("profile-sect")[0].style.paddingBottom = "1em";
    document.getElementsByClassName("profile-sect")[0].style.backgroundColor = "white";
}

shareIcon2.addEventListener("click", shareIcon2Event)

function shareIcon2Event() {
    const popUp = document.getElementsByClassName("pop-up")[0];
    popUp.classList.toggle("show");
}

