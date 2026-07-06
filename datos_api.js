/* ==========================================================================
   MOCK API: ARCHIVO DE DATOS DE PRUEBA
   Vincular este archivo en el HTML ANTES de tu archivo app.js
   Ejemplo:
   <script src="datos_api.js"></script>
   <script src="app.js"></script>
   ========================================================================== */

// Base de datos de Productos (E-commerce)
const apiProductos = [
    {
        id: 101,
        nombre: "Auriculares Inalámbricos Pro",
        precio: 85000,
        categoria: "Audio",
        disponible: true,
        envioGratis: true
    },
    {
        id: 102,
        nombre: "Teclado Mecánico RGB",
        precio: 42000,
        categoria: "Periféricos",
        disponible: true,
        envioGratis: false
    },
    {
        id: 103,
        nombre: "Monitor Gamer 27' QHD",
        precio: 295000,
        categoria: "Pantallas",
        disponible: false,
        envioGratis: true
    },
    {
        id: 104,
        nombre: "Mouse Ergonómico Vertical",
        precio: 23000,
        categoria: "Periféricos",
        disponible: true,
        envioGratis: false
    },
    {
        id: 105,
        nombre: "Laptop Ultrabook 14\"",
        precio: 1150000,
        categoria: "Computadoras",
        disponible: true,
        envioGratis: true
    },
    {
        id: 106,
        nombre: "Silla Gamer Ergonómica",
        precio: 250000,
        categoria: "Mobiliario",
        disponible: true,
        envioGratis: true
    },
    {
        id: 107,
        nombre: "Micrófono de Condensador USB",
        precio: 65000,
        categoria: "Audio",
        disponible: false,
        envioGratis: false
    },
    {
        id: 108,
        nombre: "Smartwatch Serie 8",
        precio: 120000,
        categoria: "Wearables",
        disponible: true,
        envioGratis: true
    },
    {
        id: 109,
        nombre: "Tablet Pro 11\"",
        precio: 450000,
        categoria: "Computadoras",
        disponible: false,
        envioGratis: true
    },
    {
        id: 110,
        nombre: "Cámara Web 4K",
        precio: 85000,
        categoria: "Periféricos",
        disponible: true,
        envioGratis: false
    }
];

// Base de datos de Películas (Plataforma de Streaming)
const apiPeliculas = [
    {
        id: 1,
        titulo: "El Origen",
        genero: "Ciencia Ficción",
        duracion: "2h 28m",
        puntuacion: 8.8,
        sinopsis: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños."
    },
    {
        id: 2,
        titulo: "Parásitos",
        genero: "Drama / Suspenso",
        duracion: "2h 12m",
        puntuacion: 8.6,
        sinopsis: "La codicia y la discriminación de clases amenazan la recién formada relación simbiótica entre una familia adinerada y otra humilde."
    },
    {
        id: 3,
        titulo: "Interestelar",
        genero: "Ciencia Ficción",
        duracion: "2h 49m",
        puntuacion: 8.7,
        sinopsis: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad."
    },
    {
        id: 4,
        titulo: "Matrix",
        genero: "Ciencia Ficción / Acción",
        duracion: "2h 16m",
        puntuacion: 8.7,
        sinopsis: "Un hacker informático descubre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores."
    },
    {
        id: 5,
        titulo: "El Padrino",
        genero: "Crimen / Drama",
        duracion: "2h 55m",
        puntuacion: 9.2,
        sinopsis: "El envejecido patriarca de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su reacio hijo."
    },
    {
        id: 6,
        titulo: "Avengers: Endgame",
        genero: "Acción / Aventura",
        duracion: "3h 1m",
        puntuacion: 8.4,
        sinopsis: "Después de los devastadores eventos de Infinity War, los Vengadores se reúnen una vez más para revertir las acciones de Thanos."
    },
    {
        id: 7,
        titulo: "El Caballero de la Noche",
        genero: "Acción / Crimen",
        duracion: "2h 32m",
        puntuacion: 9.0,
        sinopsis: "Cuando la amenaza conocida como el Guasón causa estragos y caos en la gente de Gotham, Batman debe aceptar una de las mayores pruebas psicológicas y físicas."
    },
    {
        id: 8,
        titulo: "Toy Story",
        genero: "Animación / Aventura",
        duracion: "1h 21m",
        puntuacion: 8.3,
        sinopsis: "Un vaquero de juguete se siente profundamente amenazado y celoso cuando un nuevo muñeco espacial se convierte en el favorito de su dueño."
    },
    {
        id: 9,
        titulo: "Guasón",
        genero: "Crimen / Drama",
        duracion: "2h 2m",
        puntuacion: 8.4,
        sinopsis: "En Gotham, un comediante ignorado por la sociedad es arrastrado hacia la locura y el crimen."
    },
    {
        id: 10,
        titulo: "Spider-Man: Un Nuevo Universo",
        genero: "Animación / Acción",
        duracion: "1h 57m",
        puntuacion: 8.4,
        sinopsis: "El adolescente Miles Morales se convierte en el Spider-Man de su universo y debe unirse a otros individuos con poderes arácnidos de otras dimensiones para detener una amenaza común."
    }
];

// Base de datos de Usuarios (Dashboard Corporativo)
const apiUsuarios = [
    {
        nombre: "Sofía Martínez",
        puesto: "Diseñadora UX/UI",
        activo: true,
        iniciales: "SM",
        colorFondo: "bg-purple-500"
    },
    {
        nombre: "Mateo Rodríguez",
        puesto: "Desarrollador Backend",
        activo: false,
        iniciales: "MR",
        colorFondo: "bg-blue-500"
    },
    {
        nombre: "Camila Fernandez",
        puesto: "Product Manager",
        activo: true,
        iniciales: "CF",
        colorFondo: "bg-emerald-500"
    },
    {
        nombre: "Lucas Pérez",
        puesto: "Analista de Datos",
        activo: false,
        iniciales: "LP",
        colorFondo: "bg-amber-500"
    },
    {
        nombre: "Valentina Gómez",
        puesto: "Especialista en Marketing",
        activo: true,
        iniciales: "VG",
        colorFondo: "bg-pink-500"
    },
    {
        nombre: "Diego Ramírez",
        puesto: "Desarrollador Frontend",
        activo: true,
        iniciales: "DR",
        colorFondo: "bg-cyan-500"
    },
    {
        nombre: "Ana López",
        puesto: "Recursos Humanos",
        activo: true,
        iniciales: "AL",
        colorFondo: "bg-rose-500"
    },
    {
        nombre: "Javier Blanco",
        puesto: "DevOps Engineer",
        activo: false,
        iniciales: "JB",
        colorFondo: "bg-slate-500"
    }
];