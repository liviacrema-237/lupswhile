let nome, sobrenome;

do {
    nome = prompt("Digite seu primeiro nome:");
} while (!nome || nome.trim() === "");

do {
    sobrenome = prompt("Digite seu sobrenome:");
} while (!sobrenome || sobrenome.trim() === "");

alert("Nome completo: " + nome + " " + sobrenome);