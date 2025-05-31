const listaProdutosDiv = document.querySelector('.lista-produtos');
const carrinhoLink = document.querySelector('nav a:last-child');
let carrinho = [];

let imagem1 = document.createElement('img');
imagem1.src = 'imgs/mesa1.jpeg';
const produtos = [
    { id: 1, nome: 'Mesa Rustica', preco: 25.99 },
    { id: 2, nome: 'Mesa com Bancos', preco: 79.90 },
    { id: 3, nome: 'Mesas curtas', preco: 120.50 },
    { id: 3, nome: 'Mesas curtas', preco: 120.50 },
    // Adicione mais produtos aqui
];

function exibirProdutos() {
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <img src="/imgs/mesa1.jpeg" alt="${produto.nome}">
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
}

// Certifique-se de ter as imagens (camiseta.jpg, calca.jpg, tenis.jpg) na mesma pasta do seu HTML
exibirProdutos();