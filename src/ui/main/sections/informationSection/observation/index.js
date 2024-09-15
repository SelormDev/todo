const observationsArr = [{ content: "You created the most tasks on " }, { content: "You completed the most tasks on " }, { title: "Most active day", content: "You were most active on " }, { content: "You were most inactive on " }]

const observation = document.createElement("section")
observation.classList.add("observation", "card")

const heading = document.createElement("h3")
heading.textContent = "Observations"

const content = document.createElement("div")
content.classList.add("observation-content")

observationsArr.forEach(observation => {
    const observationElement = document.createElement("p")
    observationElement.textContent = observation.content
    content.appendChild(observationElement)
}
)



observation.appendChild(heading)
observation.appendChild(content)

export default observation;