const numero = parseInt(prompt("Digite um número: "));

let a = 0;
let b = 1;

while (b < numero) {
  const proximo = a + b;
  a = b;
  b = proximo;
}

if (b === numero) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}
