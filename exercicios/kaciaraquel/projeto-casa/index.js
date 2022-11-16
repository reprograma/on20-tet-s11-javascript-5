const lista = document.getElementById('list')
const cardes = document.getElementById('card')

getList = async () => {
  try {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const digimonsData = await response.json()
    renderList(digimonsData)
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}

let renderList = (digimons) => digimons.forEach((digimon) => list.innerHTML += `<input class="buttons" type="submit" value=${digimon.name} onclick="getDigimon(this.value)">`)

getDigimon = async (digimon) => {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);
    const digimonData = await response.json()
    renderDigimon(digimonData[0]);
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}

renderDigimon = (digimon) => cardes.innerHTML = `
  <img class="" src=${digimon.img}>
  <h3 class="">Name: ${digimon.name}</h3>
  <p class="">Level: ${digimon.level}</p>
`

getList()