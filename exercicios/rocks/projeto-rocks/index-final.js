// TODO: criar um evento para o botão encontrar - addeventlistener
// função de requisiçao 
// função de fato adciona as informações das respostas do input 
// function que mostre todo mundo :) 


const createSection = (digimons) => {
    return `
    <div class "animal">
    <img src=${digimon.img} class="img">
    <h2 class="name">${digimon.name}</h2>
    <p class="level">${digimon.level}</p>
    </div>
    `
}


// evento de click 
document.getElementById('submit').addEventListener('click',(event)=>{
    event.preventDefault()
    getDigimons()
})



// mostra todo mundo 
async function getDigimons(){
    try{
        const type = document.getElementById('type').value
        const response = await fetch ('https://digimon-api.vercel.app/api/digimon')
        const digiAnimal = await response.json()

    }catch(err){
        console.error("capturei um erro aqui:", err)
    }
}

// um novo fetch de acordo como o nome do digimon // parentchild 
main = async () => {
    const digiAnimal = await getDigimons()
    digimon.map(() => {
        container.innerHTML+=creatSection()
    })
}


// document.getElementById('name').value = address.name
        // document.getElementById('level').value = address.level