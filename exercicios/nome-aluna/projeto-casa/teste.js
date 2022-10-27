const digimonName = document.querySelector('.digimon-name')
const digimonNumber = document.querySelector('.digimon-number')
const digimonImage = document.querySelector('.digimon-image')

const form = document.querySelector('.form')
const input = document.querySelector('.input-search')
// const buttonPrev = document.querySelector('.btn-prev');
// const buttonNext = document.querySelector('.btn-next');

// let searchDigimon = 1

const fetchDigimon = async (digimon) => {
    const APIResponse = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);


    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderDigimon = async (digimon) => {

    digimonName.innerHTML = 'Loading...';
    digimonNumber.innerHTML = '';

    const data = await fetchDigimon(digimon);


    if (data) {
        digimonImage.style.display = 'block';
        digimonName.innerHTML = data[0].name;
        digimonNumber.innerHTML = data[0].level;
        digimonImage.src = data[0].img;
        input.value = '';
        // searchDigimon = data[0].name;

    } else {
        digimonImage.style.display = 'none';
        digimonName.innerHTML = 'Not found :c';
        digimonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderDigimon(input.value.toLowerCase());

});

// buttonPrev.addEventListener('click', () => {
//     if (searchPokemon > 1) {
//         searchPokemon -= 1;
//         renderPokemon(searchPokemon)
//     }

// });

// buttonNext.addEventListener('click', () => {
//     searchPokemon += 1;
//     renderPokemon(searchPokemon)

// });

// renderDigimon(searchDigimon)
