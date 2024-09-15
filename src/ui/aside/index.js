import "./index.css"
import logo from "./../../images/logo.svg"
import { briefcase, home, users, zap } from "./../../images/icons"

const aside = document.createElement("div")
aside.classList.add("aside")

const logoSection = document.createElement("div")
logoSection.classList.add("logoSection")

const logoImg = document.createElement("img")
logoImg.src = logo

const logoText = document.createElement("h1")
logoText.innerHTML = "Tasks <br /> Book"

logoSection.appendChild(logoImg)
logoSection.appendChild(logoText)

aside.appendChild(logoSection)

const categories = document.createElement("div")
categories.classList.add("categories")

const categoriesTitle = document.createElement("h2")
categoriesTitle.textContent = "Categories"

const catgoriesArray = [{ name: "Home", icon: `${home}` }, { name: "Tasks", icon: `${users}` }, { name: "Projects", icon: `${briefcase}` }, { name: "Notes", icon: `${zap}` }]

const categoriesList = document.createElement("ul")
catgoriesArray.forEach(category => {
    const categoryItem = document.createElement("li")
    categoryItem.innerHTML = `<a href="#"><img src="${category.icon}"> ${category.name}</a>`
    categoriesList.appendChild(categoryItem)
})
categories.appendChild(categoriesTitle)
categories.appendChild(categoriesList)

aside.appendChild(categories)

export default aside;