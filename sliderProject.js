const body = document.querySelector("body");
const h1 = document.querySelectorAll("h1");

body.style.backgroundColor = "#323232";

h1.forEach((item) => {
  item.style.color = "green";
});

const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".image");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");

image.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

let counter = 0;

const slideImage = () => {
  image.forEach((img) => {
    img.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const autoPlayLeft = () => {
  if (counter <= 0) {
    counter = image.length - 1;
  } else {
    counter--;
  }
  slideImage();
};

const autoPlayRight = () => {
  if (counter >= image.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImage();
};

// setInterval(() => {
//   autoPlayRight();
// }, 3000);

btnLeft.addEventListener("click", () => {
  autoPlayLeft();
});

btnRight.addEventListener("click", () => {
  autoPlayRight();
});
