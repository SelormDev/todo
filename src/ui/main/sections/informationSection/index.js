import "./index.css"
import dateAndTime from "./dateAndTime"
import observation from "./observation"

const informationSection = document.createElement("section")
informationSection.classList.add("information")

informationSection.appendChild(dateAndTime)
informationSection.appendChild(observation)

export default informationSection;

