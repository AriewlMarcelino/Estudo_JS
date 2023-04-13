//Api de geolocalização trazendo a altitude e logitudade de um lugar atual.

const x = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

//função para validação dos dados no input entre o min 100 e max de 300;
//Selecionamos o input;
function validacaoDeDados(){
    const input = document.querySelector('#id1');
    let p = document.querySelector('.demo');
    //Se os valores forem diferentes do recomendado no input retorne a mensagem abaixo;
    if(!input.checkValidity()) {
        p.innerHTML = 'Insira um numero entre 100 e 300 ! ';
        p.style.color = 'red'
    //Senão Diga que o input está ok !
    }else {
        p.innerHTML = 'Input OK !'
        p.style.color = 'green'
    }
}

// Se o número em um campo de entrada for maior que 100 (o max atributo da entrada), exiba uma mensagem:
function validaMin() {

    //Pegando o input é o p para mensagem ao usuario se estiver incorreto.
    let inp = document.querySelector('#id2');
    let msg = document.querySelector('.msg');

    //validação com rangeOverflow;
    if(!inp.validity.rangeOverflow) {
        msg.innerHTML = 'Insira numeros maiores do que 100 por favor.'
        msg.style.color = 'red'
    } else {
        msg.innerHTML = 'Tudo certo !'
        msg.style.color = 'green'
    }
    
}

// Se o número em um campo de entrada for menor que 100 (o minatributo da entrada), exiba uma mensagem:
function validaMax() {
    
    let inp3 = document.querySelector('#id3');
    let msg2 = document.querySelector('.msg1');

    if(!inp3.validity.rangeUnderflow) {
        msg2.innerHTML = 'Insira um numero abaixo de 100 por favor.';
        msg2.style.color = 'red'
    }else {
        msg2.innerHTML = 'Tudo Certo'
        msg2.style.color = 'green'
    }


}


