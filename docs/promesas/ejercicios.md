---
sidebar_position: 3
---

# Ejercicios Basicos
## Promesa Básica
Ejercicio 1. Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Función completada".
```js text title="ejercicios_basicos.js"  
    let promesa = new Promise((resolve) => {
        setTimeout(() => resolve("Promesa resuelta"), 2000);
    });
    promesa.then(mensaje => {
    console.log(mensaje);
});
```
**Desglose del Código**
- Creación de la Promesa
    - `let promesa = new Promise(...)`: Aquí se está creando una nueva promesa y se está asignando a la variable promesa.
- Función Ejecutora
    - `(resolve) => { ... }` : Esta es una función que se pasa como argumento al constructor de la promesa. Recibe un parámetro llamado resolve, que es una función que se llamará cuando la operación asincrónica se complete con éxito.
- Simulación de una Operación Asincrónica

    - `setTimeout(() => resolve("Promesa resuelta"), 2000);` : Aquí se utiliza la función setTimeout para simular una operación asincrónica que toma tiempo para completarse.
        - setTimeout es una función que ejecuta el código que se le pasa después de un período de tiempo especificado (en milisegundos).
        - En este caso, el código dentro de setTimeout se ejecutará después de 2000 milisegundos (o 2 segundos).
        - resolve("Promesa resuelta"): Cuando se cumple el tiempo especificado, se llama a la función resolve con el argumento "Promesa resuelta". Esto indica que la promesa se ha cumplido exitosamente y pasa el mensaje.
- Para ver este mensaje en la consola, necesitas agregar un .then() para manejar la resolución de la promesa.
## Promesa con Error
Ejercicio 2. Crea una promesa que se rechace después de 1 segundo con el mensaje "Promesa rechazada".
```js text title="ejercicios_basicos.js"  
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => reject("Promesa rechazada"), 1000);
    });
    promesa.catch(error => {
    console.error(error);
});

```
**Desglose del Código**
- Creación de la Promesa

`let promesa = new Promise(...)` : Aquí se crea una nueva promesa y se asigna a la variable promesa.
- Función Ejecutora
    - `(resolve, reject) => { ... }` : Esta es una función que se pasa como argumento al constructor de la promesa. La función recibe dos parámetros:
        - resolve: Es una función que se llama cuando la operación asincrónica se completa con éxito.
        - reject: Es una función que se llama cuando la operación falla o no se puede completar.

- Simulación de una Operación Asincrónica
    - `setTimeout(() => reject("Promesa rechazada"), 1000);` : Aquí se utiliza la función setTimeout para simular una operación asincrónica que toma tiempo para completarse.
        - setTimeout espera durante un período de tiempo especificado (en milisegundos) antes de ejecutar el código dentro de la función.
        - En este caso, el código dentro de setTimeout se ejecutará después de 1000 milisegundos (o 1 segundo).
        - `reject("Promesa rechazada")`: Cuando se cumple el tiempo especificado, se llama a la función reject con el argumento "Promesa rechazada". Esto indica que la promesa ha fallado y pasa un mensaje de error.
- Manejo de la promesa rechazada: El método `.catch()` se utiliza para especificar qué hacer cuando la promesa se rechaza. En este caso, la función dentro de `.catch()` recibe el valor "Promesa rechazada" y lo imprime en la consola con `console.error()`.
## Manejo de Respuesta Exitosa
Ejercicio 3. Usando `then()`, maneja una promesa que se resuelva con el mensaje "Promesa completada".

```js text title="ejercicios_basicos.js"  
    let promesa = new Promise((resolve) => {
            resolve("Promesa completada");
        });

    promesa.then(mensaje => console.log(mensaje));
```
**Desglose del Código**
- Creación de la Promesa

    - `let promesa = new Promise(...)`: Aquí se está creando una nueva promesa y se está asignando a la variable promesa.
- Función Ejecutora
    - `(resolve) => { ... }`: Esta es una función que se pasa como argumento al constructor de la promesa. Recibe un parámetro llamado resolve, que es una función que se llamará cuando la operación asincrónica se complete con éxito.
- Resolución de la Promesa
    - `resolve("Promesa completada")`: En este caso, la función resolve se llama inmediatamente con el argumento "Promesa completada". Esto indica que la promesa se ha completado exitosamente y pasa el mensaje.

## Manejo de Errores
Ejercicio 4. Usa catch() para manejar una promesa que se rechaza con un error "Error en la promesa".
```js text title="ejercicios_basicos.js"  
    let promesa = new Promise((resolve, reject) => {
        reject("Error en la promesa");
    });

    promesa.catch(error => console.error(error));
```
**Desglose del Código**
- Creación de la Promesa

    - `let promesa = new Promise(...)`: Se está creando una nueva promesa y se asigna a la variable promesa.
