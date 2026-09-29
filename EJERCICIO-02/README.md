# Ejercicio 02 - Controladores y Servicios

## Qué he aprendido
- A separar las responsabilidades en NestJS: el controlador solo actúa como recepcionista para escuchar la petición HTTP, mientras que el trabajo real y los datos se gestionan en el servicio (`service.ts`).
- A entender cómo un controlador "delega" la tarea llamando a un método del servicio (ej. `return this.pizzasService.findAll();`).


## Qué he modificado
- He editado el archivo `pizzas.service.ts` para modificar el array privado de datos `pizzas`.
- He añadido un tercer objeto al array representando una nueva pizza, incluyéndole un emoji en el nombre y un precio, siguiendo las condiciones del paso a paso.

## Resultado
Al arrancar el servidor y realizar una petición `GET` a la ruta `/pizzas`, el controlador delega en el servicio y este devuelve un array JSON que ahora contiene la lista actualizada con las tres pizzas.