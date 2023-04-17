
class Car {
    constructor(nome,ano){
        this.nome = nome;
        this.ano = ano;
    }

    idade(x) {
        return x - this.ano
    }

}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car('Ford',2000);

document.querySelector('.demo').innerHTML = `My car is ${myCar.age(year)} years old.`

