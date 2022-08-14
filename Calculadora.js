function adicionar (num1, num2){
    let soma = num1+num2
    return soma
}

function subtrair(num1, num2){
    let subtrair = num1-num2
    return subtrair
}

function multiplicar(num1, num2){
    let multiplicar = num1*num2
    return multiplicar
}

function dividir(num1, num2){
    let dividir = num1/num2
    return dividir
}

function quadradoDoNumero(num){
let quadrado = multiplicar(num,num)
return quadrado 
}

function mediaDeTres (num1, num2, num3){
  let media =  dividir(adicionar(adicionar(num1, num2), num3), 3)
  return media
}

function porcentagem (num1, porcentagem){
  let valor_final = multiplicar( (dividir(porcentagem,100)),num1)
  return valor_final
}

function geradorPorcentagem (num1, num2){
 return  dividir( multiplicar(num1,100),num2)
}

console.log('-----------------Teste de operação / Calcular ----------------------')
console.log('-----------------Soma ----------------------')
console.log(adicionar(5,5))
console.log('-----------------Subtração ----------------------')
console.log(subtrair(5,5))
console.log('-----------------Multiplicação ----------------------')
console.log(multiplicar(5,5))
console.log('-----------------Divisão ----------------------')
console.log(dividir(5,5))
console.log('-----------------Quadrado ----------------------')
console.log(quadradoDoNumero(5))
//console.log(divir(5,0))
console.log('-----------------Média de 3 ----------------------')
console.log(mediaDeTres(10, 8, 7))
console.log('-----------------Porcentagem ----------------------')
console.log(porcentagem(300,15))
console.log('-----------------Gerador Porcentagem ----------------------')
console.log(geradorPorcentagem(2,200))
