// REST Countries API URL
const apiURL = 'https://restcountries.com/v3.1/all';

// Genre list (you can add more genres here)
const genres = ["⁠Contemporary/literary fiction", "⁠Classic fiction ", "Setting Genre Fiction (sci fi, fantasy, horror, historical)","⁠Character Genre Fiction (romance, crime)"];

// Get the elements
const randomizeBtn = document.getElementById('randomize-btn');
const result = document.getElementById('result');

// Function to fetch countries and randomize
const getRandomCountryAndGenre = async () => {
    try {
        // Fetch countries data from the REST Countries API
        const response = await fetch(apiURL);
        const countries = await response.json();

        // Select a random country
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        const countryName = randomCountry.name.common;

        // Select a random genre
        const randomGenre = genres[Math.floor(Math.random() * genres.length)];

        // Display result
        result.innerText = `Country: ${countryName} | Genre: ${randomGenre}`;
    } catch (error) {
        result.innerText = 'Error fetching country data';
        console.error('Error:', error);
    }
};

// Event listener for button click
randomizeBtn.addEventListener('click', getRandomCountryAndGenre);
