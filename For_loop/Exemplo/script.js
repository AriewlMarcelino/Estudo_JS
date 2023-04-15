
//Selecionando o botão de somar;
let btnSoma = document.querySelector('.bt').addEventListener('click',somar)

//Selecionando o botão de Dividir;
let btnDividir = document.querySelector('.bt1').addEventListener('click',dividir)

//Seleciona os inputs;
let value1 = document.querySelector('.inpt');
let value2 = document.querySelector('.inpt1');



function somar(){
    let resultado = Number(value1.value) + Number(value2.value)
    document.querySelector('.resultado').innerHTML = resultado
}

value1.addEventListener('input',somar);
value2.addEventListener('input',somar);

function dividir(){
    prompt('Dividir')
}