
let data = new Date()
let mes = data.getMonth()
let dia = data.getDay()
let ano = data.getFullYear()


function imprimir(){
    document.querySelector('.demo').innerHTML = `0${data.getMonth()}-${dia}-${data.getFullYear()}`
}

imprimir()






