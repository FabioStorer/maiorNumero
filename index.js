const prompt = require('prompt-sync')();

let numero = prompt(`Olá. Vou retornar para você o maior número possível que pode ser feito com os algarismos que você fornecer. Digite um número: `).trim();

if (isNaN(Number(numero))) {
    console.log('Número inválido.');
} else if (numero < 10) {
    console.log(`O maior número possível que pode ser gerado com o número informado é`, numero, `.`);
    process.exit();
} else {
    numero = numero.split('');
}


for (let i = 0; i < numero.length; i++) {
    for (let j = i + 1; j < numero.length; j++) {
        if (numero[i] < numero[j]) {
            let aux = numero[i];
            numero[i] = numero[j];
            numero[j] = aux;
        }
    }
}

numero = Number(numero.join(''));
console.log(`O maior número possível que pode ser gerado com o número informado é`, numero, `.`);