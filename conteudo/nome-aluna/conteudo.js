// arrow function

function somar(n1, n2) {
  return n1 + n2
}

(n1, n2) => n1 + n2

// somar(n1, n2)

// spread operator

let compras = ['calça preta', 'blusa animal print', 'salto fino vermelho 12cm']
let novasCompras = ['argolas grandes de prata', ...compras, 'lace cacheada castanha']
// console.log(compras)
// console.log(novasCompras)

let numeros = [2, 3, 5]
let imprimir = (x, y, z, w) =>  console.log(`${x} - ${y} - ${z} - ${w}`)
// imprimir('Andréa', 'Gabi Cruz', 'Marta')
// imprimir(...numeros)
// imprimir(...compras, 'Priscila')

let notaFiscal = {
  nome: "",
  pagamento: "",
  compra: [...compras]
}
// console.log(notaFiscal)

let alunaPart1 = {nome: 'Jéssica', cidade: 'Recife'}
let alunaPart2 = {idade: '23', signo: 'Touro'}

let aluna = { ...alunaPart1, ...alunaPart2, corPreferida: 'Turquesa' }
// console.log(aluna)


const { corPreferida, cidade } = aluna
// console.log(corPreferida)
// console.log(cidade)
// rest parameter


function imprimirSoma(...argumentos) {
  console.log(argumentos.reduce((acumulador, atual) => acumulador + atual));
}

// imprimirSoma(2, 5, 4, 3);
// imprimirSoma(1, 8, 4, 5, 6, 9, 1, 2);
// imprimirSoma('lilit ', 'bandeira');


// atribuindo elementos para uma array
const arr = [5, 3, 7, 1, 9]

// desestruturando a array para extrair elementos desejados
const [first, second] = arr

// console.log(first) //retorno: 5
// console.log(second) //retorno: 3

// podemos usar o rest parameter para condensar os demais elementos numa nova array
const [primeiro, segundo, ...terceiro] = arr

console.log(terceiro) //retorno: [7, 1, 9]

// podemos usar o spread operator para espalhar os elementos na função .log()
// console.log(...terceiro) //retorno: 7 1 9
