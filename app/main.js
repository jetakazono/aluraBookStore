let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosdaAPI()

async function getBuscarLivrosdaAPI(){
    const res = await fetch(endPointAPI)
    livros = await res.json()
    const livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto);
    
}




