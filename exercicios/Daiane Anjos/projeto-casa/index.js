function listaDigimons(elemento) {    
    const listaDigimons = document.querySelector('#lista-digimons');    
    listaDigimons.innerHTML = '';   
    elemento.forEach(digimon => {       
        const item = document.createElement('button');       
        item.textContent = digimon.name;       
        item.addEventListener('click', () => {
            imgDigimon(digimon);
        });

        listaDigimons.appendChild(item);
    });
}


function imgDigimon(digimon){  
    const caracteristicasDigimons = document.querySelector('#caracteristicas-digimons');
    caracteristicasDigimons.innerHTML = `
        <div class="card"> 
            <img class="image" src="${digimon.img}">
            <h2 class="title">${digimon.name}</h2>
            <p class="text">${digimon.level}</p>
        </div>`;
}



function carregarDigimons(){
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            imgPagina(data);
        })
}
carregarDigimons();

function imgPagina(elemento){  
    listaDigimons(elemento);   
 
}