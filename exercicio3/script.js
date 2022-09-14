function soma(num1, num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

function subtracao(num1, num2) {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
}

function multiplicacao(num1, num2) {
    console.log(`${num1} x ${num2} = ${num1 * num2}`);
}

function divisao(num1, num2) {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

const num1 = Number(prompt(`Digite o primeiro número!`))
const num2 = Number(prompt(`Digite o segundo número!`))

soma(num1, num2);
subtracao(num1, num2);
multiplicacao(num1, num2);
divisao(num1, num2); 