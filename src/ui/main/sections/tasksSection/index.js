import "./index.css"
import { currentTasks, completedTasks } from "./tasks"

const tasksSection = document.createElement("section")
tasksSection.classList.add("tasksSection")

const progress = document.createElement("div")
progress.classList.add("progress")

const heading = document.createElement("h2")
heading.innerHTML = "Progress of the week"

const container = document.createElement("div")
container.classList.add("progressContainer")

const tasks = document.createElement("div")
tasks.classList.add("tasks")
const tasksHeading = document.createElement("h3")
tasksHeading.innerHTML = currentTasks.length

const completed = document.createElement("div")
completed.classList.add("completed")
const completedHeading = document.createElement("h3")
completedHeading.innerHTML = completedTasks.length

const projects = document.createElement("div")
projects.classList.add("projects")
const projectsHeading = document.createElement("h3")
projectsHeading.innerHTML = "0"

tasks.appendChild(tasksHeading)
completed.appendChild(completedHeading)
projects.appendChild(projectsHeading)

container.appendChild(tasks)
container.appendChild(completed)
container.appendChild(projects)

progress.appendChild(heading)
progress.appendChild(container)

tasksSection.appendChild(progress)

export default tasksSection;

