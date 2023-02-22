const cambio = function(){

    let tema = document.querySelector("#tema");
        def = document.querySelector("#default");
        rojo = document.querySelector("#rojo");
        negro = document.querySelector("#negro");
        verde = document.querySelector("#verde");
        active = false;
        
    rojo.addEventListener("click", function(){
        tema.setAttribute("href","css/rojo.css");
        active = false;
    });

    negro.addEventListener("click",function(){
        if(active === false){
        tema.setAttribute("href","css/negro.css");
        negro.classList.add("selected");
        active = true;
        }
    });

    verde.addEventListener("click", function(){
        tema.setAttribute("href","css/verde.css");
        active = false;
    });

    def.addEventListener("click",function(){
        tema.setAttribute("href","css/index.css");
        active = false;
    })
}();

const cambioSubtema = function(){

    let tema = document.querySelector("#tema");
        celeste = document.querySelector("#cel");
        rojo = document.querySelector("#roj");
        verde = document.querySelector("#ver");
        naranja = document.querySelector("#nar");
        amarillo = document.querySelector("#ama");
        rosa = document.querySelector("#ros");
        blanco = document.querySelector("#bla");
        morado = document.querySelector("#mor");
    
    celeste.addEventListener("click",function(){
        tema.setAttribute("href","css/negro.css");
    })
    rojo.addEventListener("click",function(){
        tema.setAttribute("href","css/subtema/roj.css");
    })
    verde.addEventListener("click",function(){
        tema.setAttribute("href","css/subtema/ver.css");
    })
    naranja.addEventListener("click",function(){
        tema.setAttribute("href","css/subtema/nar.css");
    })
    amarillo.addEventListener("click",function(){
        tema.setAttribute("href","css/subtema/ama.css");
    })
    rosa.addEventListener("click",function(){
        tema.setAttribute("href","css/subtema/ros.css");
    })
    blanco.addEventListener("click",function(){
        tema.setAttribute("href","css/subtema/bla.css");
    })
    morado.addEventListener("click",function(){
        tema.setAttribute("href","css/subtema/mor.css");
    })
}();

