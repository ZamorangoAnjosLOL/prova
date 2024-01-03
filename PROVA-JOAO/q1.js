
function formatarcontato (contato){
    const {nome, email, telefone} = contato
    return `Nome: ${nome}, 
    Email: ${email}, 
    Telefone${telefone}`
}

const contato = {
    nome: "Ana Silva",
    email: "ana.silva@exemple.com",
    telefone: "123456789"
}


const Formatado = formatarcontato(contato)
console.log(Formatado)
console.log(contato)
