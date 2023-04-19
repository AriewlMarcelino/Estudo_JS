//Seleção de elementos
function eDomindo2014e2050(){

    let diasDaSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabádo']

    let  domingo = diasDaSemana[0]


    let ano2014 = new Date('Jan 01 2014')
    let ano = ano2014.getFullYear()
    let mes = ano2014.getMonth()
    let dia = ano2014.getDay()

    let ano2050 = new Date('Jan 01 2050')
    let an = ano2050.getFullYear()
    let ms = ano2050.getMonth()
    let d = ano2050.getDay()
    
    if(dia == 0){
        document.querySelector('.quatorze').innerHTML = 'É domingo'
    }else {
        document.querySelector('.quatorze').innerHTML = 'Não é domingo'
    }

    
    if(d == 0){
        document.querySelector('.cinquenta').innerHTML = 'É domingo'
    }else {
        document.querySelector('.cinquenta').innerHTML = 'Não é domingo'
    }
}



eDomindo2014e2050()









