let container = document.getElementById('digi')
let dataList = document.getElementById ('nome')
  
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
    digimons.forEach(digmon => {
        let itemDaLista = document.createElement('option');
        itemDaLista.innerText = digmon.name;
        dataList.appendChild(itemDaLista)
    });
})


