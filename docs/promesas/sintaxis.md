---
sidebar_position: 2
---

# Sintaxis y uso básico
## Sintaxis basica

Aqui un ejemplo de una sintaxis basica:

```js text title="sintaxis_basica.js"  
    let promise = new Promise((resolve, reject) => {
    // Operación asincrónica
    if (/* condición de éxito */) {
        resolve("Resultado exitoso");
    } else {
        reject("Error en la operación");
    }
});

```
**Componentes de la Sintaxis**

- Creación de la Promesa
    - `new Promise(...)` : Aquí se crea una nueva instancia de la promesa.
    - Se pasa una función como argumento que toma dos parámetros: resolve y reject.
- Parámetros de la Función
    - resolve: Es una función que se llama cuando la operación asincrónica se completa con éxito. Se puede pasar un valor a resolve, que será el resultado de la promesa.
    - reject: Es una función que se llama cuando la operación falla. Se puede pasar un valor a reject, que será el error o motivo de la falla.
- Cuerpo de la Promesa
    - Dentro de la función, se realiza la operación asincrónica (por ejemplo, una llamada a una API, una consulta a una base de datos, etc.).
    - Se evalúa una condición para determinar si la operación fue exitosa o no.
    - Si la operación fue exitosa, se llama a resolve con el resultado.
    - Si ocurrió un error, se llama a reject con un mensaje de error.
 
