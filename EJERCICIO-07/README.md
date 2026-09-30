# Ejercicio 07 - Carga automática con useEffect

## Qué he aprendido
- A utilizar el *hook* `useEffect` de React para que la aplicación haga cosas automáticamente nada más abrirse (como pedir datos al servidor), sin esperar a que nadie toque nada.
- A combinar `useEffect` para la carga inicial automática con un botón físico para que el usuario pueda forzar una recarga manual cuando quiera.

## Qué he modificado
- He importado `useEffect` junto a `useState` 
- He cambiado el estado inicial de la variable `mensaje` para que muestre el texto "Cargando…" por defecto.
- He añadido el bloque `useEffect` llamando a la función `cargarMensaje()`.
- He mantenido el botón, cambiando su título a "Recargar" para que sirva como una opción secundaria de actualización.

## Resultado
Una aplicación que ya no depende de que el usuario pulse un botón para conectarse. Nada más arrancar, muestra el mensaje "Cargando…", hace la petición por su cuenta y, cuando recibe los datos, actualiza la interfaz mostrando el mensaje con el círculo verde .