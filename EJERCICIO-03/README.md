# Ejercicio 03 - Parámetros en rutas

## Qué he aprendido
- A capturar valores dinámicos que el usuario escribe en la URL utilizando el decorador `@Get(':id')`.
- A extraer ese parámetro concreto de la petición HTTP mediante `@Param('id')` para poder usarlo como variable en mi función.
- A realizar conversiones de tipos en TypeScript, transformando el `id` (que siempre llega de la URL en formato texto/`string`) a un número (`Number(id)`) para poder buscarlo correctamente.


## Qué he modificado
- He ordenado y limpiado el código base separando correctamente el controlador y el servicio 
- He añadido un nuevo objeto al array `mascotas`
- He probado en el navegador a buscar IDs existentes comprobando que devuelve los datos correctos, y también un ID inexistente comprobando que, al no encuentra nada. 
## Resultado
Un endpoint que permite consultar los detalles de una única mascota basándose en el id que se le pasa por la URL.