# Ejercicio 10 - Actualizar datos (PATCH)

## Qué he aprendido
- A cambiar el tipo de petición HTTP en el `fetch` configurándolo con `{ method: 'PATCH' }`.
- A modificar un dato concreto en el servidor (sumar un like) en lugar de solo leer información.
- A actualizar la interfaz visual usando la respuesta actualizada que me devuelve el backend.

## Qué he modificado
- He añadido la configuración `{ method: 'PATCH' }` a la llamada `fetch` hacia la ruta del like.
- He enlazado el botón "❤️ Me gusta" a la función `darLike`.
- He modificado el estado para que pinte en pantalla la nueva cantidad de likes que devuelve NestJS.

## Resultado
Un contador de likes interactivo y real. Al pulsar el botón, la aplicación le manda la orden  de sumar un like, el servidor guarda el cambio, y la pantalla del móvil se actualiza al instante con el nuevo número.