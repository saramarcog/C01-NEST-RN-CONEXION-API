# Ejercicio 08 - Arrays y listas dinámicas con FlatList

## Qué he aprendido
- A guardar listas enteras de datos (arrays)
- A utilizar el componente `<FlatList>` 
- A definir un tipo personalizado en TypeScript (`type Producto`) para que el frontend sepa exactamente qué forma tienen los datos que le manda NestJS (id, nombre, precio y emoji).

## Qué he modificado
- He creado la estructura en el backend (controlador y servicio de productos) para que devuelva un array de objetos JSON, y le he añadido un cuarto producto a la lista como pedía el reto.
- He implementado el componente `FlatList` vinculando su propiedad `data` a mi estado de productos.

## Resultado
Una aplicación que se descarga una lista completa de productos y los pinta de forma dinámica en la pantalla del móvil usando tarjetas.