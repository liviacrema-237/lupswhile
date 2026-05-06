let numero;
do {
    numero = Number(prompt("Digite um numero positivo:"));
    if (numero < 0) {
    alert("Erro! O numero deve ser positivo.");
    }
}while (numero <  0 || isNaN(numero));

alert("Numero válido digitado: " + numero);