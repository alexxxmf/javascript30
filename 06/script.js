const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
  .then(function(response){
    return response.json();
  })
  .then(function(array){
    cities.push(...array)
  })

function findMatches(wordToMatch, cities){
  return cities.filter(function(place){
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);

  // https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch
  // Important thing to note if we opt for using or not
  // arrow functions and how it could affect to 'this'
  // 1. Arrow function: this will point to inputSearch
  // 2. Regular function: this will point to window
  // If we opt for the arrow functions change inputSearch.value to this.value
  const html = matchArray.map(function(place){
    const regex = new RegExp(inputSearch.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${inputSearch.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${inputSearch.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const inputSearch = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

inputSearch.addEventListener('change', displayMatches);
inputSearch.addEventListener('keyup', displayMatches);