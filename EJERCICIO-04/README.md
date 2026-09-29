# Ejercicio 04 - Filtros y Query Parameters

## Qué he aprendido
- A utilizar el decorador `@Query()` para capturar parámetros de búsqueda opcionales que se añaden al final de la URL (por ejemplo, `?genero=Aventura`).
- A diferenciar entre rutas dinámicas (`@Param`, que son parte de la ruta en sí) y parámetros de consulta (`@Query`, que actúan como filtros adicionales).
- A implementar lógica condicional en el servicio para devolver la lista completa si no hay filtro, o una lista filtrada (`filter()`) si el usuario especifica un criterio.


## Qué he modificado
- He corregido el código base del enunciado, ya que habia elementos del ejercicio anterior.
- He creado una lista de cuatro juegos diferentes en el servicio, asignándoles géneros variados para poder probar los filtros.
- He comprobado la ruta base `/juegos` viendo que devuelve los cuatro elementos.
- He probado rutas con filtro como `/juegos?genero=Aventura` comprobando que el array devuelto solo contiene los juegos que coinciden exactamente con esa palabra.

## Resultado
Un *endpoint* flexible que permite tanto listar un catálogo completo de juegos como realizar búsquedas filtradas por género utilizando *Query Parameters* en la petición HTTP.