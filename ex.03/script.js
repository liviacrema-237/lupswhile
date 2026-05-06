let total = 0;
let valor;

do {
    valor = Number(prompt("Digite o valor do produto (ou 0 para finalizar):"));
    if (valor > 0) {
        total += valor;
    }
} while (valor !== 0);

alert("Total da compra: R$ " + total.toFixed(2));