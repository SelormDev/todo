const observationsObj = {
    title: 'Observation',
    content: 'This is the content of the observation section'
}

const observation = document.createElement("section")
observation.classList.add("observation")

const heading = document.createElement("h2")
heading.textContent = observationsObj.title

const content = document.createElement("p")
content.textContent = observationsObj.content

observation.appendChild(heading)
observation.appendChild(content)

export default observation;