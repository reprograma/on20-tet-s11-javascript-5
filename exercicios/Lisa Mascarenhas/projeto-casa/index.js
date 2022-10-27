const DIGIMON_API = 'https://digimon-api.vercel.app/api/digimon';

const digimonList = document.querySelector('.digimon-list');
const digimonDialog = document.querySelector('.digimon-info');
const digimonFilter = document.querySelector('.digimon-filter');

fetch(DIGIMON_API)
    .then(result => result.json())
    .then(digimons => digimons.map(digimon => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');

        anchor.innerText = digimon.name;
        anchor.href = '';

        anchor.addEventListener('click', e => {
            e.preventDefault();

            digimonDialog.innerHTML = `<div>
                <p>${digimon.name}</p>
                <p>Level: ${digimon.level}</p>
                <img src="${digimon.img}">
            </div>`;

            const digimonDialogClose = document.createElement('button');
            digimonDialogClose.innerText = 'Fechar';
            digimonDialogClose.addEventListener('click', () => {
                digimonDialog.close();
            });
            digimonDialog.appendChild(digimonDialogClose);
            digimonDialog.showModal();
        });

        listItem.appendChild(anchor);
        digimonList.appendChild(listItem);
    }))
    .catch((error) => console.log('failed to fetch and display digimons', error));

digimonFilter.addEventListener('input', (e) => {
    digimonList.childNodes.forEach(listItem => {
        const filterValue = digimonFilter.value.trim();
        const shouldDisplayDigimon = filterValue === '' || listItem.textContent.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase());

        if (shouldDisplayDigimon) {
            listItem.style = '';
        } else {
            listItem.style = 'display: none';
        }
    });
});