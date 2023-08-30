// Código para exibir o preço de cada pizza por tamanho e sabor na tela inicial
const listaDeTamanhosDePizza = document.querySelectorAll('.btn-tamanho-pizza');
for(let contador = 0; contador < listaDeTamanhosDePizza.length; contador++){
    const btnClicado = listaDeTamanhosDePizza[contador];
    btnClicado.addEventListener('click', () =>{
        let sabores = ['frango', 'calabresa', 'basca'];
        const precoPizzas = document.querySelectorAll('#preco');
        const tamanhoDePizzaEscolhido = btnClicado.id;

        fetch('precos.json')
        .then((resposta) => resposta.json())
        .then((dados) => {
            sabores.forEach((sabor,index) => {
                const pizzaSaborEPreco = dados.precos[0][sabor][tamanhoDePizzaEscolhido]; 
                precoPizzas[index].innerHTML = pizzaSaborEPreco;
            });
        })
    })
}

