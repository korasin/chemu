let firstNumber = 0;
let secondNumber = 0;
let symbol = "+"


$(document).ready(function(){
    $("#1").click(function(){
        firstNumber = 1
    })
    $("2").click(function(){
        secondNumber = 2
    })
    $("plus").click(function(){
        symbol = "+"
    })
})

let result = Number.toString(firstNumber) + symbol + Number.toString(secondNumber)
console.log(result)