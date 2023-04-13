function armazenaLocalStorage(){
    //pega o campo de input;
    let input = document.querySelector('#input')
    let msg = document.querySelector('.msg');
    let dados = document.querySelector('.dados');

    let enviaDadosLocalStorage = localStorage.setItem('nome',input.value)
    input.value = ''; // limpa o input
    msg.innerHTML = 'Dados salvos com sucesso!'
    msg.style.color = 'green'

    let pegaDadosLocalStorage = localStorage.nome
    dados.innerHTML = pegaDadosLocalStorage
}

