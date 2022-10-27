const main = document.getElementById('main');
main.insertAdjacentHTML('beforebegin', '<h1> Digimons </h1>');
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
    </div>
`
}
async function showCards(e) {

    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
        const dado = await response.json()
        dado.forEach(digimon => {

            if (e === digimon.name){
                const div = document.createElement('div')
                div.innerHTML = createCards(digimon)
                main.appendChild(div)
            }          
          
        })
    } catch (err) {
        console.error('Capturei um erro: ', err);
    }
}
async function getDigimons() {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
        const dado = await response.json()       
        dado.forEach( digimon => {
            const button = document.createElement('button')
            button.innerText = digimon.name
            main.appendChild(button)
            button.addEventListener('click', ()=> showCards(digimon.name))

        });
    }
    catch (err) {
        console.error("Capiturei um erro: ", err)
    }
}
getDigimons()







// async function getDigimon() {
//     try {
//       const resposta = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
//       console.log(resposta)
//       const dados = await resposta.json()
//       console.log(dados)
//       const imagem = document.createElement('img')
//       imagem.setAttribute('src', dados.message)
//       container.appendChild(imagem)
//     }
//     catch(err) {
//       console.error('Capturei um erro:', err)
//     }
//   }