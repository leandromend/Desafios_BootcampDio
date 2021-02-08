// Introdução a  Programação com Javascript
// 3 / 3 - Folha de Pagamento

let num = parseInt(gets('25'));
let hours = parseInt(gets('5'));
let wage = parseFloat(gets('5.50'));
let salary = parseFloat(wage * hours).toFixed(2); // Digite aqui o cálculo do salário
console.log("NUMBER = " + num);
console.log("SALARY = U$  " + salary);