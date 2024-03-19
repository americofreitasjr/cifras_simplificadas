// script.js
document.addEventListener('DOMContentLoaded', function() {
    //const dadosCifras = [/* Insira seu JSON aqui */];
    const menu = document.getElementById('menu-artistas');
    const main = document.querySelector('main');

    const opcoesCapotraste = [0,1,2,3,4,5,6,7,8,9];
    const opcoesTom = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const selectCapotraste = document.getElementById('capotraste');
    const selectTom = document.getElementById('tom');
    
    // Geração dinâmica dos componentes de seleção
    opcoesCapotraste.forEach(capotraste => {
        const opcao = document.createElement('option');
        opcao.value = capotraste;
        opcao.textContent = capotraste;
        selectCapotraste.appendChild(opcao);
    });

    opcoesTom.forEach(tom => {
        const opcao = document.createElement('option');
        opcao.value = tom;
        opcao.textContent = tom;
        selectTom.appendChild(opcao);
    });

    // Definição dos valores padrão
    selectCapotraste.value = 0; // Capotraste padrão
    selectTom.value = 'C'; // Tom padrão

    fetch('dadosCifras.json')
        .then(response => response.json())
        .then(dadosCifras => displayCifras(dadosCifras))
        .catch(error => console.error('Error loading the cifras.json file:', error));

    
    function displayCifras(dadosCifras) {
        dadosCifras.forEach((cifra, index) => {
            // Adiciona item ao menu
            const itemMenu = document.createElement('a');
            itemMenu.href = `#${cifra.artista.replace(/\s+/g, '-').toLowerCase()}`;
            itemMenu.textContent = cifra.artista;
            menu.appendChild(itemMenu);
    
            // Cria a seção do artista
            const secao = document.createElement('div');
            secao.classList.add('secao');
            secao.id = cifra.artista.replace(/\s+/g, '-').toLowerCase();
    
            const titulo = document.createElement('h2');
            titulo.classList.add('titulo');
            titulo.textContent = cifra.titulo;
    
            secao.appendChild(titulo);
    
            cifra.secoes.forEach(secaoCifra => {
                const nomeSecao = document.createElement('h3');
                nomeSecao.textContent = secaoCifra.nome;
                secao.appendChild(nomeSecao);
    
                secaoCifra.acordes.forEach(acorde => {
                    const spanAcorde = document.createElement('span');
                    spanAcorde.classList.add('acorde');
                    spanAcorde.textContent = acorde;
                    secao.appendChild(spanAcorde);
                });
    
                secao.appendChild(document.createElement('br')); // Quebra de linha após os acordes
            });
    
            main.appendChild(secao);
        });
    }
    
});
