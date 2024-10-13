---
sidebar_position: 3
---

# Ejercicios Basicos en Cadena
## Ejercicio 1: Cadena de Promesas Básica
Crea dos promesas en cadena que se resuelvan secuencialmente, mostrando "Primera promesa" y luego "Segunda promesa". 
```js text title="ejercicios_cadena.js"  
    let promesa = new Promise((resolve) => {
    resolve("Primera promesa");
    });

    promesa
        .then(mensaje => {
            console.log(mensaje);
            return "Segunda promesa";
        })
        .then(mensaje => console.log(mensaje));

```
**Creación de la Promesa:**

``` js
let promesa = new Promise((resolve) => {
    resolve("Primera promesa");
});
```

- `new Promise()`: Crea un nuevo objeto Promesa.
- `(resolve)`: Esta función se ejecuta inmediatamente al crear la promesa.
- `resolve("Primera promesa")`: Inmediatamente después de crear la promesa, se llama a resolve con el valor "Primera promesa". Esto significa que la promesa se resuelve de inmediato con ese valor.
**Cadena de Promesas:**

``` js
promesa
    .then(mensaje => {
        console.log(mensaje);
        return "Segunda promesa";
    })
    .then(mensaje => console.log(mensaje));
```
- `.then()`: Este método se utiliza para encadenar promesas. Cada .then() se ejecuta cuando la promesa anterior se resuelve.
- Primer `.then()`:
    - Imprime en la consola el valor de la primera promesa: "Primera promesa".
    - Devuelve la cadena "Segunda promesa". Este valor se convierte en el valor de resolución de la nueva promesa creada implícitamente por este `.then()`.
- Segundo `.then()`:
    - Recibe el valor devuelto por el primer .then(), que es "Segunda promesa".
    - Imprime este valor en la consola.








## Ejercicio 2: Cadena con Tiempo de Espera
Crea una cadena de promesas donde la segunda promesa se resuelva después de 2 segundos.

```js text title="ejercicios_cadena.js"  
    let promesa = new Promise((resolve) => {
    resolve("Primera promesa");
    });

    promesa
        .then(mensaje => {
            console.log(mensaje);
            return new Promise((resolve) => {
                setTimeout(() => resolve("Segunda promesa"), 2000);
            });
        })
        .then(mensaje => console.log(mensaje));

```
**Creación de la primera promesa:**

```js
    let promesa = new Promise((resolve) => {
        resolve("Primera promesa");
    });
```

- Se crea una nueva promesa que se resuelve inmediatamente con el valor "Primera promesa".
**Cadena de promesas:**

```js
promesa
    .then(mensaje => {
        console.log(mensaje);
        return new Promise((resolve) => {
            setTimeout(() => resolve("Segunda promesa"), 2000);
        });
    })
    .then(mensaje => console.log(mensaje));
```

- Primer `.then()`:
    -Cuando la primera promesa se resuelve, este bloque de código se ejecuta.
    - Imprime en la consola el valor de la primera promesa: "Primera promesa".
    - Crea una nueva promesa: Dentro de este `.then()`, se crea una nueva promesa que se resuelve después de 2 segundos con el valor "Segunda promesa". Esta nueva promesa simula una operación asíncrona que tarda 2 segundos en completarse.
    - Devuelve la nueva promesa: El valor de retorno de este `.then()` es la nueva promesa que se acaba de crear.
- Segundo `.then()`:
    - Este `.then()` se ejecuta cuando la nueva promesa (la que se creó dentro del primer `.then()`) se resuelve.
    - Imprime en la consola el valor de la segunda promesa: "Segunda promesa".






## Ejercicio 3: Cadena con Rechazo
Crea una cadena de promesas donde la segunda promesa sea rechazada, y maneja el error con catch.
```js text title="ejercicios_cadena.js"  
    let promesa = new Promise((resolve) => {
        resolve("Primera promesa");
    });

    promesa
        .then(mensaje => {
            console.log(mensaje);
            return Promise.reject("Error en la segunda promesa");
        })
        .catch(error => console.error(error));

```
- Creación de la primera promesa:

