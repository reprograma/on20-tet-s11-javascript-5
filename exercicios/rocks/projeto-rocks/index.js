const createSection = (cards) =>{
    return `
    <div class = "digiCards">
    <img src=${digimon.image} class="img"
    <h2 class="name">${digimon.name}</h2>
    <p class="level">${digimon.level}</p>}
    </div>
    `  
}

const container = document.getElementById('demo')

const getDigimons = async () => {
    try{
    const response = await fetch('https://digimon-api.vercel.app/api/digimon')
    const cards = await response.json
    // const allDigimons = digimons.slice (0,10)
    return allDigimons

    }catch(err){
        console.log("capturei um erro aqui:",err)
    }
}

getDigimons()