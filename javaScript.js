const API_URL = 'https://worldtimeapi.org/api/timezone';
 

function horaActual(){
    let fecha= new Date();

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    // Usamos el método .toString().padStart(2, '0')
        hora = hora.toString().padStart(2, '0');
        minutos = minutos.toString().padStart(2, '0');
        segundos = segundos.toString().padStart(2, '0');

    let tiempoEnPantalla = hora + ":" +minutos + ":" + segundos;

   document.getElementById("reloj").textContent = tiempoEnPantalla;
}

function sitioHora(){
    let sitio=new Sitio();
    

     document.getElementById("sitio").textContent = sitio;
}
horaActual();
setInterval(horaActual, 1000);
