const createSection = (digimon) => {
    return `
        <div class="digimon">
        <h2 class="name">${digimon.name}</h2>
        </div>
    `
}

const container = document.getElementById('demo')

const getDigimons = async () => {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
        const digimons = await response.json()
        // const ourDigimons = digimons.slice(10, 15)
        return digimons
    }     
    catch(err) {
        console.error ("Capturei um erro: ", err)
        
    }

}
getDigimons().then((digimons) => digimons.map((digimon) => container.innerHTML += createSection(digimon)))

//js quebra a foto do digidex