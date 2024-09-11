import "./index.css"
import aside from "./aside"

const body = document.getElementById("app")
body.classList.add("body")


const main = document.createElement("div")
main.classList.add("main")

body.appendChild(aside)
body.appendChild(main)




export default body;