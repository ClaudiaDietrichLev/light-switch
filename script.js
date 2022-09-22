const btn = document.querySelector("button");
const title = document.querySelector("title");

btn.addEventListener("click", function() {
    btn.classList.toggle("btn-switch")
})

const bodyElement = document.querySelector("body");

bodyElement.addEventListener("click", function() {
    title.textContent = "Good Night";
    bodyElement.classList.toggle("body-switch")
})

