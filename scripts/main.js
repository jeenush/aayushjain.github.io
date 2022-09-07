const img = document.querySelector("img");

img.addEventListener("click", () => {
    const src = img.getAttribute("src");
    if (src === "images/Mozilla_Firefox_logo_2013.svg") {
        img.setAttribute("src", "images/Firefox_logo,_2019.png");
    } else {
        img.setAttribute("src", "images/Mozilla_Firefox_logo_2013.svg");
    }
});

const btn = document.querySelector("button");
const heading = document.querySelector("h1");
let userName;
function setUserName() {
    userName = prompt("Enter Your Name : ");
    if (!userName) {
        setUserName();
    } else {
        heading.textContent = userName;
        localStorage.setItem("name", userName);
    }
}

userName = localStorage.getItem("name");
if (!userName) {
    setUserName();
} else {
    heading.textContent = userName;
}

btn.onclick = () => {
    setUserName();
}