- Función Ejecutora

    - `(resolve, reject) => { ... }`: Esta es una función que se pasa como argumento al constructor de la promesa. Recibe dos parámetros:
        - resolve: Es una función que se llamará cuando la operación asincrónica se complete con éxito.
        - reject: Es una función que se llamará cuando la operación falle o no se pueda completar.
- Rechazo de la Promesa

    - `reject("Error en la promesa")`: En este caso, se llama a la función reject inmediatamente con el argumento "Error en la promesa". Esto indica que la promesa ha fallado y pasa un mensaje de error.

## Promesa con Diferentes Resultados
Ejercicio 5 . Crea una promesa que, después de 2 segundos, devuelva aleatoriamente una resolución con éxito o un rechazo.
```js text title="ejercicios_basicos.js"  
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve("Éxito") : reject("Fracaso");
        }, 2000);
    });

    promesa
        .then(mensaje => console.log("Resultado:", mensaje))
        .catch(error => console.error("Resultado:", error));

```
**Desglose del Código**
- Creación de la Promesa
    - `let promesa = new Promise(...)`: Se está creando una nueva promesa y se asigna a la variable promesa.
- Función Ejecutora
    - `(resolve, reject) => { ... }`: Esta es una función que se pasa como argumento al constructor de la promesa. Recibe dos parámetros:
        - resolve: Función que se llamará si la operación se completa con éxito.
        - reject: Función que se llamará si la operación falla.
- Simulación de Asincronía
    - `setTimeout(() => { ... }, 2000)`: Aquí se utiliza setTimeout para simular una operación asincrónica que tarda 2 segundos (2000 milisegundos) en completarse.
- Aleatoriedad en Resolución o Rechazo
    - `Math.random() > 0.5 ? resolve("Éxito") : reject("Fracaso"):`
        - Se genera un número aleatorio entre 0 y 1 utilizando Math.random().
        - Si el número es mayor que 0.5, se llama a resolve("Éxito"), lo que implica que la promesa se resuelve exitosamente.
        - Si el número es 0.5 o menor, se llama a reject("Fracaso"), lo que indica que la promesa ha fallado.
- Manejo de Resultados
Después de crear la promesa, se manejan los resultados utilizando then y catch:
```js 
    promesa
        .then(mensaje => console.log("Resultado:", mensaje))
        .catch(error => console.error("Resultado:", error));
```
- then:
    - Se utiliza para manejar el caso en que la promesa se resuelve exitosamente.
    - `mensaje => console.log("Resultado:", mensaje)`: Aquí se imprime el mensaje "Éxito" en la consola.
- catch:
    - Se utiliza para manejar el caso en que la promesa se rechaza.
    - `error => console.error("Resultado:", error)`: Aquí se imprime el mensaje "Fracaso" en la consola.

## Promesa Anidada
Ejercicio 6. Crea una promesa que invoque otra promesa después de que se resuelva.
```js text title="ejercicios_basicos.js"  
    let promesa = new Promise((resolve) => {
        setTimeout(() => resolve("Primera promesa completada"), 1000);
    });

    promesa
        .then(mensaje => {
            console.log(mensaje);
            return new Promise((resolve) => {
                setTimeout(() => resolve("Segunda promesa completada"), 2000);
            });
        })
        .then(mensaje => console.log(mensaje));
```
**Creación de la primera promesa:**
```js 
let promesa = new Promise((resolve) => {
    setTimeout(() => resolve("Primera promesa completada"), 1000);
});
```
- `new Promise()`: Se crea una nueva instancia de un objeto Promise. Este objeto representa una operación asíncrona que puede resolverse o rechazarse en el futuro.
- resolve: Es una función que se pasa al constructor de Promise. Se utiliza para resolver la promesa con un valor cuando la operación asíncrona se completa correctamente.
- `setTimeout()`: Esta función programa la ejecución de una función (en este caso, resolve) después de un cierto tiempo (1000 milisegundos, es decir, 1 segundo).
- "Primera promesa completada": Este es el valor que se pasa a la función resolve cuando se resuelve la promesa. Este valor será utilizado más adelante.

**Primer `then()`:**
```js 
promesa
    .then(mensaje => {
        console.log(mensaje);
        return new Promise((resolve) => {
            setTimeout(() => resolve("Segunda promesa completada"), 2000);
        });
    })
```
- `.then()`: Este método se encadena a la promesa original y se ejecuta cuando la promesa se resuelve.
- mensaje: Es el parámetro que recibe la función then. Este parámetro contiene el valor con el que se resolvió la promesa original (en este caso, "Primera promesa completada").
- `console.log(mensaje)`: Se imprime en la consola el valor de mensaje.
- `return new Promise()`: Dentro de then, se crea una nueva promesa y se devuelve. Esta nueva promesa se resolverá después de 2 segundos. Esto crea una cadena de promesas.

