let digimonProcurados = [];
fetchApiData();

async function fetchApiData() {
    let response = await fetch('https://digimon-api.vercel.app/api/digimon')
    let data = await response.json();

    const list1 = document.querySelector('#fill_list1');
    const list2 = document.querySelector('#fill_list2');
    const list3 = document.querySelector('#fill_list3');

    list1.innerHTML = "";
    list2.innerHTML = "";
    list3.innerHTML = "";

    let divisao1 = data.slice(0, 71);
    let divisao2 = data.slice(72, 138);
    let divisao3 = data.slice(139, 208);


    divisao1.map((item) => {
        const li = document.createElement('li');
        li.setAttribute('id', item.id);
        li.innerHTML = item.name;
        list1.appendChild(li);

        let digimonExiste = digimonProcurados.filter(value => value == item.name);
        if (digimonExiste.length >= 1) {
            li.setAttribute('class', 'sublinhado');
        }
    });

    divisao2.map((item) => {
        const li = document.createElement('li');
        li.setAttribute('id', item.id);
        li.innerHTML = item.name;
        list2.appendChild(li);

        let digimonExiste = digimonProcurados.filter(value => value == item.name);
        if (digimonExiste.length >= 1) {
            li.setAttribute('class', 'sublinhado');
        }

    });


    divisao3.map((item) => {
        const li = document.createElement('li');
        li.setAttribute('id', item.id);
        li.innerHTML = item.name;
        list3.appendChild(li);

        let digimonExiste = digimonProcurados.filter(value => value == item.name);
        if (digimonExiste.length >= 1) {
            li.setAttribute('class', 'sublinhado');
        }
    });

}

async function searchByName() {
    let digimon = document.getElementById('type_digimon');
    let digimonValue = digimon.value;

    digimonProcurados.push(digimonValue);

    let response = await fetch('https://digimon-api.vercel.app/api/digimon/name/' + digimonValue)
    let data = await response.json();


    const origin = document.getElementById('origin_name');
    const nivel = document.getElementById('nivel');
    const img = document.createElement('img');
    const imgDigimon = document.getElementById('img_digimon');
    imgDigimon.innerHTML = "";
    imgDigimon.appendChild(img);


    data.map((item) => {
        origin.innerText = item.name;
        nivel.innerText = item.level;
        img.setAttribute('src', item.img);
    });

    fetchApiData();
    digimon.value = "";
}