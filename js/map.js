
if(!localStorage.getItem("logged")){
    window.location.href= "/index.html";
}
let map = L.map("map").setView([25.2841478, 51.4419568], 13); 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {             
    maxZoom: 19,                                      
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'                   
}).addTo(map); 

let icon = L.icon({
    iconUrl: "recursos/marcador.png",
    iconSize: [32, 32],
    iconAnchor: [9, 44],
    popupAnchor: [8, -41],
  });
var marker = L.marker([25.2841478, 51.4419568]).addTo(map);

const objetoMapa = [
    {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
    },
    {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
    },
    {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
    },
    {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
    },
    ];
let select = document.querySelector("select");
let opciones = objetoMapa.map( x => {
    return `<option>${x.jugador}</option>`;    
})
select.innerHTML = opciones.join().replace(","," ");

function changeMap() {
    const objeto = objetoMapa.find((item) => item.jugador === select.value);
    map.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada, { icon }).addTo(map);
    marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
    }

const cerrarSesion = () =>{
        localStorage.removeItem('logged');
        window.location.href="/index.html";
    }
