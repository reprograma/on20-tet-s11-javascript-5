const mains = async function main() {
    const digimon = await getListaDigimons()
    digimon.forEach((i) => {
        container.innerHTML += i.addEventListener('click', showDataButton() )
    }
    );
    digimon.map((digi) => {
        container.innerHTML += createSection(digi) 
        
    })
    }