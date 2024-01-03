const verificarNumero = () => {
    return new Promise((resolve, reject) => {
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1

        if (numeroAleatorio >5){
            resolve('numero alto')
        } else {
            reject("numero baixo")
        }
    })
}
verificarNumero()
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.error(erro))