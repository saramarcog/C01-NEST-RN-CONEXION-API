# Ejercicio 11 - Enviar datos (POST) y recargar lista

## Qué he aprendido
- A enviar datos nuevos al servidor usando el método `POST` en el `fetch`.
- A encadenar acciones: enviar el producto, limpiar las cajas de texto y volver a descargar la lista automáticamente para que el usuario vea su producto recién añadido.

## Qué he modificado
- He añadido dos `TextInput` (uno normal para el nombre y otro numérico para el precio) vinculados a sus respectivos estados.
- He implementado la función que hace la petición POST.
-He añadido un nuevo producto desde el formulario.
## Resultado
Un formulario completo conectado a la base de datos. Escribes un producto y su precio, pulsas "Añadir", la app lo envía al servidor, y la pantalla se recarga sola mostrando el nuevo elemento en la lista al instante.