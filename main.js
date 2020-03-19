const array = [1, 2, 3, 5, 7, 9, 10];

const newArray = array.map(item => item * 2);

console.log(newArray);

const sum = array.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = array.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const soma = (a = 0, b = 0) => a + b;

console.log(soma(1, 8));

const usuario = {
    nome: 'Breno',
    idade: '27',
    endereço: {
        rua: 'Doutor Joaquim Frota',
        numero: '1060'
    }
}


const { nome, idade } = usuario;

console.log(nome, idade);
