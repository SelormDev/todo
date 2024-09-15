import "./index.css"
import informationSection from "./sections/informationSection"
import tasksSection from "./sections/tasksSection"

const main = document.createElement("div")
main.classList.add("main")

main.appendChild(tasksSection)
main.appendChild(informationSection)






export default main;