let container = document.getElementById('digiDiv')
let dataList = document.getElementById ('lista')


let getDigimon = async () => {
  try{
    let response = await fetch('https://digimon-api.vercel.app/api/digimon')
    let digimons = await response.json()
    return digimons
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
  }
}

getDigimon().then(digimons => {
    digimons.forEach(digimon => {
        let itemDaLista = document.createElement('option');
        itemDaLista.innerText = digimon.name;
        dataList.appendChild(itemDaLista)
    });
})

function pegaclick(event) {
    event.preventDefault()

    //pega texto digitado
    let digitado = document.getElementById('input-escolhido').value

    //percorre lista
    getDigimon().then(digimons => {
        digimons.forEach(digimon => {  

            //compara texto digitado com item do loop
            if (digitado== digimon.name) {
                               
                //exibe o que precisa (detalehs do digimon)
                let imagem = document.getElementById ('trocardigi');
                imagem.src = digimon.img;
                container.appendChild(imagem)

                digitado.value = ''
            }
        });
    })
}

//pega botao e fica esperando o click
document.getElementById('btn-escolhido').addEventListener('click', pegaclick)
  