```js
let promesa = new Promise((resolve) => {
    resolve("Primera promesa");
});
``` 
`new Promise()`: Se crea una nueva promesa.
`(resolve)`: Esta función se ejecuta inmediatamente al crear la promesa.
resolve("Primera promesa"): Inmediatamente después de crear la promesa, se llama a resolve con el valor "Primera promesa". Esto significa que la promesa se resuelve de inmediato con ese valor.
2. Cadena de promesas:

```js
promesa
    .then(mensaje => {
        console.log(mensaje);
        return Promise.reject("Error en la segunda promesa");
    })
    .catch(error => console.error(error));
```
- Primer `.then()`:
    - Cuando la primera promesa se resuelve, este bloque de código se ejecuta.
    - Imprime en la consola el valor de la primera promesa: "Primera promesa".
    - Crea una nueva promesa rechazada: En lugar de devolver un valor que resuelva la siguiente promesa, se utiliza `Promise.reject()` para crear una nueva promesa que se rechaza inmediatamente con el mensaje "Error en la segunda promesa". Esto simula una operación que ha fallado.
- Segundo `.catch()`:
    - Como la segunda promesa (la que se creó dentro del primer `.then()`) fue rechazada, se ejecuta este `.catch()`.
    - Imprime en la consola el mensaje de error: "Error en la segunda promesa".








## Ejercicio 4: Cadena con Manipulación de Datos
Crea una cadena de promesas que modifique un número sumando 5 en cada paso.
```js text title="ejercicios_cadena.js"  
    let promesa = new Promise((resolve) => {
        resolve(10);
    });

    promesa
        .then(numero => numero + 5)
        .then(numero => numero + 5)
        .then(numero => console.log("Resultado final:", numero));

```
- Creación de la Promesa:

``` js
let promesa = new Promise((resolve) => {
    resolve(10);
});
```

`new Promise()`: Se crea una nueva promesa.
`(resolve)`: Esta función se ejecuta inmediatamente al crear la promesa.
`resolve(10)`: Se llama a resolve con el valor 10, lo que significa que la promesa se resuelve inmediatamente con este valor.
- Cadena de Promesas:

``` js
promesa
    .then(numero => numero + 5)
    .then(numero => numero + 5)
    .then(numero => console.log("Resultado final:", numero));
```

- Primer `.then()`:
    - Cuando la primera promesa se resuelve (con el valor 10), este bloque de código se ejecuta.
    - Recibe el valor 10 (asignado a la variable numero).
    - Suma 5 al valor y devuelve el resultado (15). Este valor se pasa al siguiente `.then()`.
- Segundo `.then()`:
    - Recibe el valor 15 del primer `.then()`.
    - Suma 5 al valor y devuelve el resultado (20). Este valor se pasa al siguiente .then().
- Tercer `.then()`:
    - Recibe el valor 20 del segundo `.then()`.
    - Imprime en la consola: "Resultado final: 20".








## Ejercicio 5: Cadena con Objetos
Crea dos promesas en cadena que se resuelvan secuencialmente, mostrando "Primera promesa" y luego "Segunda promesa". 
```js text title="ejercicios_cadena.js"  
    let promesa = new Promise((resolve) => {
        resolve({ nombre: "Juan" });
    });

    promesa
        .then(objeto => {
            objeto.edad = 25;
            return objeto;
        })
        .then(objeto => {
            objeto.pais = "México";
            return objeto;
        })
        .then(objeto => console.log(objeto));
```
- Creación de la Promesa:

``` js
let promesa = new Promise((resolve) => {
    resolve({ nombre: "Juan" });
});
``` 

- `new Promise()`: Se crea una nueva promesa.
    - (resolve): Esta función se ejecuta inmediatamente al crear la promesa.
    - `resolve({ nombre: "Juan" })`: Se llama a resolve con un objeto que tiene una propiedad nombre con el valor "Juan". Esto significa que la promesa se resuelve inmediatamente con este objeto.
