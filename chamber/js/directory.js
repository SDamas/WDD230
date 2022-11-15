fetch('json/data.json')
  .then((response) => response.json())
  .then((jsonObject) => {
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
});

function displayCompanies(company) {
  // Create company card
  const card = document.createElement('div');
  card.className = "card";
  const logo = document.createElement('img');
  const adress = document.createElement('p');
  const phone = document.createElement('p');
  const website = document.createElement('a');

  // Add company info
  logo.setAttribute('src', company.logo);
  logo.setAttribute('alt', `${company.name} logo`)
  logo.setAttribute('loading', 'lazy');

  adress.textContent = company.adress;
  phone.textContent = company.phone;

  // Add website href and target
  website.textContent = company.website;
  website.setAttribute('href', website.textContent);
  website.setAttribute('target', "_blank");

  // Append info to card
  card.appendChild(logo);
  card.appendChild(adress);
  card.appendChild(phone);
  card.appendChild(website);

  // Append card to cards display section
  document.querySelector('div.display').appendChild(card);
};

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".display");

gridbutton.addEventListener("click", showGrid);

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  gridbutton.classList.remove("active")
  listbutton.classList.add("active");
	display.classList.add("list");
	display.classList.remove("grid");
}

function showGrid() {
  listbutton.classList.remove("active")
  gridbutton.classList.add("active")
	display.classList.add("grid");
	display.classList.remove("list");
}


//Define date variables
const date = new Date()
const year = date.getFullYear()


//Add year to footer
document.querySelector("#year").textContent = year

//Add last modified to footer
const lastModified = document.lastModified
document.querySelector("#lastModified").textContent = lastModified