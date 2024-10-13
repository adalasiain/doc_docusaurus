---
sidebar_position: 2
---

# Sintaxis y uso básico
## Sintaxis basica

Aqui un ejemplo de una sintaxis basica:

```js text title="sintaxis_basica.js"  
    const promesa1 = new Promise();
    const promesa2 = new Promise();
    const promesa3 = new Promise();

Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => {
    // Código a ejecutar cuando la promesa inicial se resuelve
  })
  .catch(error => {
    // Código a ejecutar si ocurre un error en alguna de las promesas
  });
```
**Componentes de la Sintaxis**

- Creación de Promesas Individuales
``` js
const promesa1 = new Promise();
    const promesa2 = new Promise();
    const promesa3 = new Promise();
```

- `const promesa1 = new Promise();` (y lo mismo para 2 y 3):
    - Se crean tres nuevas promesas vacías. Estas promesas aún no se han resuelto ni rechazado.
    - `new Promise()`: Esta es la forma de crear una nueva instancia de un objeto Promise.
    - `const promesa1`: Se asigna la nueva promesa a una constante para poder usarla más adelante.
- Ejecución en Paralelo y Manejo de Resultados
``` js
Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => {
    // Código a ejecutar cuando la promesa inicial se resuelve
  })
  .catch(error => {
    // Código a ejecutar si ocurre un error en alguna de las promesas
  });
```

- `Promise.all([promesa1, promesa2, promesa3])`:
    - Se pasa un arreglo con las tres promesas a `Promise.all()`.
- `Promise.all()`: Esta función toma un iterable (como un arreglo) de promesas y devuelve una nueva promesa.
    - Esta nueva promesa se resolverá cuando todas las promesas del arreglo se hayan resuelto exitosamente.
- `.then(resultados => { ... })`:
    - Es un callback que se ejecuta cuando la promesa devuelta por `Promise.all()` se resuelve.
- Resultados: Es un arreglo que contiene los valores de resolución de cada una de las promesas originales en el mismo orden en que fueron pasadas al arreglo.
- Dentro de este bloque se coloca el código que se ejecutará cuando todas las promesas se hayan completado con éxito.
- `.catch(error => { ... })`:
    - Es un callback que se ejecuta si alguna de las promesas del arreglo es rechazada.
- error: Contiene el motivo del rechazo.
    - Dentro de este bloque se coloca el código para manejar los errores.
