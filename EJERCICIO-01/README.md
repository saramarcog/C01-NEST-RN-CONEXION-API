# Ejercicio 01 - Primer controlador en NestJS

## Qué he aprendido
- A entender la estructura básica de un archivo controlador.
- A devolver objetos JSON como respuesta directamente desde un método.

## Qué he modificado
- He cambiado el texto del `mensaje` original que devolvía la función `saludar()` por uno propio.
- He añadido una nueva propiedad al objeto JSON que se devuelve, incluyendo la clave `curso` con el valor `'DAM'`, tal y como pedía el reto paso a paso.

## Resultado
Al ejecutar el servidor y hacer una petición GET a la ruta `/hola`, la aplicación responde devolviendo un objeto JSON que contiene el dato del curso (DAM).