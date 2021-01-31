/* //Estratégia 1 para gerar valor padrão

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return(a+b+c)
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)) // no || (ou) 0 (zero) é tratado como falso

////Estratégia 2 para gerar valor padrão

function soma2(a,b,c){
    a = a !== undefined ? a : 1 //operador ternário / estritamente diferente não permite conversão de tipo ('1' !== 1 retorna verdadeiro' && '1' != 1 retorna falso)
    b = 1 in arguments ? b : 1  //índice 1 existe em arguments?
    c = isNaN(c) ? 1 : c        //isNaN() retorna verdadeiro ou falso
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//Testando propriedade apresentada na função anterior (segundo caso)
let a = [2,2,3]
if(1 in a){
    console.log('O valor 1 é um índice')
 } */

 
 //Valor padrão es2015 (forma mais atual e eficiente)

 function soma3 (a = 1, b = 1, c = 1){
    return a + b + c 
 }

 console.log(soma3())
 console.log(soma3(2,2,2))



