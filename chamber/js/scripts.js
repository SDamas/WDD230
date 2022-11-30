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

//Add banner to header
function displayBanner(dayName) {

    //Use this line to test the function: || dayName === "Current day name to test"
    if (dayName === "Monday" || dayName === "Tuesday") {
        const banner = document.querySelector("#banner")
        banner.className = "display"
        banner.innerHTML = "<p>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>"
    } else {
        const banner = document.querySelector("#banner")
        banner.classList.toggle("display")
    }
}

displayBanner(dayName)

//Add current date to header
document.querySelector("#currentDate").textContent = `${dayName}, ${dayNumber} ${month} ${year}`

//Add year to footer
document.querySelector("#year").textContent = year

//Add last modified to footer
const lastModified = document.lastModified
document.querySelector("#lastModified").textContent = lastModified


/* The next lines, from 59 to 128, are code to
display 3 random spotlight companies from data.json*/
const companiesData = "json/data.json";

async function displaySpotlightCompanies() {
    // Get a list of all gold and silver membership companies
    const companies = await getSilverAndGoldCompanies();
    // Generate 3 random numbers which represent the companies' index
    const companiesChosen = pickThreeCompanies();

    // Get first company
    const company1 = companies[companiesChosen[0]];
    // Get second company
    const company2 = companies[companiesChosen[1]];
    // Get third company
    const company3 = companies[companiesChosen[2]];

    /* Loop that runs three times, and for each, current spotlight company html elements 
    will be from one of the three companies goten, based on current variable i value.
    i = a value from 1 to 3 
    */
    for (let i = 1; i < 4; i++) {
        let company;
        switch (i) {
            case 1:
                company = company1;
                break;
            case 2:
                company = company2;
                break;
            default:
                company = company3;
        }

        // Get spotlight element
        const spotlight = document.querySelector(`#spotlight${i}`);
        // assign h2
        spotlight.children[0].textContent = company.name
        // set img src
        spotlight.children[1].children[0].setAttribute('src', company.logo)
        // assign phone
        spotlight.children[3].textContent = company.phone
        // assign website
        spotlight.children[4].children[0].setAttribute('href', company.website)
    }
}
displaySpotlightCompanies();

async function getSilverAndGoldCompanies() {
    /* This function fetches data from a json object containing the companies info.
    After the fetch, it filters the companies that have either Gold or Silver in their membershiplevel.
    Returns silver and gold companies.
    */
    const request = await fetch(companiesData);

    if (request.ok) {
      const response = await request.json();
      const companies = await response["companies"];

      let silverAndGoldCompanies = [];
      for (const company of companies) {
        if (company.membershiplevel === "Gold" || company.membershiplevel === "Silver") {
            silverAndGoldCompanies.push(company)
        }
      }
      return silverAndGoldCompanies;
    }
};

function pickThreeCompanies() {
    /* This function generates three random numbers which represent "companies",
    that will be used later to get 3 different companies from a given list.
    These numbers will be the indexes.
     */
    let companiesChosen = new Map();
    for (let i = 0; i < 3; i++) {
        while (companiesChosen.size != 3) {
            const number = Math.floor(Math.random() * 7);
            companiesChosen.set(number, number);
        } 
    }

    return [...companiesChosen.keys()];
}
getSilverAndGoldCompanies();

