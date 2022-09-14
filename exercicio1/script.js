// //a)
// function ola(nome) {
//     nome = prompt("Qual é o seu nome?")
//     console.log(`Olá ${nome}`);
// }
// ola();

// //b)
// function tabuada(num) {
//     const tabuada1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     for (i in tabuada1) {
//         console.log(`${num} x ${tabuada1[i]} = ${num * tabuada1[i]} `)
//     }
// }

// tabuada(6)

//c) 

const ola = (nome) => {
    nome = prompt("Qual é o seu nome?")
    console.log(`Olá ${nome}`);
}

ola();

const tabuada = (num) => {
    const tabuada1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (i in tabuada1) {
        console.log(`${num} x ${tabuada1[i]} = ${num * tabuada1[i]} `)
    }
}

tabuada(6);