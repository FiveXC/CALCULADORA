//INSERINDO O NUMEROS NA AREA DE RESULTADO
function inserir(number) {
let numero = document.querySelector(".resultado").innerHTML // SERVE PARA INSERIR OS NUMEROS
let juntandonumeros = document.querySelector(".resultado").innerHTML= numero + number // SERVE PARA DEIXAR UM NUMERO DO LADO DO OUTRO SEM ELES SE ANULAREM
}
//PARA LIMPAR TUDO
function limpar(){
    let limparnumeros = document.querySelector(".resultado").innerHTML = "" 
//PARA DELETAR UM NUMERO UM DE CADA VEZ
}
function deletar() {
    let deletarnumeros = document.querySelector (".resultado").innerHTML;
    document.querySelector(".resultado").innerHTML = deletarnumeros.substring(0, deletarnumeros.length - 1); //SUBSTRING SERVE PARA PEGAR TODOS OS CARACTERES DENTRO DO RESULTADO E TIRAR 1
}

function calcular(number){
    let calculando = document.querySelector(".resultado").innerHTML 
    if(calculando){
        document.querySelector(".resultado").innerHTML = eval(calculando) // EVAL SERVE PARA FAZER TODAS AS OPERAÇÕES POR EXEMPLO 5 – 5, 5 + 5 e etc
    }
    else{
        document.querySelector(".resultado").innerHTML = `SEM VALOR`
    }
}
