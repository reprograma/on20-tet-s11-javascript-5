const list = document.getElementById('list')
const card = document.getElementById('card')

getList = async () => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const digimonsData = await response.json()
        renderList(digimonsData)

    }
    catch(err) {
        console.error("Capturei um erro:", err)
    }
}

renderList = (digimons) => digimons.map((digimon) => list.innerHTML += `
<input class="buttons" type="submit" value=${digimon.name} onclick="getDigimon(this.value)">`)

getDigimon = async (digimon) => {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);
        const digimonData = await response.json()
        renderDigimon(digimonData[0]);

    }
    catch (err) {
        console.error("Capturei um erro:", err)
    }
}

renderDigimon = (digimon) => card.innerHTML = `
<img class="" src=${digimon.img}>
<h3 class="digimon">Name: ${digimon.name}</h3>
<p class="digimon">Level: ${digimon.level}</p>` 

getList()