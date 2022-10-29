function toggleMenu() {
    document.querySelector("#navigation").classList.toggle("open")
    document.querySelector("#pageNavigation").classList.toggle("open")
    document.querySelector("#socialNavigation").classList.toggle("open")
}

document.querySelector("#hamburgerMenu").addEventListener("click", toggleMenu)

// Handle Observer
const imagesToLoad = document.querySelectorAll("img[data-src]")

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"))
    image.onload = () => {
        image.removeAttribute("data-src")
    };
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            };
        });
    });
    imagesToLoad.forEach((image) => {
        observer.observe(image)
    });
} else {
    imagesToLoad.forEach((image) => {
        loadImages(image)
    });
}
//Define date variables
const date = new Date()
const today = date.getDate()
const year = date.getFullYear()
//Add year to footer
document.querySelector("#year").textContent = year

//Add last modified to footer
const lastModified = document.lastModified
document.querySelector("#lastModified").textContent = lastModified

// Handle localStorages
// Save Current Visit day
localStorage.setItem("visitDay", today)
// Calculate difference between last visit and today
const daysSinceLastVisit =  localStorage.getItem("visitDay") - localStorage.getItem("lastVisit")
// Get element to display the difference
const lastVisitDisplay = document.querySelector("#current-visit")

if (daysSinceLastVisit != 0) {
    lastVisitDisplay.textContent = `It is great having you here again! We we missed you for the last ${daysSinceLastVisit} days`
} else {
    lastVisitDisplay.textContent = `Welcome to Campinas Chamber, we're thrilled for receiving you for the first time :)`
}

// Store today's date to be used as last visit for the next time website is open
const lastDayVisited = date.getDate()
localStorage.setItem("lastVisit", lastDayVisited)
