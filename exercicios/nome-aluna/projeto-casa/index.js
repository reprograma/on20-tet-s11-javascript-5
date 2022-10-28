// to do - primeiro criar html
// chamar html no js
// puxar api
// criar botões
// adicionar evento aos botões
// adicionar função dentro do evento


const container = document.querySelector('#demo')
const container2 = document.querySelector('#cards')


function criarCard(digimon) {
  return `<img src=${digimon.img}>
     <h3><span class="nome">Nome: <span>${digimon.name} </h3>
     <h3><span class="nivel">Nível: <span>${digimon.level} </h3>`
}

async function mostrarDigimon (name) {
  try {
    const response = await fetch ('https://digimon-api.vercel.app/api/digimon')
     const digimons = await response.json()
     digimons.forEach(digimon=>{
      if (name === digimon.name) {
        container2.innerHTML = criarCard(digimon)
      }
     })
  }

  catch {

  }
}

const getListaDigimons = async () => {
  try {
     const response = await fetch ('https://digimon-api.vercel.app/api/digimon')
     const digimons = await response.json()
    
  

     digimons.forEach((digimon) => {
      let buttonDigimon = document.createElement("button");
      buttonDigimon.innerText = digimon.name
      container.appendChild(buttonDigimon)
      buttonDigimon.addEventListener('click', () => mostrarDigimon(digimon.name))

      // criar botão, colocar conteúdo do botão (no caso o nome), colocar o botão dentro da div
      //mostrarDigimon = console.log()


  })}
  catch(err) {
     console.error("Capturei um erro: ", err)
  }
 }

 getListaDigimons()






/*
const getListaDigimons = async () => {
  try {
     const response = await fetch ('https://digimon-api.vercel.app/api/digimon')
     const digimons = await response.json()

     return digimons
  }
  catch(err) {
     console.error("Capturei um erro: ", err)
  }
 }



 async function main() {
  const digimon = await getListaDigimons()
  digimon.map((digi) => {
      demo.innerHTML += createSection(digi)
      
  })
  
}
  
  
  main ()



    const createSection = function createSection(dados) {
      return `
        <button class="button" id=${dados.name} type="submit">${dados.name}</button>
      `
    }

  const demo = document.querySelector('#demo')
 
  

   const mostrarDigimon = function mostrarDigimon(data) {
      return `
      <img src="${data.img}"
      `

    }

    */
