//Atribuição e concatenação
const nome = "Beatriz Medina";
const idade = "25";
const ehMaiorDeIdade = true;

console.log(nome);
console.log(idade);
console.log(ehMaiorDeIdade);

console.log(nome, idade, ehMaiorDeIdade);
console.log(nome + idade + ehMaiorDeIdade);
console.log("Meu nome é " + nome + " e tenho " + idade + " anos");

//Operações

const soma = 20 + 5;
const subtracao = 200 - 33;
const multiplicacao = 11 * 17;
const divisao = 66/3;
const restoDeDivisao = 20 % 7;

const total = 300 + subtracao;

console.log(soma, subtracao, multiplicacao, divisao, restoDeDivisao, total);

//Condicoes

// if (total > 500) {
//     console.log("O total é maior que 500");
// } else {
//     console.log(" O total é menor que 500");
// }

if (total > 500) {
    console.log("O total é maior que 500");
} else if (total > 400) {
    console.log(" O total é maior que 400");
}else {
    console.log(" O total não é é maior que 400");
}

//ternário
//total > 500 ? console.log("O total é maior que 500") : console.log(" O total é menor que 500");

/* operadores de comparacao

== igual a 
=== estritamente igual a
!= diferente de
!== estritamente diferente de
> maior que
< menor que
>= maior igual que
<= menor igual que


*/

const primeiroValor = 3;
const segundoValor = "3";

console.log( primeiroValor == segundoValor);
console.log( primeiroValor === segundoValor);
console.log( typeof primeiroValor);
console.log( typeof segundoValor);


console.log( primeiroValor != segundoValor);
console.log( primeiroValor !== segundoValor);