//Higher order function (função como dado e pode ser passada como parâmetro)
//Criar de forma literal
function funcao1() {
    //retorna undefined como padrão
}

//Armazenar em uma variável (armazenar função anônima)
//Funções anônimas são funções que não estão vinculadas a um identificador
const funcao2 = function() {}

//Armazenar em um array
function funcao3(a,b){
    return a + b
}
const array = [funcao1,funcao2,funcao3]
console.log(array[2](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Passar parâmetro 

function teste(){
    return 'teste'
}
function run(fun){
    console.log(fun())
}
run(teste)

//Uma função pode retornar/conter uma função

function soma(a,b) {
    return function(c){
        return a+b+c
    }
}

const funcaoRetorno = soma(1,2)
console.log(funcaoRetorno(3))
console.log(soma(1,2)(3))
