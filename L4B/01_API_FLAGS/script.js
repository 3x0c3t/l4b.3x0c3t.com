document.addEventListener('DOMContentLoaded', () => {
  const flagsContainer = document.getElementById('flags-container');

  // Fonction pour récupérer les drapeaux via une API
  async function fetchFlags() {
      try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          const countries = await response.json();

          countries.forEach(country => {
              if (country.flags && country.flags.png) {
                  const flagContainer = document.createElement('div');
                  flagContainer.classList.add('flag-container');

                  const flagImg = document.createElement('img');
                  flagImg.src = country.flags.png;
                  flagImg.alt = `${country.name.common} flag`;
                  flagImg.classList.add('flag');

                  const countryName = document.createElement('p');
                  countryName.textContent = country.name.common;
                  countryName.classList.add('country-name');

                  flagContainer.appendChild(flagImg);
                  flagContainer.appendChild(countryName);
                  flagsContainer.appendChild(flagContainer);
              }
          });
      } catch (error) {
          console.error('Erreur lors de la récupération des drapeaux:', error);
      }
  }

  // Appel de la fonction pour récupérer les drapeaux
  fetchFlags();
});
