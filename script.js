const btn = document.querySelector("button");
const title = document.querySelector("title");

btn.addEventListener("click", function() {
    btn.classList.toggle("btn-switch")
})

const bodyElement = document.querySelector("body");

bodyElement.addEventListener("click", function() {
    console.log(title.textContent)
    if (title.textContent === "Good Morning") {
        title.textContent = "Good Night";

    }else {title.textContent = "Good Morning";}
    bodyElement.classList.toggle("body-switch")
})

