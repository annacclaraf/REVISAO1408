const produto = {
    nome: "Camiseta",
    preco: 79.90,
    emEstoque: true
};

if (produto.emEstoque) {
    console.log("Produto disponível");
} else {
    console.log("Produto indisponível");
}
