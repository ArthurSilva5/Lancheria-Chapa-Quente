// Código para exibir o preço da pizza no formulário
const listaDePizzas = document.querySelector('#pizza');
const listaDeTamanhos = document.querySelectorAll("input[name='tamanhoPizza']");

const exibePrecoFinal = () => {
    const atualizaPreco = () => {
        const tamanhoEscolhido = document.querySelector("input[name='tamanhoPizza']:checked").value;
        const pizzaEscolhida = listaDePizzas.options[listaDePizzas.selectedIndex].value;
        fetch('./precos.json')
            .then((resposta) => resposta.json())
            .then((dados) => {
                const precoTotal = document.querySelector('#precoFinal');
                precoTotal.value = dados.precos[0][pizzaEscolhida][tamanhoEscolhido];
            });
    };

    listaDeTamanhos.forEach((tamanho) => {
        tamanho.addEventListener('click', atualizaPreco);
    });

    listaDePizzas.addEventListener('change', atualizaPreco);
};

exibePrecoFinal();


// Função para habilitar o botão somente após todos os campos serem selecionados
const btnEnviarPedido = document.querySelector('.btnEnviarPedido')
// Ao carregar a página, invoca uma função que bloqueia o botãp
window.addEventListener('load', () =>{
    // Bloqueia o botão: 
    btnEnviarPedido.setAttribute('disabled', 'true');
    listaDeTamanhos.forEach((botao) =>{
        // Adiciona um evento para cada opção de input radio
        botao.addEventListener('click', () =>{
            // Remove o bloqueamento do botão
            btnEnviarPedido.removeAttribute('disabled');
        })
    })
})

btnEnviarPedido.addEventListener('click', () => {
    alert('Seu pedido foi enviado!')
})