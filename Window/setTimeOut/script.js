//função que enviara o pop-up após os 3s.
function dispare3s(){
    window.confirm('Voces esta de acordo com os cookies !')
}

//função de setInterval, para atualizar o relogio  em tempo real;
setInterval(meuRelogio, 1000)
function meuRelogio(){
    let data = new Date();
    document.querySelector('.relogio').innerHTML = data.toUTCString();
}






