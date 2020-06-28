window.addEventListener("load", () => {
    document.querySelector(".nav-mobile").classList.add("loaded4");
    document.querySelector(".container.mobile").classList.add("loaded2");
    document.querySelector("h1").classList.add("loaded");
    var x = document.querySelectorAll("p");
    for(let i = 0; i < x.length; i++){
        x[i].classList.add("loaded2");
    };
    var v = document.querySelectorAll(".nav-main");
    for(let i = 0; i < v.length; i++){
        v[i].classList.add("loaded3");
    };
});

let menuopen = false;
const menu = document.querySelector(".nav-mobile");
menu.addEventListener('click', () => {
    if(!menuopen) {
        menuopen = true;
        document.querySelector(".nav-main-mobile").classList.add("menuopen");
    } else {
        menuopen = false;
        document.querySelector(".nav-main-mobile").classList.remove("menuopen");
    }
});
