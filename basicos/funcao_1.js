function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 5, 6)
imprimirSoma()
imprimirSoma(null, null)
imprimirSoma(null, 0)
imprimirSoma(null)

console.log("-----")

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
console.log(soma(null))
console.log(soma(0))