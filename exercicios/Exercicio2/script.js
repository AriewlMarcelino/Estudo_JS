
//FUNÇÃO RESPONSAVEL POR ACIONAR O BOTÃO E O ELEMENTO
function selecionaBotao(){
    let botao = document.querySelector('.btn').addEventListener('click',imprimir)
}

//FUNÇÃO QUE ENVIA O EVENTO PARA FAZER A IMPRESSÃO;
function imprimir(){
    window.print()
}

selecionaBotao()



