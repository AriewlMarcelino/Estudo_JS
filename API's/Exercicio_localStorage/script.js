function ArmazenaLocalStorage() {

    //pega o campo de input;
    let input1 = document.querySelector('.ipt1');
    let input2 = document.querySelector('.ipt2');
    let input3 = document.querySelector('.ipt3');

    let value1 = localStorage.setItem('nome',input1.value)
    let value2 = input2.value.setItem('lastname',input2.value)
    let value3 = input3.value.setItem('age', input3.value)

}



