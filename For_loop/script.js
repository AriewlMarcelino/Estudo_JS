//Ultilizando o fro comum para poder estar percorrendo uma lista de nomes;
// const carros = ['Gol','Ford','Hylux','Skyline','Fusca']
// console.log(carros)

// let text = '';
// for (let i = 0; i < carros.length; i++){
// text += carros[i] + '<br>';
// }

// document.querySelector('.demo').innerHTML = text


//ultilizando o for in ,para percorresr uma lista de itens;

// carros
// for(x in carros){
//     console.log(carros[x])
// }

// Utilizando um forEach, para percorre uma lista de numero, chamando ela através de um função;
// let texto = '';
// let numeros = [26];

// numeros.forEach(exibirNomes);

// document.querySelector('.numb').innerHTML  = texto;

// function exibirNomes(value){ 
//     texto += value + '<br>'
// }

// Armazenando um item dentro de uma array com o metodo Push
// function adicionandoUmNumeroaArray(){
//     let arr = [];   

//     let btn = addEventListener('click',()=>{
//         let numeroPassadoPeloUsuario = prompt('Digite um numero: ')
//         arr.push(numeroPassadoPeloUsuario)

//         for(i = 0; i<arr.length; i++){
//             document.querySelector('.exibir').innerHTML = arr; 
//         }
//     })
// }


// let frutas = []

// let btn = addEventListener('click',()=>{
//     let add = prompt('Adicione uma fruta: ')
//     frutas.push(add)
//     let p = document.querySelector('.demo').innerHTML = frutas.join('*') 
//     console.log(frutas)
// })


//Convertendo uma array para string

// let arr = ['Alexander']
// let adicionar = document.querySelector('.demo').innerHTML = arr.push()
// let remover = document.querySelector('.demo1').innerHTML = arr.pop()

// function adicioneItem(){
//     let adicione = addEventListener('click',()=>{
//         let x = prompt('Digite um item: ');
//         document.querySelector('.demo');
//         arr.push(x)
//     })
// }   




// function remover(){
//     let remover = addEventListener('click',()=>{
//         let remover = document.querySelector('.demo1').innerHTML = arr
//         arr.pop(remover)
//     })
// }

// let arr = [];
// // Adicionando um item a uma array;
// function itensAdicionados(){
//     addEventListener('click',()=>{
//         document.querySelector('demo')
//         let add = prompt('adicione um item: ')
//         arr.push(add)  
//         let mostrarItens = document.querySelector('.demo').innerHTML = arr  
//     })
// }


//Removendo um item de uma array;

// function removeritens(){
//     let arr = [1,2,3,4,5]
//     addEventListener('click',()=>{
//         document.querySelector('.demo1')
//         console.log('demo')
//         document.querySelector('.demo')
//         console.log('demo1')
//     }) 
    



//     console.log('funcionando..')
// }

// removeritens()

// // itensAdicionados()

   

// button.addEventListener("click", myFunction);


let arrArmazenaDados = []
let text = '<li>';
arrArmazenaDados.forEach(separador)
let doc = document.querySelector('.demo').innerHTML = text;

//Selecionando os botoês
let btn = document.querySelector('.btn')
let btn1 = document.querySelector('.btn1');

//Seleção onde os dados vão ser inseridos;
let dados =  document.querySelector('.demo');
let dados1 =  document.querySelector('.demo1');

//Pegando o evento de click do elemento;
btn.addEventListener('click',addictedItem);
btn1.addEventListener('click',removeItem);

//Função que armazena os Itens dentro de uma Array;
function addictedItem(){
    let add = prompt('Adicione um item: ')
    arrArmazenaDados.push(add)
    dados.innerHTML = arrArmazenaDados.join(doc)

}

//Função que remove os dados da array;
function removeItem(){
    arrArmazenaDados.pop();
    dados.innerHTML = arrArmazenaDados.join(doc)
}

function separador(value){
    text += value + "<li>";
}


let data = new Date()

let showDate = document.querySelector('.data');
showDate.innerHTML = data.toUTCString()

for(i=0; i < showDate.lenght; i++){
    showDate.innerHTML = data
}

showDate.addEventListener('')

function mostraHorasReal(){
    prompt('funcionando')
}










    













