const input = document.getElementById('input')
const imgDigi = document.querySelector('#imagem')
const title = document.querySelector('.title')
const texto = document.querySelector('.texto')

const fetchApi = async () => {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
    const data = await response.json()

    return data
}

function digiApi() {
    input.addEventListener('change', async ({ target }) => {
        const digiArr = await fetchApi()

        const find = digiArr.find(({ name }) => name.toLowerCase() === target.value.toLowerCase())

        const imagem = find.img
        const { name, level } = find

        texto.innerText = `${name} é um tipo de digimon ${level}`
        title.innerHTML = name
        imgDigi.src = imagem

        return find
    })

}

window.onload = () => digiApi()