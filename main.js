let miVariableNueva // Buenas prácticas: empezar con minus y las palabras que siguen primer letra en mayus
// Nombres de variables NO pueden empezar con números ni guión bajo. También se suele usar palabras separadas por guión bajo.

// let no se puede redeclarar pero si reasignar valor

// const snake_case = "algo" // no se puede redeclarar ni reasignar valor

 
let num1 = 10
let num2 = "35"
// let suma = 10 + "35" // devuelve "1035"
let nombre = "joaquin"

console.log("Mi nombre es " + nombre + " y mi edad es " + num2) 

console.log(num2)

// hasta acá num2 es string. A pesar de que num2 vaya como string puedo sumar con:
// parse no modifica la variable original sino que le asigna un nuevo valor como numero
num2 = parseInt(num2)
// aca puedo verlo como numero
console.log(num2)
// la otra opcion es usar Number: num2 = Number(num2) // acá si se respetan los decimales, con parse int no (integra)

console.log(num1 + num2)
console.log(num1 + nombre) // nro + string concatena = 10joaquin
console.log(num1 - nombre) // no concatena = NaN (not a number)

let mensaje = Number(prompt("Ingresa tu edad"))

// mensaje = Number(mensaje)

console.log(mensaje)

let alerta = alert("Mi nombre es " + nombre + " y mi edad es " + (num2 + mensaje))
// aca va aparecer lo que ponga en el mensaje mas num2 o sea 35+mensaje en string ya que todo lo que ingreso por promt va como string
// si quiero que vaya sumado lo que puedo hacer es
// mensaje = Number(mensaje) debe ir puesto abajo del prompt
// otra forma es poner el numer al prompt