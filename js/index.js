// Your code goes here

// 1
const busImg = document.querySelector("img");

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(.9)";
    busImg.style.transition = "all 0.5s";
})
busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)"
});

// 2

const midImages = document.querySelectorAll(".img-content > img").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.1)";
        el.style.transition = "all 0.5s";
    })
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)"
    });
})

// 3

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

// 4

const changeLogo = document.querySelector(".logo-heading");
changeLogo.addEventListener("click", () => {
    changeLogo.style.color = 'violet';
});

// 5

const changeNav = document.querySelector(".main-navigation");
changeNav.addEventListener("click", () => {
    changeNav.style.backgroundColor = 'lightgray';
});

// 6

const footer = document.querySelector(".footer");
footer.addEventListener("dblclick", () => {
    footer.style.backgroundColor = 'lightgray';
});

// 7

