// TODO:
// - COLOCAR O NOME DE TODOS DIGIMONS NA TELA ok
// - CRIAR FUNÇÃO PARA MOSTRAR CARDS  ok
// - ADICIONAR EVENTO NO BOTÃO ok

const secButtons = document.getElementById('sec-buttons');
const secCards = document.getElementById('sec-cards')
const main = document.querySelector('main')
main.insertAdjacentHTML('beforebegin', '<h1>Escolha seu Digimon... </h1>');
// beforebegin - antes do elemento
// afterbegin - Dentro do elemento, antes de seu primeiro filho (childNode)
// beforeend - Dentro do elemento, após seu último filho (childNode) 
// afterend - Após o elemento.

function createCards(elemento) {
    return `
        <div class="card">
        <img class="img-card"src= ${elemento.img} alt="imagem do digimon">
        <h2 class= "title">${elemento.name}</h2>
        <h3 class= "subtitle">${elemento.level}</h3>
        </div> `
}
async function getDigimons() {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
        const dado = await response.json()
        dado.map((digimon) => {
            const button = document.createElement('button');
            button.innerText = digimon.name;
            secButtons.appendChild(button);

            button.addEventListener('click', () => {
                dado.map((digimon) => {
                    if (button.innerText === digimon.name) {
                        secCards.innerHTML = createCards(digimon);
                    }
                });
            });
            //button.addEventListener('click', () => showCards(digimon.name))--->FAZ PARTE DA 1ª SOLUÇÃO
        });
    }
    catch (err) {
        console.error("Capiturei um erro: ", err)
    }
}
getDigimons()

//1ª SOLUÇÃO:
// async function showCards(digimonName) {
//     try {
//         const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
//         const dado = await response.json()
//         dado.forEach(item => {
//             if (digimonName === item.name) {
//                 secCards.innerHTML = createCards(item)
//             }})
//     } catch (err) {
//         console.error('Capturei um erro: ', err);
//     }
// }


