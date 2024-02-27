/* Nos vamos de vacaciones a Tarragona (100km)


- Tenemos un GPS que cuenta de 100km a los 0km (nos dice qué distancia queda), y nos da unos
mensajes con imágenes según la distancia.

Ubicar 4 botones: 100km, 50km, 15km y llegada:

Mensajes


- Cuando quedan 100 km : “Arrancamos!”. Incluir imagen de donde estás.


- Cuando quedan 50 km: “Ya vamos por la mitad!”. Incluir imagen de donde estás.


- Cuando quedan 15 km: “Ya casi estamos!”. Incluir imagen de donde estás.


- Cuando quedan 0 km: “Llegamos! Vivan las vacaciones!”. Incluir imagen de donde estás.

OJO, este último debe contener una ventana de cerrar (X). Al cerrar la imagen, también desaparecen los botones y título inicial, y se sustituye todo por una sola imagen final, que es una imagen de fondo sobre el body del documento.

Buen viaje!
*/

function cienKm() {
  document.querySelector(".imagen-manresa-100").style.display = "block";
  document.querySelector(".imagen-manresa-100").style.backgroundImage =
    "url(img/manresa.jpg)";
  document.querySelector(".imagen-manresa-100").innerHTML =
    "<h1>Arrancamos! Estamos en Manresa, a 113 km de Tarragona!</h1>";
}

function cincuentaKm() {
  document.querySelector(".imagen-vilafranca-50").style.display = "block";
  document.querySelector(".imagen-vilafranca-50").style.backgroundImage =
    "url(img/vilafranca.jpg)";
  document.querySelector(".imagen-vilafranca-50").innerHTML =
    "<h1>Ya vamos por la mitad! Estamos en Vilafranca del Penedès, a 54 km de Tarragona!</h1>";
  document.querySelector(".imagen-manresa-100").style.display = "none";
}

function quinceKm() {
  document.querySelector(".imagen-altafulla-15").style.display = "block";
  document.querySelector(".imagen-altafulla-15").style.backgroundImage =
    "url(img/altafulla.jpeg)";
  document.querySelector(".imagen-altafulla-15").innerHTML =
    "<h1>Ya casi estamos! Estamos en Altafulla, a 14 km de Tarragona!</h1>";
  document.querySelector(".imagen-vilafranca-50").style.display = "none";
}

function ceroKm() {
  document.querySelector(".imagen-tarragona-0").style.display = "block";
  document.querySelector(".imagen-tarragona-0").style.backgroundImage =
    "url(img/tarragona.jpg)";
  document.querySelector(".imagen-tarragona-0").innerHTML =
    "<h1>Ya llegamos! Vivan las vacaciones!</h1>";
  document.querySelector(".imagen-altafulla-15").style.display = "none";
  document.querySelector("#cerrar").style.display = "block";
}

function cerrar() {
  document.querySelector(".imagen-final").style.display = "block";
  document.querySelector(".gps").style.display = "none";
  document.querySelector(".imagen-tarragona-0").style.display = "none";
  document.querySelector(".imagen-final").style.backgroundImage =
    "url(img/tarragona-2.jpg)";
  document.querySelector("h1").style.display = "none";
  document.querySelector("p").style.display = "none";
  document.querySelector("#texto-final").style.display = "block";
}
