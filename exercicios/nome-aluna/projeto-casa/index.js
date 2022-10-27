const main = document.getElementById('cards-digimon')

async function digimonCards() {
    try {
      const resposta = await fetch("https://digimon-api.vercel.app/api/digimon",{})
  
      const dados = await resposta.json()
  
        dados.forEach((itensApi) => {
        const div = document.createElement('div')
        main.appendChild(div)
  
  
        const imagem = document.createElement('img')
        imagem.setAttribute('src', itensApi.img)
        imagem.setAttribute('alt', "digimon")
        div.appendChild(imagem)
  
        const tituloOriginal = document.createElement('h2')
        tituloOriginal.innerText = itensApi.name
        div.appendChild(tituloOriginal)
  
        const titulo = document.createElement('h2')
        titulo.innerText = `Level: ${itensApi.level}`
        div.appendChild(titulo)
  
      })
    }
    catch (err) {
      console.error('Capturei um erro:', err)
  
    }
  }
  
  
digimonCards()
                    



                  
                  


            
            



