import "./index.css"
import logo from "./../../images/logo.svg"

const body = document.getElementById("app")
body.classList.add("body")

const aside = document.createElement("div")
aside.classList.add("aside")
const main = document.createElement("div")
main.classList.add("main")

body.appendChild(aside)
body.appendChild(main)

const logoSection = document.createElement("div")
logoSection.classList.add("logoSection")
const logoImg = document.createElement("img")
logoImg.src = logo
const logoText = document.createElement("h1")
logoText.innerHTML = "Tasks <br /> Book"

logoSection.appendChild(logoImg)
logoSection.appendChild(logoText)

aside.appendChild(logoSection)


export default body;