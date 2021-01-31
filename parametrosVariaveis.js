//Arguments é um array com os parâmetros da função
function soma(){
    let soma = 0
    for (let i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma(2))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1+2+'teste')) //concatena / nonsense but works!




