
// FUNÇÃO PARA RETORNAR O DIA;
function diasSemana(){
    let diasDaSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado']
    let data = new Date()
    let dias = data.getDay()
    let mostrarData = document.querySelector('.demo').innerHTML = `Hoje é: ${diasDaSemana[dias]}`
}

diasSemana()

//FUNÇÃO PARA TRAZER A HORA EM TEMPO REAL COM SETINTERVAL
function horas(){
    let horas = new Date();
    let hrs = horas.getHours()
    let min = horas.getMinutes()
    let seg = horas.getSeconds()
    let mostrarRelogio = document.querySelector('.demo1').innerHTML = `hora atual: ${hrs} PM : ${min} : ${seg}`
}

setInterval(horas, 1000);

