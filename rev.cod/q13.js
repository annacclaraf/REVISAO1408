const pessoa = {
    nome: "Gilberto",
    peso: 70,
    altura: 1.70,
    temperatura: 38.5
};

if (pessoa.temperatura > 37.5) {
    console.log(`${pessoa.nome} está com febre`);
} else {
    console.log(`${pessoa.nome} não está com febre`);
}
