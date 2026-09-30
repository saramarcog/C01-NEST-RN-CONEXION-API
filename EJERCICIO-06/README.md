# Ejercicio 06 - Estados y UI Dinámica (useState)

## Qué he aprendido
- A utilizar el `useState` de React para crear variables de estado que la interfaz gráfica de la aplicación puede leer.
- A actualizar la pantalla en tiempo real sin necesidad de recargar, simplemente modificando el valor del estado.
- A vincular el resultado de una petición asíncrona (`fetch`) con la interfaz visual.


## Qué he modificado
- He importado el  `useState` en el archivo `App.tsx` del frontend.
- He configurado el estado inicial del texto para que muestre el indicador visual de desconexión solicitado en el reto: `🔴 Sin conectar`.
- He adaptado la función `cargarMensaje` para que, tras extraer el JSON del backend, ejecute `setMensaje` concatenando el indicador de éxito con el texto recibido del servidor

## Resultado
Una aplicación frontend que reacciona a los datos del servidor de forma visual. Al cargar, la interfaz muestra el estado desconectado. Al pulsar el botón, realiza la petición al backend de NestJS y, al recibir la respuesta, la pantalla se actualiza instantáneamente para mostrar el estado conectado , demostrando el flujo completo de datos hacia la interfaz de usuario.