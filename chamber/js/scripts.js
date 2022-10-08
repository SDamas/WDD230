function toggleMenu() {
    document.querySelector("#navigation").classList.toggle("open")
    document.querySelector("#pageNavigation").classList.toggle("open")
    document.querySelector("#socialNavigation").classList.toggle("open")
}

document.querySelector("#hamburgerMenu").addEventListener("click", toggleMenu)

function getDayName(weekDayNumber) {
    const dayNames = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"}

    const dayName = dayNames[weekDayNumber]
    return dayName
}

function getMonthName(monthNumber) {
    const months = {0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June",
    6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December"}

    const monthName = months[monthNumber]
    return monthName
}

//Define date variables
const date = new Date()
const dayNumber = date.getDate()
const dayName = getDayName(date.getDay())
const month = getMonthName(date.getMonth())
const year = date.getFullYear()

//Add current date to header
document.querySelector("#currentDate").textContent = `${dayName}, ${dayNumber} ${month} ${year}`

//Add year to footer
document.querySelector("#year").textContent = year

//Add last modified to footer
const lastModified = document.lastModified
document.querySelector("#lastModified").textContent = lastModified