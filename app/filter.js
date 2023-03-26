const botoesFiltro = document.querySelectorAll('.btn');
botoesFiltro.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    let btnClicado = document.getElementById(this.id);
    const categoria = btnClicado.value;
    let livrosFiltrados = categoria == 'disponivel'? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivros(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
        exiberValorTotalDosLivrosDisponiveis(valorTotal)
    }
}
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exiberValorTotalDosLivrosDisponiveis(valorTotal){
    sectionValorTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `

}