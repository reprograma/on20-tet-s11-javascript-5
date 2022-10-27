async function getDigimons() {
    try {
      const digimons = document.getElementById('digimons')
  
      const resposta = await fetch(`https://digimon-api.vercel.app/api/digimon`)
      const dados = await resposta.json()
      
      // Criando os botões dinamicamente a partir da resposta da api que retorna a lista de digimons
      dados.forEach((item) => {
        digimons.innerHTML += `<button class="botao" type="button" value="${item.name}">${item.name}</button>`
      });
      
      // Seleciona todos os botões que foram criados acima
      const buttons = document.querySelectorAll('button')
  
      // Pego todos os botões e adiciono o eventListener para cada um deles
      buttons.forEach(function(button){
        button.addEventListener('click', getDigimon)
      })
    }
    catch(err) {
      console.error('Capturei um erro:', err)
    }
  }
  
  async function getDigimon(event) {
    // Captura o valor do botão
    const digimon = event.target.value
  
    try {
      const resposta = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
      const dados = await resposta.json()
      const divDigimon = document.getElementById('digimon')
      divDigimon.innerHTML = `
        <img class="imagem" src="${dados[0].img}">
        <h1 class="nome">Nome do Digimon: ${dados[0].name}</h1>
        <p class="level">Level:${dados[0].level}</p>
      `
  
    }
    catch(err) {
      console.error('Capturei um erro:', err)
    }
  }
  
  getDigimons();