const listaProdutosDiv = document.querySelector('.lista-produtos');
const carrinhoLink = document.querySelector('nav a:last-child');
let carrinho = [];

const produtos = [
    { id: 1, nome: 'Camiseta Confortável', preco: 25.99, imagem: 'camiseta.jpg' },
    { id: 2, nome: 'Calça Jeans Moderna', preco: 79.90, imagem: 'calca.jpg' },
    { id: 3, nome: 'Tênis Esportivo', preco: 120.50, imagem: 'tenis.jpg' },
    // Adicione mais produtos aqui
];

function exibirProdutos() {
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button data-id="${produto.id}">Adicionar ao Carrinho</button>
        `;
        listaProdutosDiv.appendChild(produtoDiv);
    });

    const botoesAdicionar = document.querySelectorAll('.produto button');
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });
}

function adicionarAoCarrinho(event) {
    const produtoId = parseInt(event.target.dataset.id);
    const produtoSelecionado = produtos.find(produto => produto.id === produtoId);

    if (produtoSelecionado) {
        carrinho.push(produtoSelecionado);
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    carrinhoLink.textContent = `Carrinho (${carrinho.length})`;
    console.log('Itens no carrinho:', carrinho); // Apenas para demonstração
    // Em um cenário real, você exibiria os itens do carrinho em uma página separada ou modal.
}

// Certifique-se de ter as imagens (camiseta.jpg, calca.jpg, tenis.jpg) na mesma pasta do seu HTML
exibirProdutos();