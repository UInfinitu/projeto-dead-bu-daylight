const botoesCarrossel /* transformando td em uma variavel */ = document.querySelectorAll('.botao'); // seleção dos botões 
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {  //laço pra passar por tds botões 
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado'); //quando clicar vai procurar o botão com classe "selecionado" 
        botaoSelecionado.classList.remove('selecionado'); //vai tirar a classe selecionado 

        botao.classList.add('selecionado'); //adicionando a classe selecionado no botão q clicou

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        imagens[indice].classList.add('ativa');
    })
})