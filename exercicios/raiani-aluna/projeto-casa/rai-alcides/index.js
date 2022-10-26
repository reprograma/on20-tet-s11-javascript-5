let chamarDigimon = async () => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon')
        const jsonDigimons = await response.json()
        console.log(jsonDigimons)
        let body = document.querySelector('body')
        jsonDigimons.slice(1,20).map((digimon)=>{
           
            let p = document.createElement('p')
            p.innerHTML = digimon.name
            body.append(p)
        })

    } catch (error) {
        console.error('capiturei um erro:', err) 
    }

}

chamarDigimon()