- Cadena de Promesas:
``` js
    promesa
        .then(objeto => {
            objeto.edad = 25;
            return objeto;
        })
        .then(objeto => {
            objeto.pais = "México";
            return objeto;
        })
        .then(objeto => console.log(objeto));
```
- Primer `.then()`:
    - Cuando la primera promesa se resuelve, este bloque de código se ejecuta.
    - Recibe el objeto `{ nombre: "Juan" }` (asignado a la variable objeto).
    - Agrega una nueva propiedad edad al objeto con el valor 25.
    - Devuelve el objeto modificado.
- Segundo `.then()`:
    - Recibe el objeto modificado del primer `.then()`.
    - Agrega una nueva propiedad pais al objeto con el valor "México".
    - Devuelve el objeto modificado nuevamente.
- Tercer `.then()`:
    - Recibe el objeto final (con las propiedades nombre, edad y pais) y lo imprime en la consola.







## Ejercicio 6: Cadena con Funciones
Crea una función que devuelva una promesa, y usa esa función dentro de una cadena de promesas.
```js text title="ejercicios_cadena.js"  
function tareaAsincrona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tarea completada"), 1000);
    });
}

tareaAsincrona()
    .then(mensaje => {
        console.log(mensaje);
        return tareaAsincrona();
    })
    .then(mensaje => console.log(mensaje));

```
- Función tareaAsincrona():

``` js
function tareaAsincrona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tarea completada"), 1000);
    });
}
```

- Definición de la función: Se define una función llamada tareaAsincrona.
    - Retorno de una promesa: Dentro de la función, se crea una nueva promesa.
    - `setTimeout`: Se utiliza setTimeout para simular una tarea que tarda 1 segundo en completarse.
    - `resolve`: Una vez que pasa 1 segundo, se llama a resolve con el mensaje "Tarea completada", resolviendo así la promesa.

- Cadena de Promesas:
``` js
tareaAsincrona()
    .then(mensaje => {
        console.log(mensaje);
        return tareaAsincrona();
    })
    .then(mensaje => console.log(mensaje));
``` 

- Primera llamada a `tareaAsincrona()`: Se llama a la función para iniciar la primera tarea asíncrona.
- Primer `.then()`:
    - Cuando la primera tarea se completa (después de 1 segundo), este bloque se ejecuta.
    - Imprime en la consola el mensaje "Tarea completada".
    - Vuelve a llamar a `tareaAsincrona()`, iniciando una segunda tarea.
- Multiplica el valor por 2 y devuelve el resultado (4). Este valor se pasa al siguiente `.then()`.
- Segundo `.then()`:
- Cuando la segunda tarea se completa, este bloque se ejecuta.
- Imprime en la consola el mensaje "Tarea completada" nuevamente.





## Ejercicio 8: Cadena con Multiplicación
Crea una cadena de promesas que multiplique un número por 2 en cada paso.
```js text title="ejercicios_cadena.js"  
    let promesa = new Promise((resolve) => {
        resolve(2);
    });

    promesa
        .then(numero => numero * 2)
        .then(numero => numero * 2)
        .then(numero => console.log("Resultado final:", numero));

```
- Creación de la Promesa:
``` js
    let promesa = new Promise((resolve) => {
        resolve(2);
    });
```

- `new Promise()`: Se crea una nueva promesa.
    - `(resolve)`: Esta función se ejecuta inmediatamente al crear la promesa.
    - `resolve(2)`: Se llama a resolve con el valor 2, lo que significa que la promesa se resuelve inmediatamente con este valor.
- Cadena de Promesas:

``` js
promesa
    .then(numero => numero * 2)
    .then(numero => numero * 2)
    .then(numero => console.log("Resultado final:", numero));
``` 

- Primer .then():
    - Cuando la primera promesa se resuelve (con el valor 2), este bloque de código se ejecuta.
    - Recibe el valor 2 (asignado a la variable numero).
- Segundo `.then()`:Recibe el valor 4 del primer `.then()`.
    - Multiplica el valor por 2 y devuelve el resultado (8). Este valor se pasa al siguiente `.then()`.
- Tercer `.then()`:
    - Recibe el valor 8 del segundo `.then()`.
    - Imprime en la consola: "Resultado final: 8".
