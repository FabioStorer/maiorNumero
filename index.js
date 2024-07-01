const prompt = require('prompt-sync')();

let numero = prompt(`Olá. Vou retornar para você o maior número possível que pode ser feito com os algarismos que você fornecer. Digite um número: `).trim();

if (numero < 10) {
    console.log(`O maior número possível que pode ser gerado com o número informado é `, numero, `.`);
    process.exit();
}

numero = numero.split('');

for (let i = 0; i < numero.length; i++) {
    for (let j = 0; j < numero.length; j++) {
        if (numero[i] > numero[j]) {
            let aux = numero[i];
            numero[i] = numero[j];
            numero[j] = aux;
        }
    }
}

numero = numero.join('');
console.log(`O maior número possível que pode ser gerado com o número informado é `, numero, `.`);