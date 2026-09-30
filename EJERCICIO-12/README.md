# Ejercicio 12 - App completa: Listado, selección y likes

## Qué he aprendido
- A juntar todas las piezas de los ejercicios anteriores (GET, parámetros, PATCH y estados) en una sola aplicación.
- A usar el componente `<Pressable>` de React Native para hacer que cualquier elemento (como una tarjeta de la lista) se pueda tocar como si fuera un botón.
- A mantener varios estados sincronizados: al dar un "like", la app actualiza la ficha de la criatura y a la vez recarga el listado completo para que todo cuadre.

## Qué he modificado
- He creado un estado para guardar el array de todas las criaturas (`criaturas`) y otro para guardar los detalles de la que el usuario decida tocar (`seleccionada`).
- He envuelto cada elemento de la `FlatList` con un `<Pressable>` enlazado a la función de buscar por ID.
- He configurado la función de dar like para que mande la petición PATCH al backend y luego refresque la interfaz automáticamente.

## Resultado
Una aplicación completa y funcional. Nada más abrirse, descarga un catálogo de criaturas desde NestJS. Si tocas una, se abre su ficha detallada. Si le das a "Me gusta", la orden viaja al servidor, se guarda, y la pantalla se actualiza en tiempo real mostrando el nuevo total de likes.