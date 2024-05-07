const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const mainContent = document.getElementById('mainContent');

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

clearButton.addEventListener('click', () => {
    mainContent.innerHTML = '';
    searchInput.value = '';
    seenPokemon = [];
    keyType.classList.add('d-none');
    keyAbility.classList.add('d-none');
});

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.length !== 0) {
        fetchPokemon(searchTerm);
    }
});

let seenPokemon = [];

async function fetchPokemon(searchTerm) {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching Pokemon: ${response.statusText}`);
        }
        const data = await response.json();

        if (seenPokemon.includes(data.id)) {
            const alreadyThereMsg = document.getElementById('alreadyThereMsg');
            alreadyThereMsg.textContent = `${data.name.toUpperCase()} Already Added!`;
            alreadyThereMsg.classList.remove('d-none');
            setTimeout(() => {
                alreadyThereMsg.classList.add('d-none');
            }, 2500);
            searchInput.value = '';
        } else {
            seenPokemon.push(data.id);
            displayPokemonDetails(data);
        }
    } catch (error) {
        console.log(error);
        notFoundMessage.classList.remove('d-none');
        setTimeout(() => {
            notFoundMessage.classList.add('d-none');
        }, 3500);
    }
}

const successMessage = document.getElementById('successMessage');

function displayPokemonDetails(pokemon) {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = `Adding #${seenPokemon.length} - ${pokemon.name.toUpperCase()} (ID: ${pokemon.id})`;

    successMessage.classList.remove('d-none');
    setTimeout(() => {
        successMessage.classList.add('d-none');
    }, 2500);

    const card = document.createElement('div');
    card.classList.add('card', 'mb-2');

    const img = document.createElement('img');
    img.classList.add('card-img');
    img.src = pokemon.sprites.other.home.front_default;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('p');
    title.classList.add('card-title');
    title.textContent = pokemon.name.replace(/^./, match => match.toUpperCase());

    const types = document.createElement('p');
    types.classList.add('pokemon-types');

    const abilities = document.createElement('p');
    abilities.classList.add('pokemon-abilities');

    types.textContent = `${pokemon.types.map(type => type.type.name).join(' | ').toUpperCase()}`;
    abilities.textContent = `${pokemon.abilities.map(ability => ability.ability.name).join(' | ').toUpperCase()}`;

    const stats = document.createElement('ul');
    stats.classList.add('pokemon-stats');

    pokemon.stats.forEach(stat => {
        const statItem = document.createElement('li');
        statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        stats.appendChild(statItem);
    });

    card.classList.add('card-enter'); // Animation Effect (see bottom of CSS)

    cardBody.appendChild(title);
    cardBody.appendChild(types);
    cardBody.appendChild(abilities);
    cardBody.appendChild(stats);

    card.appendChild(img);
    card.appendChild(cardBody);

    mainContent.appendChild(card);

    searchInput.value = '';

    if (seenPokemon.length === 1) {
        setTimeout(() => {
            keyType.classList.remove('d-none');
            keyAbility.classList.remove('d-none');
        }, 1000);
    }

    setTimeout(() => {
        keyType.classList.add('d-none');
        keyAbility.classList.add('d-none');
    }, 10000);
}
