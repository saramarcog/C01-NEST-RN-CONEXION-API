# Ejercicio 05 - Conexión Frontend y Backend (Fetch)

## Qué he aprendido
- A comunicar una aplicación de React Native (Frontend) con un servidor de NestJS (Backend).


## Qué he modificado
- He editado el archivo `App.tsx` para configurar la constante `API_URL` apuntando al puerto 3000 de mi backend.
- He sustituido el componente `<SafeAreaView>` por un `<View>` aplicándole un `marginTop` de 100. Esto ha sido necesario para bajar el contenido y evitar que la barra de navegación superior por defecto de Expo Starter tapara el botón en la previsualización web.
- He asegurado que la función `cargarMensaje` se ejecuta correctamente al pulsar el botón mediante el evento `onPress`.

## Resultado
Un sistema completo. Al pulsar el botón "Conectar con Nest" en la interfaz, el frontend realiza una petición HTTP al backend. El servidor procesa la petición y devuelve el objeto JSON `{ "texto": "¡Conexión conseguida! 🚀" }`, el cual es capturado e impreso con éxito en la consola del navegador.