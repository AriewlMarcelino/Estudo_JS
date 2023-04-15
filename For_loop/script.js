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
function adicionandoUmNumeroaArray(){
    let arr = [];   

    let btn = addEventListener('click',()=>{
        let numeroPassadoPeloUsuario = prompt('Digite um numero: ')
        arr.push(numeroPassadoPeloUsuario)

        for(i = 0; i<arr.length; i++){
            document.querySelector('.exibir').innerHTML = arr; 
        }
    })
}



let btn1 = addEventListener('click',()=>{
    let valueN1 = document.querySelector('.n1');
})



function SelecionaNumeros(){





}















    













