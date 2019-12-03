// Your code goes here

//
const busImg = document.querySelector("img");

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(.9)";
    busImg.style.transition = "all 0.5s";
    busImg.style.border = "2px solid black";
})
busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)"
    busImg.style.border = "0";
});

//

const midImages = document.querySelectorAll(".img-content > img").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.1)";
        el.style.transition = "all 0.5s";
        el.style.border = "2px solid black";
    })
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)"
        el.style.border = "0";
    });
})

//

const destinationImg = document.querySelector(".content-destination > img");

destinationImg.addEventListener("mouseenter", () => {
    destinationImg.style.transform = "scale(.8)";
    destinationImg.style.transition = "all 0.5s";
    destinationImg.style.border = "2px solid black";
})
destinationImg.addEventListener("mouseleave", () => {
    destinationImg.style.transform = "scale(1)"
    destinationImg.style.border = "none"
});

//

const changeLogo = document.querySelector(".logo-heading");
changeLogo.addEventListener("click", () => {
    changeLogo.style.color = 'violet';
});

//

const changeNav = document.querySelector(".main-navigation");
changeNav.addEventListener("click", () => {
    changeNav.style.backgroundColor = 'lightgray';
});

//

const footer = document.querySelector(".footer");
footer.addEventListener("dblclick", () => {
    footer.style.backgroundColor = 'lightgray';
});

//

document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    event.target.style.opacity = "";
}, false);

//

function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.nav')
el.onwheel = zoom;

//

let textHover = document.querySelectorAll('.destination > p').forEach(el => {
    el.addEventListener("mouseover", function () {
        el.style.color = "lightblue";
        setTimeout(() => {
            el.style.color = "";
        }, 1000);
    }, false);
})

//

let linkHover = document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener("mouseover", function () {
        el.style.color = "blue";
    }, false);
})

//

