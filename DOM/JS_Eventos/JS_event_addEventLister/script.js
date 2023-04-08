//funcção para alterar o texto;
function change(id){
    id.innerHTML = 'Olá tudo certo..'
}

//função que envia uma mensagem ao cliente no botão.
function date(){
    document.querySelector('.btn').innerHTML = Date()
}

//função de validação se cookies estão ativos na pagina do usuario ou não;
function cookies(){
    
    let cookie = '';

    if(navigator.cookieEnabled == true) {
        cookie = 'Os cookies estão ativados'
    }else {
        cookie = 'Os cookies estão desativados'
    }

    document.querySelector('.cookie').innerHTML = cookie;
}

//função onchange para mudar as letras do input para Uppercase;
function upperCase(){
    // Selecionamos o campo
    let input = document.querySelector('#ipt1');
    input.value = input.value.toUpperCase();
}

//função para deixar as letras de UpperCase para lowerCase;
function lowCase(){
    //Selecionando o input e fazendo a alterando do campo para lowerCase;
    let input2 = document.querySelector('#ipt2');
    input2.value = input2.value.toLowerCase();
}

//function para enviar evento de mensagem ao onmouseset
function mOver(obj){
    obj.innerHTML = 'Obrigado'
    obj.style.backgroundColor="#D94A38"
}

function mOut(obj){
    obj.innerHTML = 'Mova o mouse sobre mim !'
    obj.style.backgroundColor = "#1ec5e5"
}





