const body = document.body 

const calculadora = document.createElement('div')

var nm = document.createTextNode("Calculadora")
var nm2 = document.createTextNode("Resultado")


const input1 = document.createElement('input')
const input2 = document.createElement('input') 

const soma = document.createElement('button')
const divi = document.createElement('button')
const men = document.createElement('button')
const mult = document.createElement('button')

const resposta = document.createElement('div')
const boto = document.createElement('div')

body.appendChild(calculadora)




calculadora.appendChild(nm)

boto.appendChild(soma)
boto.appendChild(divi)
boto.appendChild(men)
boto.appendChild(mult)
calculadora.appendChild(boto)
calculadora.appendChild(input1)
calculadora.appendChild(input2)
calculadora.appendChild(nm2)
calculadora.appendChild(resposta)


var plus = document.createTextNode("+")
soma.appendChild(plus)
var minu = document.createTextNode("-")
men.appendChild(minu)
var mut = document.createTextNode("x")
mult.appendChild(mut)
var di = document.createTextNode("/")
divi.appendChild(di)


input1.style.marginBottom = "10px"
input1.style.marginTop = "10px"
input1.style.width = "50px"
input1.style.height = "50px"

input2.style.marginBottom = "10px"
input2.style.marginTop = "10px"
input2.style.width = "50px"
input2.style.height = "50px"

resposta.style.display = "flex"
resposta.style.marginTop = "30px"
resposta.style.marginBottom ="30px"
resposta.style.height = "125px"
resposta.style.width = "250px"
resposta.style.backgroundColor = "black"
resposta.style.justifyContent = "center"
resposta.style.alignItems = "center"
resposta.style.color = "white"


calculadora.style.display = "flex"
calculadora.style.justifyContent = "center"
calculadora.style.alignItems = "center"
calculadora.style.flexDirection = "column"
calculadora.style.backgroundColor = "orangered"
calculadora.style.height = "500px"
calculadora.style.width = "500px"
calculadora.style.fontSize = "30px"
calculadora.style.borderRadius = "300px"
calculadora.style.color = "black"

//Estilizando o body:
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.height = "100vh"

//Estilizando os botões:
boto.style.display = "flex"
boto.style.alignItems = "flex-start"
boto.style.justifyContent = "space-between"
boto.style.width = "300px"





soma.style.backgroundColor ="white"
soma.style.border = "none"
soma.style.borderRadius = "200px"
soma.style.cursor = "pointer"
soma.style.height = "50px"
soma.style.width = "50px"


divi.style.backgroundColor ="white"
divi.style.border = "none"
divi.style.cursor = "pointer"
divi.style.height = "50px"
divi.style.width = "50px"
divi.style.borderRadius = "200px"


men.style.backgroundColor ="white"
men.style.border = "none"
men.style.cursor = "pointer"
men.style.height = "50px"
men.style.width = "50px"
men.style.borderRadius = "200px"


mult.style.backgroundColor ="white"
mult.style.border = "none"
mult.style.cursor = "pointer"
mult.style.height = "50px"
mult.style.width = "50px"
mult.style.borderRadius = "200px"



soma.addEventListener('click', () => {
    resposta.innerHTML = ""
    var resultado =  document.createTextNode(parseFloat(input1.value) + parseFloat(input2.value))
    resposta.appendChild(resultado)
})

men.addEventListener('click', () => {   
    resposta.innerHTML = ""
    var resultado =  document.createTextNode(parseInt(input1.value)-parseInt(input2.value))
    resposta.appendChild(resultado)
})

divi.addEventListener('click', () => {   
    resposta.innerHTML = ""
    var resultado =  document.createTextNode(parseInt(input1.value)/parseInt(input2.value))
    resposta.appendChild(resultado)
})

mult.addEventListener('click', () => {
    resposta.innerHTML = ""
    var resultado =  document.createTextNode(parseInt(input1.value)*parseInt(input2.value))
    resposta.appendChild(resultado)
})