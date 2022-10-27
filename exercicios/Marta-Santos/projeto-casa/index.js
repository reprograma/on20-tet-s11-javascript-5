const container = document.getElementById('demo')
const input = document.querySelector('#input')
const imgdigi = document.querySelector('#img-digi')
const digititle = document.querySelector('.card-title')
const digitext = document.querySelector('.card-text')

const fetchAPI = async () => {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await response.json();

    return data;
}

function digiAPI() {
    input.addEventListener('change', async ({ target }) => {
        const digiArr = await fetchAPI();

        const find = digiArr.find(({ name }) => name.toLowerCase() ===
            target.value.toLowerCase());

        const imaagem = find.img;
        const { name, level } = find;

        digitext.innerText = `${name} este é um digimon do tipo ${level}`;
        digititle.innerHTML = name;
        imgdigi.src = imaagem;

        return find;
    })

}
window.onload = () => digiAPI();

async function getDigimon() {
    try {
        const resposta = await fetch('https://digimon-api.vercel.app/api/digimon')
        const dados = await resposta.json()
        dados.forEach((digii) => {
            container.innerHTML +=
                `<div class="cards">
            <h1 class="titulo">${digii.name}</h1>
        </div> 
        `
        })

    }
    catch (err) {
        console.error('Capturei um erro:', err)
    }
}
getDigimon()

// Professora infelizmente meu codigo ficou muito grande, mas eu dei o meu melhor pra fazer, obrigada por tanto.
