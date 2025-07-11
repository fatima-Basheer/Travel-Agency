const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menus.classList.add("display");
});

closeBtn.addEventListener("click", () => {
  menus.classList.remove("display");
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const destinations = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const input = document.querySelector(".form-control");

// Create a dropdown container
const suggestionsBox = document.createElement("div");
suggestionsBox.style.position = "absolute";
suggestionsBox.style.backgroundColor = "#fff";
suggestionsBox.style.border = "1px solid #ccc";
suggestionsBox.style.zIndex = "1000";
suggestionsBox.style.width = input.offsetWidth + "px";
suggestionsBox.style.maxHeight = "150px";
suggestionsBox.style.overflowY = "auto";
suggestionsBox.style.display = "none";
suggestionsBox.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
document.body.appendChild(suggestionsBox);

// Position the suggestion box below the input
function setPosition() {
  const rect = input.getBoundingClientRect();
  suggestionsBox.style.top = `${rect.bottom + window.scrollY}px`;
  suggestionsBox.style.left = `${rect.left + window.scrollX}px`;
  suggestionsBox.style.width = `${rect.width}px`;
}
setPosition();
window.addEventListener("resize", setPosition);
window.addEventListener("scroll", setPosition);

// Show suggestions when typing
input.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();
  suggestionsBox.innerHTML = "";

  if (!query) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = destinations.filter((dest) =>
    dest.toLowerCase().startsWith(query)
  );

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  matches.forEach((dest) => {
    const item = document.createElement("div");
    item.textContent = dest;
    item.style.padding = "8px";
    item.style.cursor = "pointer";
    item.addEventListener(
      "mouseenter",
      () => (item.style.backgroundColor = "#f0f0f0")
    );
    item.addEventListener(
      "mouseleave",
      () => (item.style.backgroundColor = "#fff")
    );

    item.addEventListener("mousedown", (e) => {
      e.preventDefault();
      input.value = dest;
      suggestionsBox.style.display = "none";
    });

    suggestionsBox.appendChild(item);
  });

  suggestionsBox.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (!suggestionsBox.contains(e.target) && e.target !== input) {
    suggestionsBox.style.display = "none";
  }
});

const countersEl = document.querySelectorAll(".numbers");

countersEl.forEach((counter) => {
  counter.textContent = 0;

  function incrementCounters() {
    let currentNum = +counter.textContent;
    const dataCell = +counter.getAttribute("data-cell");
    const increment = dataCell / 25;

    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCell) {
      counter.textContent = currentNum;
      setTimeout(incrementCounters, 70);
    } else {
      counter.textContent = dataCell;

      setTimeout(() => {
        counter.textContent = 0;
        incrementCounters();
      }, 0);
    }
  }

  incrementCounters();
});

function submitTour() {
  const header = document.getElementsByTagName("header");
  const destinationInput = document.getElementById("destination");
  const dateInput = document.getElementById("date");
  const durationInput = document.getElementById("duration");

  const destination = destinationInput.value.trim();
  const date = dateInput.value;
  const duration = durationInput.value;

  if (!destination || !date || !duration) {
    showModal("Please fill out all fields before searching.");
    return;
  }

  if (header.length > 0) {
    header[0].style.display = "none";
  }

  const randomPrice = Math.floor(Math.random() * 1000) + 1000;

  const resultBox = document.getElementById("result-box");
  const formWrapper = document.querySelector(".form-wrapper");

  const message = `
    <span class="close-icon" onclick="cancelTour()">X</span>
    <h1 class="welMsg">Welcome to Travair</h1>   
    <h2>Your Tour Details:</h2>
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Duration:</strong> ${duration}</p>
    <p><strong>Total Price:</strong> Rs.${randomPrice} </p>
    <p style="margin-top:15px; color:#155724;"></p>
    <p class="modelPara">Click the button to get ready for an unforgettable adventure!</p>
    <button class="primary-btn" id="final-submit-btn">Submit</button>
  `;

  resultBox.innerHTML = message;
  resultBox.style.display = "block";

  document
    .getElementById("final-submit-btn")
    .addEventListener("click", finalSubmit);

  destinationInput.value = "";
  dateInput.value = "";
  durationInput.selectedIndex = 0;
}

function finalSubmit() {
  document.getElementById("result-box").style.display = "none";
  document.querySelector(".form-wrapper").classList.remove("blur-background");

  const header = document.getElementsByTagName("header");
  if (header.length > 0) {
    header[0].style.display = "block";
  }

  document.getElementById("location-search").style.display = "block";

  alert("Thank you! Your tour has been submitted successfully.");
}
