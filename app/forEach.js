const sectionLivros = document.getElementById('livros');
const sectionValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis'); 

function exibirLivros(livros) {
    sectionValorTotalLivrosDisponiveis.innerHTML = '';
    sectionLivros.innerHTML = '';
    livros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        sectionLivros.innerHTML +=`
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        ` 
    });
}