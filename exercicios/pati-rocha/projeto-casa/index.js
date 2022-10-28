const secButtons = document.getElementById('sec-buttons');
const secCards = document.getElementById('sec-cards')
const main = document.querySelector('main')
main.insertAdjacentHTML('beforebegin', '<h1>Escolha seu Digimon... </h1>');
// beforebegin - antes do elemento
// afterbegin - Dentro do elemento, antes de seu primeiro filho (childNode)
// beforeend - Dentro do elemento, após seu último filho (childNode) 
// afterend - Após o elemento.

function createCards(digimon) {
    return `
        <div class="card">
        <img class="img-card"src= ${digimon.img} alt="imagem do digimon">
        <h2 class= "title">${digimon.name}</h2>
        <h3 class= "subtitle">${digimon.level}</h3>
        </div> `
}
async function showCards(name) {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
        const dado = await response.json()
        dado.forEach(digimon => {
            if (name === digimon.name) {
                secCards.innerHTML = createCards(digimon)
            }})
    } catch (err) {
        console.error('Capturei um erro: ', err);
    }
}
async function getDigimons() {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
        const dado = await response.json()
        dado.forEach(digimon => {
            const button = document.createElement('button')
            button.innerText = digimon.name
            secButtons.appendChild(button)
            button.addEventListener('click', () => showCards(digimon.name))

        });
    }
    catch (err) {
        console.error("Capiturei um erro: ", err)
    }
}
getDigimons()




