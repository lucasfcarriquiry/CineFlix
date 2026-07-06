Ticket #5 (Desafío Final): Catálogo de Streaming (Filtro por Botones)
Cliente: Plataforma "CineFlix"
Contexto: Mostrar la cartelera basada en la lista apiPeliculas e implementar botones que filtren
qué películas se muestran en pantalla según su puntuación.
Requerimientos de Interfaz (HTML):
● Un contenedor principal para las películas.
● Dos botones superiores: "Ver Todas" y "Mejores Calificadas (Más de 8.7)".
Requerimientos Lógicos (JavaScript):
● Crea una función central de renderizado llamada dibujarCartelera(listaDePeliculas). Esta
función debe recibir una lista por parámetro, vaciar el contenedor del HTML, y fabricar las
tarjetas.
● Ejecuta la función enviando apiPeliculas de manera inicial para que la página muestre todo
al cargar.
● El Filtro de Eventos: 1. Al hacer clic en "Ver Todas", invoca la función enviando el array
completo original.
2. Al hacer clic en "Mejores Calificadas", crea un array temporal vacío. Recorre apiPeliculas
con un condicional: si la puntuación del objeto actual supera 8.7, hazle un .push() a tu array
temporal. Finalmente, invoca tu función de renderizado enviándole ese nuevo array
temporal filtrado.
Tip de Tailwind: Haz que la puntuación parezca una etiqueta de calidad: className =
"bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full".