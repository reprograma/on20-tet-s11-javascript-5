// TODO List:
// consumir endpoint da API;
// criar uma forma da usuária definir qual digimon quer ver;
// fazer com que o evento de click ligue o input da usuária com a requisição ao endpoint da API.

function createDigimon(dados) {
    console.log(dados)
    return `
      <div class="Info do Digimon">
        <img class= "image" src=${dados.img}>
        <h2 class="name">Name: ${dados.name}</h>
        <p class="level">level: ${dados.level}</p>
      </div>
    `
}

function createAllDigimon(dados) {
    return `
      <button class="button" id=${dados.name} type="submit" onclick="showDigimon(${dados.name})">${dados.name}</button>
    `
}

document.getElementById("buttonDigimon").addEventListener('click', (e) => {
    e.preventDefault()
    getDigimonAnalog()
})

async function getDigimon(digi) {
    try {
        const digimonName = digi.innerHTML;
        console.log(digimonName)
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`);
        const digimon = await response.json();
        const digimonData = digimon[0];
        return digimonData;
    }
    catch (error) {
        console.error("Capturei um erro:", error)
    }

}

async function getAllDigimon() {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/`);
        const digimon = await response.json();
        return digimon;
    }
    catch (error) {
        console.error("Capturei um erro:", error)
    }

}

async function getDigimonAnalog() {
    try {
        const digimonName = document.getElementById("inputDigimon").value
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`);
        const digimon = await response.json();
        const digimonData = digimon[0];
        document.getElementById("half-demo").innerHTML = createDigimon(digimonData);
        
    }
    catch (error) {
        console.error("Capturei um erro:", error)
    }

}

async function showDigimon(e) {
    const dados = await getDigimon(e)
    console.log(dados)
    document.getElementById("half-demo").innerHTML = createDigimon(dados)
}

async function showAllDigimon() {
    const dados = await getAllDigimon()
    dados.map((dados) => {
    document.getElementById("demo2").innerHTML += createAllDigimon(dados)
    } )
}

showAllDigimon()