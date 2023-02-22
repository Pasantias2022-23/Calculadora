const numeros = document.querySelectorAll(".numero");
const operador = document.querySelectorAll(".operador");
const displayValorActual = document.getElementById("valor-actual");
const displayValorAnterior = document.getElementById("valor-anterior");
const pi = document.querySelector(".pi");
const raiz = document.querySelector(".raiz");
const calculadora = new Calculadora();
const display = new Display(displayValorActual,displayValorAnterior);

numeros.forEach(boton =>{
    boton.addEventListener("click",()=>{ display.agregarNumero(boton.innerHTML) })
})

operador.forEach(boton=>{
    boton.addEventListener("click",()=>{ display.computar(boton.value)})
})

pi.addEventListener("click",()=>{ display.agregarPi()})

raiz.addEventListener("click",()=>{ display.calcularRaiz(raiz.value)})

