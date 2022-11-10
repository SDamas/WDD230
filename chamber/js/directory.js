fetch('../json/data.json')
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
    website.textContent = company.website;

    // Append info to card
    card.appendChild(logo);
    card.appendChild(adress);
    card.appendChild(phone);
    card.appendChild(website);

    // Append card to cards display section
    document.querySelector('div.cards').appendChild(card);
}

    