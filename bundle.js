"use strict";

var array = [1, 2, 3, 5, 7, 9, 10];
var newArray = array.map(function (item) {
  return item * 2;
});
console.log(newArray);
var sum = array.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};

console.log(soma(1, 8));
var usuario = {
  nome: 'Breno',
  idade: '27',
  endereço: {
    rua: 'Doutor Joaquim Frota',
    numero: '1060'
  }
};
var nome = usuario.nome,
    idade = usuario.idade;
console.log(nome, idade);
