// Formulário de pizza
const lanches = document.querySelector('#lanches')

lanches.addEventListener('click', () =>{
    const lancheEscolhido = lanches.options[lanches.selectedIndex].value;

    if(lancheEscolhido === 'pizza'){
        const secaoDePizzas = document.querySelector('#secaoPizzas')
        secaoDePizzas.classList.remove('d-none')
    }
    else{
        secaoPizzas.classList.add('d-none')
    }
})

