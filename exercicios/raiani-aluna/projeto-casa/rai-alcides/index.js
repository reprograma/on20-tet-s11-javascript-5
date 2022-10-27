let chamarDigimon = async () => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon')
        const jsonDigimons = await response.json()
        console.log(jsonDigimons)
        let body = document.querySelector('body')
        let ul = document.querySelector('ul')
        jsonDigimons.map((digimon)=>{
           
            let li = document.createElement('li')
            li.innerHTML = digimon.name
            body.append(ul)
            ul.append(li)
        })

    } catch (error) {
        console.error('capiturei um erro:', err) 
    }

}

chamarDigimon()