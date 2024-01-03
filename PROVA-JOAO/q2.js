const capitalizartitulos = (titulos) => {
    return titulos.map(titulo => titulo.split(' ').map
    (palavra => palavra.charAt(0).toUpperCase() + 
    palavra.slice(1)).join(' '))
}

const titulosL = ["o pequeno príncipe", "dom casmurro", "a metamorfose"]
const tituloscapitalizados = capitalizartitulos(titulosL)

console.log(tituloscapitalizados)