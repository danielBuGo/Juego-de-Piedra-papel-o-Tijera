let cont_victorias = 0;
let cont_derrotas = 0;
let cont_empates = 0 ;
let eleccionJugada = 0;
let victoriashumano = 0;
let victoriasMaquina = 0;

function iniciarJuego(){ 
    let botonEscoger = document.getElementById("boton-escoger");
    let spanResultados = document.getElementById("resumen_e");
    let seccionReiniciar = document.getElementById("reiniciar");
    let mensaje_jugada = document.getElementById("mensajeJugada");
    let jugarNuevamente = document.getElementById("jugarDeNuevo");
    spanResultados.innerHTML = "";
    seccionReiniciar.style.display ="none";
    mensaje_jugada.style.display = "none";
    botonEscoger.style.display = "none";
    jugarNuevamente.style.display = "none";    
    
    botonEscoger.addEventListener("click", eleccionJugador);
    
    
}
function habilitarBoton(){
    let inputPiedra = document.getElementById("piedra");
    let inputPapel = document.getElementById("papel");
    let inputTijera = document.getElementById("tijera");
    let botonEscoger = document.getElementById("boton-escoger");
    if((inputPiedra.checked) || (inputPapel.checked) || (inputTijera.checked)){
        botonEscoger.style.display = "block";
    }
}
function eleccionJugador(){
    let inputPiedra = document.getElementById("piedra");
    let inputPapel = document.getElementById("papel");
    let inputTijera = document.getElementById("tijera");
    let spanJugadaHumano = document.getElementById("jugada_h");
    let mensaje_jugada = document.getElementById("mensajeJugada");
    mensaje_jugada.style.display = "block"; 
            
    if(inputPiedra.checked){
        spanJugadaHumano.innerHTML = "Piedra"
        eleccionJugada = 1
    }else if (inputPapel.checked){
        spanJugadaHumano.innerHTML = "Papel"
        eleccionJugada = 2
    }else if(inputTijera.checked){
        spanJugadaHumano.innerHTML = "Tijera"
        eleccionJugada = 3
    }else{
        spanJugadaHumano.innerHTML ="";
    } 
    eleccionJugadaPc();

}
function eleccionJugadaPc(){
    let eleccionPc = aleatorio(1,3);
    let spanJugadaMaquina = document.getElementById("jugada_pc");   
    
    if(eleccionPc == 1){
        spanJugadaMaquina.innerHTML = "Piedra";
    }else if(eleccionPc == 2){
        spanJugadaMaquina.innerHTML = "Papel";
    }else if(eleccionPc == 3){
        spanJugadaMaquina.innerHTML = "Tijera";

    }else{
        spanJugadaMaquina.innerHTML = "";    
    }
    
    
    resultados(eleccionPc);

    
}
function resultados(eleccionPc){
    let spanResultados = document.getElementById("resumen_e");    
    if((eleccionJugada === 0)|| (eleccionPc === 0)){
        return;
    }
    if(eleccionJugada === eleccionPc){
        spanResultados.innerHTML = "Empataron!";
        cont_empates++;       
    }else if ((eleccionJugada === 1 && eleccionPc === 3) || (eleccionJugada === 2 && eleccionPc ===1) || (eleccionJugada === 3 && eleccionPc === 2)){        
        spanResultados.innerHTML = "Tu Ganaste!";
        cont_victorias++
    }else {
        spanResultados.innerHTML = "Tu perdiste";
        cont_derrotas++
    }
    eleccionJugada = 0;    
    if((cont_derrotas ===3) || (cont_victorias ===3)){
        mostrarResumenFinal();
    }
    
}
function mostrarResumenFinal() {
    let resumenFinal = document.getElementById("resumenFinal");
    resumenFinal.innerHTML = `Victorias: ${cont_victorias}, Derrotas: ${cont_derrotas}, Empates: ${cont_empates}`;
    let botonEscoger = document.getElementById("boton-escoger");
    botonEscoger.disabled = true;   
    let jugarNuevamente = document.getElementById("jugarDeNuevo");
    jugarNuevamente.style.display = "block";
    

}
function  jugarOtraVez(){
    let seccionReiniciar = document.getElementById("reiniciar");
    seccionReiniciar.style.display ="block";
    
}
function noJugarMas(){
    let botonEscoger = document.getElementById("boton-escoger");
    botonEscoger.style.display = "none";
    let botonSiJugar = document.getElementById("siJugar");
    botonSiJugar.disabled = true;
    let mensajeDespedida = document.getElementById("despedida");
    mensajeDespedida.innerHTML = "Gracias por jugar!! ";
    let seccionReiniciar = document.getElementById("reiniciar");
    seccionReiniciar.style.display ="block";
    

}
function reiniciarJuego(){    
    location.reload();
}
function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego);

