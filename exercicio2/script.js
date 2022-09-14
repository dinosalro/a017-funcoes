//a)

function a(num1, num2) {
    let soma = num1 + num2
    console.log(`A soma dos números é ${soma}`);
}

a(2, 4);

//b)

function b(num1, num2) {

    console.log(num1 >= num2);
}

b(5, 4);

//c

function c(num) {
    if (num % 2 === 0) {
        console.log(`O ${num} é par!`);
    } else {
        console.log(`O ${num} é impar!`);
    }
}

c(6);

//d
function d(string) {
    console.log(`A mensagem ${string.toUpperCase()} tem ${string.length} caracteres!`)

}

d("Rosa é uma cor bonita");