**Segundo `then()`:**
```js 
.then(mensaje => console.log(mensaje));
```
- `then()`: Este método se encadena a la segunda promesa (la que se devolvió dentro del primer then).
- mensaje: Este parámetro contiene el valor con el que se resolvió la segunda promesa (en este caso, "Segunda promesa completada").
- `console.log(mensaje)`: Se imprime en la consola el valor de mensaje.

## Promesa de Comparación
Ejercicio 7. Crea una promesa que compare dos valores numéricos. Si el primer número es mayor, la promesa se resuelve, de lo contrario, se rechaza.

```js text title="ejercicios_basicos.js"  
let a = 8, b = 5;

let promesa = new Promise((resolve, reject) => {
    if (a > b) {
        resolve(`${a} es mayor que ${b}`);
    } else {
        reject(`${a} no es mayor que ${b}`);
    }
});

promesa
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));
```
**Declaración de variables:**
```js 
    let a = 8, b = 5;
```

- Se declaran dos variables, a y b, y se les asignan los valores 8 y 5 respectivamente. Estas variables serán utilizadas para comparar sus valores dentro de la promesa.
**Creación de la promesa:**

```js 
    let promesa = new Promise((resolve, reject) => {
        if (a > b) {
            resolve(`${a} es mayor que ${b}`);
        } else {
            reject(`${a} no es mayor que ${b}`);
        }
    });
```
- `new Promise()`: Se crea una nueva instancia de un objeto Promise. Este objeto representa una operación asíncrona que puede resolverse o rechazarse en el futuro.
- `resolve` y `reject`: Son funciones que se pasan al constructor de Promise.
- `if (a > b)`: Se realiza una comparación entre los valores de a y b.
resolve(): Si a es mayor que b, se llama a la función resolve pasando un mensaje que indica que a es mayor que b. Este mensaje será utilizado más adelante en el .`then()`.
- `reject()`: Si a no es mayor que b, se llama a la función reject pasando un mensaje que indica que a no es mayor que b. Este mensaje será utilizado más adelante en el `.catch()`.
**Manejo de la promesa:**

```js 
    promesa
        .then(mensaje => console.log(mensaje))
        .catch(error => console.error(error));
```

- `.then()`: Este método se ejecuta si la promesa se resuelve (es decir, si a es mayor que b). El parámetro mensaje contiene el valor que se pasó a la función resolve. En este caso, se imprime el mensaje en la consola.
- `.catch()`: Este método se ejecuta si la promesa se rechaza (es decir, si a no es mayor que b). El parámetro error contiene el valor que se pasó a la función reject. En este caso, se imprime un mensaje de error en la consola.

## Promesa con JSON
Ejercicio 8. Simula una operación asincrónica que obtenga un objeto JSON después de 1.5 segundos.
```js text title="ejercicios_basicos.js"  
    let promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nombre: "Carlos", edad: 29 });
        }, 1500);
    });

    promesa.then(datos => console.log(`Nombre: ${datos.nombre}, Edad: ${datos.edad}`));
```
**Creación de la Promesa:**

```js 
let promesa = new Promise((resolve) => { ... });
```
- Se crea una nueva promesa y se almacena en la variable promesa.

- La función que se pasa al constructor de Promise toma un parámetro resolve, que se utilizará para resolver la promesa.

**Simulación de una Tarea Asíncrona:**

```js 
setTimeout(() => { ... }, 1500);
```

    - `setTimeout` es una función de JavaScript que ejecuta una función después de un cierto tiempo (en este caso, 1500 milisegundos o 1.5 segundos).
    - Dentro de `setTimeout`, se ejecuta una función anónima que contiene el código que se ejecutará cuando la promesa esté lista para resolverse.
**Resolución de la Promesa:**

```js 
resolve({ nombre: "Carlos", edad: 29 });
```

- Después de 1.5 segundos, se llama a la función resolve y se le pasa un objeto JSON como argumento.
- Este objeto contiene las propiedades nombre y edad, que representan los datos que se obtuvieron de la operación asíncrona.
**Manejo de la Promesa Resuelta:**

```js 
promesa.then(datos => console.log(`Nombre: ${datos.nombre}, Edad: ${datos.edad}`));
```

- `.then()` es un método que se utiliza para especificar qué hacer cuando la promesa se resuelve.
- La función que se pasa a `.then()` toma como argumento el valor que se pasó a resolve. En este caso, el argumento datos contiene el objeto JSON que se obtuvo.
- Dentro de la función, se utiliza una plantilla literal para imprimir en la consola el nombre y la edad de la persona.