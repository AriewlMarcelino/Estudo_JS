// ETAPA 1 - CONCLUIDO
function NumRandon(){
    let x = document.querySelector('.demo').innerHTML = Math.floor(Math.random()*10)
}

//ETAPA 2 - CONCLUIDO
function NumeroUsuario(){
    //SELECIONA O NUMERO DO USUARIO;
    let sugestao = parseFloat(prompt('Digite um numero de 0 a 10, como sugestão? '));

    let mostrarNumeroUsuario = document.querySelector('.numeroDoUsuario');

    if(sugestao > 10){
        mostrarNumeroUsuario.innerHTML = 'Numero não relavante devido estar acima de 10'
    }else{
        //MOSTRA O NUMERO DE SUGESTÃO DO USUARIO;
        mostrarNumeroUsuario.innerHTML = `Bom Trabalho seu numero é ! ${sugestao}`
    }

}

NumRandon()
NumeroUsuario()










