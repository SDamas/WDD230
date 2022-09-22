const date = new Date()
const year = date.getFullYear()
const lastUpdated = document.lastModified

document.querySelector("#year").textContent = year
document.querySelector("#lastUpdated").textContent = lastUpdated