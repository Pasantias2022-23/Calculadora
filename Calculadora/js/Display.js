class Display{
    constructor(displayValorActual,displayValorAnterior){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.historialRespuestas = document.querySelector(".historial-resultados");
        this.tipoOperacion = undefined;
        this.valorActual = ``;
        this.valorAnterior = ``;
        this.resultado= ``;
        this.i = 1;
        this.calculador = new Calculadora();
        this.signos = {
            sumar: `+`,
            dividir: `%`,
            restar: `-`,
            multiplicar: `x`,
            potenciar: `^`,
            raiz: `√`,
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValor();
    }

    borrarTodo(){
        this.valorActual = ``;
        this.valorAnterior = ``;
        this.tipoOperacion = undefined;
        this.imprimirValor();
    }

    agregarNumero(numero){
        if(numero === `.` && this.valorActual.includes(`.`)) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValor();
    }

    agregarPi(){
        this.valorActual = this.valorActual.toString() + Math.PI.toString();
        this.imprimirValor();
    }

    imprimirValor(){
        this.displayValorActual.textContent = this.valorActual;
        if(this.tipoOperacion === `raiz`) return
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ``}`;
    }

    computar(tipo){
        this.tipoOperacion !== `igual` && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = ``;
        this.imprimirValor();
    }

    calcularRaiz(tipo){
        this.tipoOperacion = tipo;
        this.valorActual = `√` ;
        this.imprimirValor();
    }


    calcular(){

        if(this.tipoOperacion !==  `raiz`){
            const valorAnterior = parseFloat(this.valorAnterior);
            const valorActual = parseFloat(this.valorActual);

            if( isNaN(valorActual) || isNaN(valorAnterior) ) return
            this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
        }

        if (this.tipoOperacion == `raiz`){
            this.valorActual = this.valorActual.slice(1);
            console.log(this.valorActual);
            const valorActual = parseFloat(this.valorActual);
            console.log(valorActual);
            if( isNaN(valorActual) ) return
            this.valorActual = this.calculador[this.tipoOperacion](valorActual);
        }
        this.historial = this.valorActual;
        this.agregarResultado();

        
    }

    agregarResultado(){
        this.historialRespuestas.innerHTML +=
        `
        <div class="resultado">${this.i})-${this.historial}</div>
        `
        ;
        this.i++;
    }
}

// class Historial {
//     constructor(resultado){
//         this.resultado = resultado;
//         }

   

//     imprimirResultado(){
//     }
// }

// const historial = document.querySelector(".historial");