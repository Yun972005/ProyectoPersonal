function horaActual(){
    let fecha= new Date();
    let hora = fecha.getHoras();
    let minutos = fecha.getMinutos();
    let segundos = fecha.getSegundos();


    let tiempoEnPantalla = hora + ":" +minutos + ":" + "segundos";

   document.getElementById("reloj").innerText = tiempoEnPantalla;
}

setInterval(horaActual, 1000);
horaActual();