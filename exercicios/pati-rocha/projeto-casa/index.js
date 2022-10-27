const main = document.getElementById('main');
main.insertAdjacentHTML('beforebegin','<h1> Digimons </h1>' );
// beforebegin - antes do elemento
// afterbegin - Dentro do elemento, antes de seu primeiro filho (childNode)
// beforeend - Dentro do elemento, após seu último filho (childNode) 
// afterend - Após o elemento.

async function getDigimons() {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
        const dado = await response.json()
        dado.forEach(digimon => {
            const button = document.createElement('button')
            button.innerText = digimon.name
            console.log(button);
            main.appendChild(button)            
        });            
    } catch (err) {
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