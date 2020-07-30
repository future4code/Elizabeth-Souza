// Exercícios de interpretação de código 

/* EXERCÍCIO 1

Ele indica se o número digitado é par ou ímpar. Ele imprime da mensagem "passou no teste" quando o número for par. Caso seja ímpar vai imprimir a mensagem "não passou no teste".


EXERCÍCIO 2

a. Para olhar o preço das frutas listadas.
b. A mensagem "O preço da fruta é R$ 2.25"
c. A mansagem "O preço da fruta  Pêra  é  R$  5". Como está sem o break, o código vai continuar rodando e ir para parte do default.


EXERCÍCIO 3

a. Está criando uma constante com um prompt para digitar os números.
b. Caso tenha digitado 10 a mensagem será "Esse número passou no teste". Caso seja -10 não vai ter uma mensagem porque ela não foi colocada de forma correta.
c.Sim. No escopo estava faltando aspas ao redor da mensagem do let.

*/

// Exercícios de escrita de código


// EXERCÍCIO 4

/*const idadeMaior = Number(prompt("Digite sua idade"))

if (idadeMaior >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
} */

// EXERCÍCIO 5

/*const horario = prompt("Digite seu horário")

if (horario === "M") {
    console.log("Bom dia!")
} else if (horario === "V"){
    console.log("Boa tarde!")
} else if (horario === "N") {
    console.log("Boa noite!")
} else {
    console.log("Horário não indetificado")
} */

// EXERCÍCIO 6

/*const horario = prompt("Digite seu horário")

switch (horario) {
    case "M" :
        console.log("Bom dia!")
        break
    case "V" :
        console.log("Boa tarde!")
        break
    case "N" :
        console.log("Boa noite!")
        break
    default :
         console.log ("Horário não indentificado")
} */

//EXERCÍCIO 7

const genero = prompt("Digite o gênero do filme")
const preco = prompt("Digite o preço do ingresso")

const fantasia = true
if (genero === fantasia ){
    console.log("Bom filme!")
} else if (preco <= 15){
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme :(")
}