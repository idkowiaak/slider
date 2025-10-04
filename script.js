const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const image = document.querySelector(".right-side img");

const images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.webp",
  "img/image4.webp",
  "img/image5.jpg",
  "img/image6.jpg",
];

let currentIndex = 0;

function showImage(index) {
  image.style.opacity = 0;

  setTimeout(() => {
    image.src = images[index];
    image.style.opacity = 1;
  }, 300);
}

rightArrow.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  showImage(currentIndex);
});

leftArrow.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = images.length - 1;
  showImage(currentIndex);
});
