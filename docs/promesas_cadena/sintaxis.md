---
sidebar_position: 2
---

# Sintaxis y uso básico
## Sintaxis basica

Aqui un ejemplo de una sintaxis basica en cadena:

```js text title="sintaxis_basica.js"  
    promesaInicial
    .then(resultado1 => {
        // Código a ejecutar cuando la promesa inicial se resuelve
        return nuevoValor;
    })
    .then(resultado2 => {
        // Código a ejecutar cuando la promesa anterior se resuelve
        // ...
    })
    .catch(error => {
        // Código a ejecutar si ocurre un error en alguna de las promesas
    });
```
**Explicación:**

- `promesaInicial`: Es la primera promesa que inicia la cadena. Puede ser una promesa creada manualmente, una promesa retornada por una función, o incluso una función que devuelve un valor directamente (que se convierte implícitamente en una promesa resuelta).
- `.then()`: Este método se utiliza para encadenar promesas. Cada `.then()` recibe como parámetro una función que se ejecutará cuando la promesa anterior se resuelva.
- `resultado1`, `resultado2`, etc: Son los valores que se pasan a cada función `.then()`, correspondientes al resultado de la promesa anterior.
return nuevoValor: Dentro de cada .then(), puedes devolver un nuevo valor. Este valor se convertirá en la resolución de la nueva promesa que se crea implícitamente, y se pasará al siguiente `.then()`.
- `.catch()`: Este método se utiliza para manejar errores. Si alguna promesa en la cadena se rechaza, se ejecutará la función dentro de .catch(), recibiendo el motivo del rechazo como parámetro.