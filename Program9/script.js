let Images = ["image1.jpeg", "image2.jpg", "image3.jpg"]
let currentIndex = 0;

let display = document.getElementById("displaying")
let prevBTN = document.getElementById("prev");
let nextBTN = document.getElementById("next");

nextBTN.addEventListener("click", () => {

    currentIndex = (currentIndex + 1) % Images.length;
    display.src = Images[currentIndex];
})

prevBTN.addEventListener("click", () => {

    currentIndex = (currentIndex - 1 + Images.length) % Images.length;
    display.src = Images[currentIndex];
})

setInterval(() => {
    currentIndex = (currentIndex + 1) % Images.length;
    display.src = Images[currentIndex];
}, 2000)