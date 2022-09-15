let date = new Date();
let year = date.getFullYear();

/* adding current year into footer */
document.getElementById("year").innerText = year

/* adding when page was last modified */
document.getElementById("lastModified").innerText = document.lastModified