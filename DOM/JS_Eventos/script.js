//Usando o addEventListener para receber uma mensagem assim que clicado.
let x = document.querySelector('.btn').addEventListener('click',date);

function date(x) {
    document.querySelector('.date').innerHTML = Date();   

    document.querySelector('.date').style.backgroundColor = 'green'

    document.querySelector('.date').style.color = 'white';

    document.querySelector('.date').style.fon = '18px'

    document.querySelector('.date').style.width = '500px'
}

//Usando duas funções em, um addEventListener.
let y = document.querySelector('.btn1');
y.addEventListener('click',firstFunction);
y.addEventListener('click',secondFunction);
function firstFunction(){
    alert('olá seja Bem-Vindo!')
}
function secondFunction(){
    alert('Ja estou em funcionabilidade.')
}

//function para identificar o redicionamento da tela do usuario.
window.addEventListener('resize',function(){
    document.querySelector('.resize').innerHTML = Math.random();
})

//função que mostra numeros aleatorios;
let b = document.querySelector('.btn1');
let n = document.querySelector('.randomNumber');

b.addEventListener('click',function() {
     n.innerHTML = Math.floor(Math.random()*100);
})

