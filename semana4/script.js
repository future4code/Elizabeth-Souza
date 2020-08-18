//------------------------------------------------------------- BLOCO 1------------------------------------------------------------

//Exercícios de interpretação de código

// 1. 
//    function conversorDeMoeda(valorEmDolar){   -> Aqui é a declaração da função com o parâmetro entre parênteses

//      const cotacao = Number(prompt("Informe o valor da cotação em Dólar"))  ->  aqui tem uma variável const cotacao com um valor Number(serve para indicar que o que vai ser
//                                                                                 vai ser digitado é um numero inteiro, com um prompt que vai perguntar qual o valor da cotação do Dólar.

//      return "R$" + (valorEmDolar * cotacao)  -> 
//   }
//    const meuDinheiro = conversorDeMoeda(100)
//    console.log(meuDinheiro)

// 


// 2. 
//     function investeDinheiro(tipoDeInvestimento, valor) {    -> Declaração da função investeDinheiro com dois parâmetros tipoDeInvestimento e valor.
                                                               
//       let valorAposInvestimento    -> variável 

//    switch (tipoDeInvestimento) {  -> switch com os tipos de investimetos

//        -> cada case abaixo vai ter o tipo de investimento. A variável valorAposInvestimento vai estar em cada uma delas
//           com uma operação como o valor da variável. A operação pega o valor que vai ser informado pelo usuário multiplicando
//           pelo valor que o investimeto ira acrescentar ao indicado pelo usuário

//        case "Poupança"     
//              valorAposInvestimento = valor * 1.03
//              breack
//        case "Renda Fixa":
//              valorAposInvestimento = valor *1.05
//        case "CDB":
//              valorAposInvestimento = valor * 1.1
//              breack
//        case "Acções:
//              valorAposInvestimento = valor *1.05
//        
//        default:  ->  o default serve caso o usuário indique um ivestimento que não está nas cases.

//               alert ("Tipo de investimento informado incorreto")   -> esse trecho do códico vai gerar um alerta caso o investimento não esteja na case
//               breack
//         }    
//      return valorAposInvestimento   ->  Vai retonar o resultado da operação da varíavel que esta dentro da case
//    }  

//       -> essas duas constantes abaixo estão indicando o tipo e investimento e o valor 
//          os valores vão passar pelas cases e a que tiver o investimento indicado vai 
//          fazer a operação

//      const novoMontante = investeDinheiro ("Ações", 150)    -> essa vai dar certo pois o investimento Ações foi indicado na case

//      const segundoMontante = investeDinheiro ("Tesouro Direto", 200)   -> esse vai parar o default pois p investimento Tesouro Direto não foi indicado na cases

//      -> o console.log serve para imprimir no console da máquina o resultado das operações das cases

//      console.log(novoMontante)   -> esse vai imprimir da const novoMontade pois esta está como parâmetro dele
                                     
//      console.log(segundoMontante)  -> esse vai imprimir da const segundoMontante. Vai aparecer no console a mensagem do default


// 3.  
//      const numeros = [25, 55, 64(, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283]  -> essa constante  numeros tem um valor de um array
             
//      -> esses dois abaixo tem o valor de um array vazio

//      const array1 = []   
//      const array2 = []

//      for ( let numero of numeros) {     -> a cada interação um valor da const numeros vai ser atribuido a let numero SE a condição for verdadeira

//           if(numero % 2 === 0)          -> aqui é para dizer se o número é par

//           array1.push(numero)            ->  se for par ele será atribuido ao array1
//      } else {
//            array2.push(numero)           -> caso não seja, será atribuido ao array2
//      }     
//     }
//       console.log ("Quantidade total de números", numeros.legth)   -> esse console.log vai imprimir a quantidade total de números dentro do array numeros
//       console.log(array1.legth)  -> esse vai imprimir a quantidade de numeros que foram considerados parese estão agora no array1
//       console.log(array2.legth)  -> e esse vai imprimir a quantidade de numeros que não foram considerados pares, no caso os ímpares que estão no array2
//       


//------------------------------------------------------------- BLOCO 2------------------------------------------------------------

//Exercícios de Lógica de Programação

// 1.

// a. filter, map e foreach 

// exemplo 

const amigos = [
    {nome:"breno", cidade:"Berilo", idade:21},
    {nome:"Geysivânia", cidade:"Berilo", idade:18},
    {nome:"Murilo", cidade:"São Paulo", idade:23},
    {nome:"Guilherme", cidade:"São Paulo", idade:18},
    {nome:"Fabio", cidade:"Sorocaba", idade:20},
    {nome:"Vitor", cidade:"Sorocaba", idade:18} 
    ]  // constante com array 

    amigos.forEach((amigo, indexDoArray, array) => {
        amigo.idade= 19
    })

   console.log(amigos)
    


// 2.

// a. false
// b. true
// c. true
// d. true
// e. false

