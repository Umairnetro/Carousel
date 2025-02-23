const loader = document.querySelector("#loader");

// DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
    loader.style.display = "none";
});

let displayImages = [
  "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504037738139-b281049f760e?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1466837838619-c8f5b8f0c166?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1452717602770-b78d1b2115e1?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let placeNames = [
  "Byodo-In Temple",
  "Catedral de la Inmaculada Concepción",
  "Germany Small Town",
  "Flatiron Building",
  "Epcot",
  "Natural History Museum",
];

const image = document.querySelector("#image");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const heading = document.querySelector("h1");

let currentIndex = 0;

image.setAttribute("src", displayImages[0]);
heading.innerHTML = placeNames[0];
function showNext() {
  currentIndex = (currentIndex + 1) % displayImages.length;
  image.classList.add("fade");
  heading.classList.add("heading-fade");
  setTimeout(() => {
    image.setAttribute("src", displayImages[currentIndex]);
    image.classList.remove("fade");
    heading.classList.remove("heading-fade");
    heading.innerHTML = placeNames[currentIndex];
  }, 400);
}

function showprevious() {
  currentIndex =
    (currentIndex - 1 + displayImages.length) % displayImages.length;
  image.classList.add("fade");
  heading.classList.add("heading-fade");
  setTimeout(() => {
    image.setAttribute("src", displayImages[currentIndex]);
    image.classList.remove("fade");
    heading.innerHTML = placeNames[currentIndex];
    heading.classList.remove("heading-fade");
  }, 600);
}

previousBtn.addEventListener("click", showprevious);
nextBtn.addEventListener("click", showNext);
