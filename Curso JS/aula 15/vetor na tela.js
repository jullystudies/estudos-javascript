let valores = [8, 6, 7, 2, 5, 1, 9]
valores.sort()

let num = [223, 4324, 5436, 324, 32443, 325]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in num) {
    console.log(`Isso literalmente significa: Para cada posição em ${num} eu vou mostrar ${num[pos]}`)
}

