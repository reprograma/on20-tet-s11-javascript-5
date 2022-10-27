// funcão para rederizar a lista de digimons na página
function renderList(digimons)
{
    // obter o elemento que vai receber a lista de digimons
    const listContainer = document.querySelector('#digimon-list');

    // limpar o elemento
    listContainer.innerHTML = '';
    
    // adicionar cada digimon na lista
    digimons.forEach(digimon => {
        
        // criar um elemento para o digimon
        const item = document.createElement('li');
        
        // adicionar o nome do digimon no elemento
        item.textContent = digimon.name;

        // adicionar um evento de click no elemento
        item.addEventListener('click', () => {
            renderDigimon(digimon);
        });

        // adicionar o elemento na listagem da pagina
        listContainer.appendChild(item);
    });
}

// função para renderizar o digimon selecionado
function renderDigimon(digimon)
{
    // obter o elemento que vai receber os detalhes do digimon
    const digimonContainer = document.querySelector('#digimon-detail');
    
    // adicionar os detalhes do digimon no elemento
    digimonContainer.innerHTML = `
        <div class="card"> 
            <img class="image" src="${digimon.img}" alt="${digimon.name}">
            <h2 class="title">${digimon.name}</h2>
            <p class="text">${digimon.level}</span></p>
        </div>`;
}

// função para filtrar a lista de digimons por um texto digitado no input
function filterList(digimons)
{
    // ober o input de filtro pelo id
    searchInput = document.querySelector('#search');

    // adicionar um evento de digitação no input
    searchInput.addEventListener('keyup', (event) => {
        // aplicar o filtro na lista de digimons pelo texto digitado
        const filteredDigimons = digimons.filter(digimon => {
            return digimon.name.toLowerCase().includes(event.target.value.toLowerCase());
        });

        // renderizar a lista de digimons filtrada
        renderList(filteredDigimons);
    });
}

// função para renderizar tudo na página após buscar a lista de digimons na api
function renderPage(digimons)
{
    // renderizar a lista de digimons na página
    renderList(digimons);

    // renderizar o primeiro digimon da lista
    // renderDigimon(digimons[0])

    // adicionar filtro de digimons no input
    filterList(digimons);
}

// buscar lista de digimons na api e então cahamar a função de renderizar a página
function loadDigimons()
{
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            renderPage(data);
        })
}

loadDigimons();