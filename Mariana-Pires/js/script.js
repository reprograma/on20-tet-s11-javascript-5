//TRANSFORMANDO HTML EM CONSTANTES E VARIÁVEIS
const container = document.getElementById('main');
const botao = document.getElementsByClassName('digi-button');
const img = document.getElementsByClassName('img');
const lvl = document.getElementsByClassName('lvl');


//FUNÇÃO QUE EXIBE OS BOTÕES
function buttonsList (list){
  return `
    <div class="list">
      <button class="digi-button">${list.name}</p>
    </div> `
}


function createElements(list){
if (botao.value = onclick) {
    list.forEach((list) => {
        const img = document.getElementsByClassName('img')
        img.setAttribute('src', [json.img])
        console.log(list.img)
        img.appendChild()}) } else {
            botao.value = '0'
        }}
    

//FUNÇÃO QUE EXIBE AS IMAGENS

// function createImage (list){
//     return `
//       <div class="list">
//         <img src="${list.img}" class="image" alt="imagem de Digimon">      
//     </div> `
//   }

// // FUNÇÃO QUE EXIBE OS LVLS

// function createLvl (list) {
//     return `
//       <div class="list">
//         <p  class="level">${list.level}"</p>
//     </div> `
// }

// function fillPage(list) {
    
//A INFORMAÇÃO EXTRA QUE EU QUERO EXIBIR AO CLICAR
// function mostraExtra(list){ 


// FUNÇÃO ASSÍNCRONA
async function getInfo() {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon')
        const json = await response.json()
        console.log(json)
        return json
    }
    catch(err){
        console.error("o erro é: ", err)
    }
}

//ESCREVE NA PÁGINA
async function main() {
    const cards = await getInfo()
    cards.map((info) => {
      container.innerHTML += buttonsList(info)
    })  
    // cards.map((Extrainfo) =>{
    //     container.innerHTML += mostraExtra(Extrainfo)})
    }
  

// async function finalD() {
//     const cards = await getInfo()
//     cards.map((info) => {
//         container.innerHTML += mostraExtra(info)

        // botao.addEventListener("click", implementList);
        // cards.map((info) => {
        //     final.innerHTML += implementList(info)
        //   })  
//     })
// }



main()
// fillPage()

// container.addEventListener("click", finalD())
// function onClick(list) {
//     const imagem = document.createElement("img")
//     imagem.classList.add("covers")
//     imagem.setAttribute('src', `${list.img}`)
//     imagem.appendChild(imagem)
//     const lvl = document.createElement("p")
//     lvl.classList.add("contents")
//     lvl.innerHTML = `Level: <span class="dynamic-text">${list.lvl}`/span>
//     lvl.appendChild(lvl)}
