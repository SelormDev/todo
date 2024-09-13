import { clock, calendar } from "../../../../../images/icons"

const dateAndTime = document.createElement("div")
dateAndTime.classList.add("dateAndTime")
const heading = document.createElement("h2")
heading.innerHTML = "Date and Time"

const time = document.createElement("div")
time.classList.add("time")
const timeHeading = document.createElement("h3")
timeHeading.innerHTML = "In our time"
const timeValue = document.createElement("span")
timeValue.classList.add("timeValue")
setInterval(() => {
    timeValue.innerHTML = `<img src="${clock}" alt="clock icon" class="clock-icon"> ${new Date().toLocaleTimeString()}`
}, 1000)

time.appendChild(timeHeading)
time.appendChild(timeValue)

const date = document.createElement("div")
date.classList.add("date")
const dateHeading = document.createElement("h3")
dateHeading.innerHTML = "And today is"
const dateValue = document.createElement("span")
dateValue.classList.add("dateValue")
dateValue.innerHTML = `<img src="${calendar}" alt="calendar icon" class="calendar-icon"> ${new Date().toLocaleDateString()}`

date.appendChild(dateHeading)
date.appendChild(dateValue)

const timeAndDateContainer = document.createElement("div")
timeAndDateContainer.classList.add("timeAndDateContainer")
timeAndDateContainer.appendChild(time)
timeAndDateContainer.appendChild(date)

dateAndTime.appendChild(heading)
dateAndTime.appendChild(timeAndDateContainer)

export default dateAndTime;