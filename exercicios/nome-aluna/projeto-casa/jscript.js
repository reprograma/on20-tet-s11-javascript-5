const container = document.getElementById('lista')
const card = document.getElementById('card')


async function requisicao(){
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon')
        const dados = await response.json()
        let renderizar = (digimons) => digimons.forEach((digimon) => container.innerHTML += `<input class="buttons" type="submit" value=${digimon.name} onclick="pegarDigimon(this.value)">`)

        renderizar(dados)

    } catch (erro) {
        console.log("Mensagem de erro capturada: " + erro)
    }
}


async function pegarDigimon(digimon){
    try {
      const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);
      const digimonData = await response.json()
      createCard(digimonData[0]);
    }
    catch(err) {
      console.error("Capturei um erro: ", err)
    }
  }



function createCard(digimon) {
    return `
    <img class="" src=${digimon.img}>
    <h3 class="">Name: ${digimon.name}</h3>
    <p class="">Level: ${digimon.level}</p>
  
    `
  } 

requisicao()
