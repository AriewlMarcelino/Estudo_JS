let p = document.querySelector('.demo');
let btn = document.querySelector('.btn').addEventListener('click',btnMsg);
let input = Number(document.querySelector('.input'));


// FUNÇÃO QUE FAZ O CALCULO DO ANO BISSEXTO 
function calculoBissexto(ano){
    return ano = ano/4;
}

// FUNÇÃO QUE RETORNA O VALOR NA TELA PARA O USUARIO
function btnMsg(){
    let valorDigitado = prompt('digite o ano: ')
    p.innerHTML = calculoBissexto(valorDigitado)

    if(p.innerHTML = calculoBissexto(valorDigitado) == 503){
        p.innerHTML = `O ano de ${valorDigitado} é bissexto!`
    }else{
        p.innerHTML = `O ano de ${valorDigitado} não é bissexto!`
    }
}






