/*

Requerimientos Lógicos (JavaScript):
        Crea una función central de renderizado llamada dibujarCartelera(listaDePeliculas). Esta función debe recibir una lista por parámetro, 
        vaciar el contenedor del HTML, y fabricar las tarjetas.
        Ejecuta la función enviando apiPeliculas de manera inicial para que la página muestre todo al cargar.
        El Filtro de Eventos: 1. Al hacer clic en "Ver Todas", invoca la función enviando el array completo original.
        2. Al hacer clic en "Mejores Calificadas", crea un array temporal vacío. Recorre apiPeliculas con un condicional: 
        si la puntuación del objeto actual supera 8.7, hazle un .push() a tu array temporal. 
        Finalmente, invoca tu función de renderizado enviándole ese nuevo array temporal filtrado.
        Tip de Tailwind: Haz que la puntuación parezca una etiqueta de calidad: 
        className = "bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full".

*/

const divContenedor = document.getElementById("div-contenedorPrincipal");
const btnListarTodas = document.getElementById("btn-listadoPeliculas");
const btnMejorCalificadas = document.getElementById("btn-peliculasMejorCalificadas");

// 🔑 Función central de renderizado
function dibujarCartelera(listaDePeliculas) {
    // Limpia el contenedor antes de dibujar
    divContenedor.innerHTML = "";

    listaDePeliculas.forEach(pelicula => {
        // Crear tarjeta contenedora
        const tarjeta = document.createElement("div");
        tarjeta.className = "bg-white shadow-md rounded-lg p-4 m-2";

        // Elementos de la tarjeta
        const elementoID = document.createElement("p");
        const elementoGenero = document.createElement("p");
        const elementoDuracion = document.createElement("p");
        const elementoPuntuacion = document.createElement("span"); // etiqueta especial
        const elementoSinopsis = document.createElement("p");

        // Asignar valores
        elementoID.textContent = `ID: ${pelicula.id}`;
        elementoGenero.textContent = `Género: ${pelicula.genero}`;
        elementoDuracion.textContent = `Duración: ${pelicula.duracion} min`;
        elementoPuntuacion.textContent = pelicula.puntuacion;
        elementoSinopsis.textContent = pelicula.sinopsis;

        // 🎖 Etiqueta de puntuación con estilo Tailwind
        elementoPuntuacion.className = "bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full";

        // Montar elementos en la tarjeta
        tarjeta.appendChild(elementoID);
        tarjeta.appendChild(elementoGenero);
        tarjeta.appendChild(elementoDuracion);
        tarjeta.appendChild(elementoPuntuacion);
        tarjeta.appendChild(elementoSinopsis);

        // Montar tarjeta en el contenedor principal
        divContenedor.appendChild(tarjeta);
    });
}

/*
// 🚀 Render inicial al cargar la página
dibujarCartelera(apiPeliculas);
*/

// 📌 Eventos de filtrado
btnListarTodas.addEventListener("click", () => {
    dibujarCartelera(apiPeliculas);
});

btnMejorCalificadas.addEventListener("click", () => {
    const filtradas = [];
    apiPeliculas.forEach(pelicula => {
        if (pelicula.puntuacion >= 8.7) {
            filtradas.push(pelicula);
        }
    });
    dibujarCartelera(filtradas);
});






