import "./index.css"
import { currentTasks, completedTasks } from "./tasks"
import projects from "./projects"
import { createProject } from "../../../../modules/createProject"

const tasksSection = document.createElement("section")
tasksSection.classList.add("tasksSection")

const progress = document.createElement("div")
progress.classList.add("progress", "card")

const heading = document.createElement("h3")
heading.innerHTML = "Progress of the week"

const container = document.createElement("div")
container.classList.add("progressContainer")

const tasks = document.createElement("div")
tasks.classList.add("tasks")
const tasksHeading = document.createElement("h4")
tasksHeading.textContent = "Current Tasks"
const tasksValue = document.createElement("p")
tasksValue.textContent = currentTasks.length

const completed = document.createElement("div")
completed.classList.add("completed")
const completedHeading = document.createElement("h4")
completedHeading.textContent = "Completed Tasks"
const completedValue = document.createElement("p")
completedValue.textContent = completedTasks.length

const newProject = createProject("New Project")
projects.push(newProject)
// console.log(createProject)

const projectsCount = document.createElement("div")
projectsCount.classList.add("projects-count")
const projectsHeading = document.createElement("h4")
projectsHeading.textContent = "Projects"
const projectsValue = document.createElement("p")
projectsValue.textContent = projects.length


tasks.appendChild(tasksHeading)
tasks.appendChild(tasksValue)
completed.appendChild(completedHeading)
completed.appendChild(completedValue)
projectsCount.appendChild(projectsHeading)
projectsCount.appendChild(projectsValue)

container.appendChild(tasks)
container.appendChild(completed)
container.appendChild(projectsCount)

progress.appendChild(heading)
progress.appendChild(container)

tasksSection.appendChild(progress)

export default tasksSection;

