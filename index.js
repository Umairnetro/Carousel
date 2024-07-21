let displayImages = [
  "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504037738139-b281049f760e?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1462774603919-1d8087e62cad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const image = document.querySelector("#image");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

image.setAttribute("src", displayImages[0]);
function showNext() {
  currentIndex = (currentIndex + 1) % displayImages.length;
  image.setAttribute("src", displayImages[currentIndex]);
}

function showprevious() {
  currentIndex =
    (currentIndex - 1 + displayImages.length) % displayImages.length;
  image.setAttribute("src", displayImages[currentIndex]);
}

previousBtn.addEventListener("click", showprevious);
nextBtn.addEventListener("click", showNext);