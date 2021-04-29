// Por padrão o node faz cache (Singleton)
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}