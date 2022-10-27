let chamarDigimon = async () => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon')
        const jsonDigimons = await response.json()
        console.log(jsonDigimons)
        let ul = document.querySelector('ul')
        jsonDigimons.map((digimon)=>{
           
            let li = document.createElement('li')
            
            li.innerHTML = digimon.name
            // li.addEventListener('click', buscarDigimonPorNome(li.innerText))
            // li.onclick = buscarDigimonPorNome(li.innerText)
            li.setAttribute("onclick", "buscarDigimonPorNome(this.innerText)")
            ul.append(li)
        })

    } catch (error) {
        console.error('capiturei um erro:', error) 
    }

}

chamarDigimon()


let criarCard =  (digimon) => {
return `
    <img src="${digimon.img}" alt="">
    <h4>${digimon.name}</h4>
    <p>${digimon.level}</p>  
`
}

let buscarDigimonPorNome = async (name) => {
    const card = document.getElementById('card')
    try {
       const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
       const digimon = await response.json() 
       console.log(digimon[0])
       card.innerHTML =  criarCard(digimon[0]) 
    } catch (error) {
        console.error('capiturei um erro:', error)  
    }
}




