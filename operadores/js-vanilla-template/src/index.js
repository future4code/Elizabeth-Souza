/*
 EXERCÍCIOS DE INTREPRETÇÃO DE CÓDIGO

 1. 
 const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", false)

resultado = bool1 && bool2 && bool3
console.log("b. ", false)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", true)

console.log("e. ", typeof resultado)

2. 
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)
*/

const idade = prompt("Qual sua idade?")
const idadeMenlhorAmigo = prompt("Qual a idade do seu mehlor amigo ou amiga?")

const valor = Number(idade) - Number(idadeMelhorAmigo)

console.log = ("idade", "idadeMelhorAmigo")

/*const idadeMaior = ("Sua idade é maior do que a do seu melhor amigo?")

const idade = true
const idadeMaior = true*/