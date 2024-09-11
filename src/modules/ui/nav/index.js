import "./index.css"
import { plusCircle, moon, dropdown } from "../../../images/icons"
import avatar from "./../../../images/header__avatar.png";

const nav = document.createElement("nav")
nav.classList.add("nav")

const button = document.createElement("button")
button.classList.add("addTask")
const plusIcon = document.createElement("img")
plusIcon.src = plusCircle
button.appendChild(plusIcon)
button.innerHTML += "Add Task"

const moonImg = document.createElement("img")
moonImg.src = moon
moonImg.classList.add("moon")

const account = document.createElement("div")
account.classList.add("account")

const avatarImg = document.createElement("img")
avatarImg.src = avatar
avatarImg.classList.add("avatar")
account.innerHTML = `<span>Have a nice day, username</span>`

const dropdownImg = document.createElement("img")
dropdownImg.src = dropdown
dropdownImg.classList.add("dropdown")

account.appendChild(avatarImg)
account.appendChild(dropdownImg)

nav.appendChild(button)
nav.appendChild(moonImg)
nav.appendChild(account)

export default nav;
