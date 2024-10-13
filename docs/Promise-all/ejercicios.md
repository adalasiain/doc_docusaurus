---
sidebar_position: 3
---

# Ejercicios Basicos en Cadena
## Ejercicio 1: Promise.all con Promesas Simples
Crea tres promesas que se resuelvan inmediatamente y usa Promise.all para esperar a que todas se resuelvan.
```js text title="ejercicios_cadena.js"  
  let promesa1 = Promise.resolve("Promesa 1 resuelta");
let promesa2 = Promise.resolve("Promesa 2 resuelta");
let promesa3 = Promise.resolve("Promesa 3 resuelta");

Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => console.log(resultados));


```
**Creación de la Promesa:**
- Creación de Promesas Resueltas:

``` js
    let promesa1 = Promise.resolve("Promesa 1 resuelta");
    let promesa2 = Promise.resolve("Promesa 2 resuelta");
    let promesa3 = Promise.resolve("Promesa 3 resuelta");
``` 

- ` Promise.resolve()` : Esta función crea una nueva promesa que se resuelve inmediatamente con el valor proporcionado. En este caso, cada promesa se resuelve con un mensaje de texto.
**Ejecución en Paralelo y Manejo de Resultados:**

``` js
Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => console.log(resultados));
```

- `Promise.all([promesa1, promesa2, promesa3])`:
    - Se crea un arreglo con las tres promesas ya resueltas.
- `Promise.all()` toma este arreglo y devuelve una nueva promesa. Esta nueva promesa se resolverá cuando todas las promesas del arreglo se hayan resuelto (lo cual ya ocurrió en este caso, ya que las promesas se resolvieron al crearlas).
- `then(resultados => console.log(resultados))`:
    - Este es un callback que se ejecuta cuando la promesa principal (devuelta por `Promise.all()`) se resuelve.
- resultados: Es un arreglo que contiene los valores de resolución de cada una de las promesas originales. En este caso, será un arreglo con los tres mensajes de texto.
    - Dentro de este bloque se imprime en la consola el contenido del arreglo resultados.





# Ejercicios Basicos en Cadena
## Ejercicio 2: Promise.all con Diferentes Tiempos de Resolución
Crea tres promesas que se resuelvan en tiempos diferentes (1s, 2s, 3s) y usa Promise.all para manejar los resultados cuando todas estén listas.
```js text title="ejercicios_cadena.js"  
  let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 1000));
let promesa2 = new Promise(resolve => setTimeout(() => resolve("Promesa 2"), 2000));
let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3"), 3000));

Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => console.log(resultados));

```
**Creación de la Promesa:**
- Creación de Promesas:

``` js
    let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 1000));
    let promesa2 = new Promise(resolve => setTimeout(() => resolve("Promesa 2"), 2000));
    let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3"), 3000));
``` 

- `new Promise()`: Se crean tres nuevas promesas.
- `setTimeout()`: Dentro de cada promesa, se utiliza setTimeout para simular una operación asíncrona que tarda un tiempo determinado en completarse.
- `resolve()`: Una vez que pasa el tiempo especificado, se llama a resolve con el mensaje correspondiente, resolviendo así la promesa.
**Ejecución en Paralelo y Manejo de Resultados:**
``` js
Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => console.log(resultados));
``` 

- `Promise.all([promesa1, promesa2, promesa3])`:
    - Se crea un arreglo con las tres promesas.
- `Promise.all()` toma este arreglo y devuelve una nueva promesa. Esta nueva promesa se resolverá cuando todas las promesas del arreglo se hayan resuelto exitosamente.
- `.then(resultados => console.log(resultados))`:
    - Es un callback que se ejecuta cuando la promesa principal (devuelta por `Promise.all()`) se resuelve.
- resultados: Es un arreglo que contiene los valores de resolución de cada una de las promesas originales en el mismo orden en que fueron pasadas al arreglo.
    -Dentro de este bloque se imprime en la consola el contenido del arreglo resultados.







# Ejercicios Basicos en Cadena
##Ejercicio 3: Promise.all con Cálculos Asincrónicos
Usa Promise.all para ejecutar tres promesas que realicen operaciones matemáticas (suma, resta, multiplicación) después de 2 segundos.
```js text title="ejercicios_cadena.js"  
  let suma = new Promise(resolve => setTimeout(() => resolve(5 + 3), 2000));
    let resta = new Promise(resolve => setTimeout(() => resolve(10 - 4), 2000));
    let multiplicacion = new Promise(resolve => setTimeout(() => resolve(7 * 2), 2000));

    Promise.all([suma, resta, multiplicacion])
        .then(resultados => console.log("Resultados:", resultados));
```
**Creación de la Promesa:**

**Creación de Promesas:**
``` js
    let suma = new Promise(resolve => setTimeout(() => resolve(5 + 3), 2000));
    let resta = new Promise(resolve => setTimeout(() => resolve(10 - 4), 2000));
    let multiplicacion = new Promise(resolve => setTimeout(() => resolve(7 * 2), 2000));
```
- Se crean tres promesas: suma, resta y multiplicacion.
- Cada promesa utiliza setTimeout para simular una operación asíncrona que tarda 2000 milisegundos en completarse.
- Dentro de cada setTimeout, se llama a resolve con el resultado de la operación correspondiente (suma, resta o multiplicación).
**Ejecución en Paralelo y Manejo de Resultados:**

``` js
Promise.all([suma, resta, multiplicacion])
  .then(resultados => console.log("Resultados:", resultados));
``` 

- `Promise.all()` se utiliza para ejecutar las tres promesas en paralelo.
    - Esta función devuelve una nueva promesa que se resuelve cuando todas las promesas originales se resuelven.
- El `.then()` se ejecuta cuando la nueva promesa se resuelve.
    -Dentro del `.then()`, se imprime en la consola un mensaje "Resultados:" seguido de un arreglo que contiene los resultados de las tres promesas.







# Ejercicios Basicos en Cadena
## Ejercicio 4: Promise.all con Transformación de Arrays
Usa Promise.all para ejecutar promesas que manipulan diferentes arrays. Cada promesa debe añadir elementos a su array respectivo.
```js text title="ejercicios_cadena.js"  
  let arr1 = new Promise(resolve => setTimeout(() => resolve([1, 2]), 1000));
let arr2 = new Promise(resolve => setTimeout(() => resolve([3, 4]), 2000));
let arr3 = new Promise(resolve => setTimeout(() => resolve([5, 6]), 1500));

Promise.all([arr1, arr2, arr3])
    .then(resultados => {
        let combinado = resultados.flat();
        console.log("Array combinado:", combinado);
    });


```
**Creación de la Promesa:**

- Creación de Promesas:
``` js
let arr1 = new Promise(resolve => setTimeout(() => resolve([1, 2]), 1000));
let arr2 = new Promise(resolve => setTimeout(() => resolve([3, 4]), 2000));
let arr3 = new Promise(resolve => setTimeout(() => resolve([5, 6]), 1500));
``` 

- Se crean tres promesas: `arr1`, `arr2` y `arr3`.
    - Cada promesa utiliza setTimeout para simular una operación asíncrona que tarda un tiempo específico en completarse.
    - Dentro de cada setTimeout, se llama a resolve con un arreglo de números.
- Ejecución en Paralelo y Manejo de Resultados:

``` js
Promise.all([arr1, arr2, arr3])
  .then(resultados => {
    let combinado = resultados.flat();
    console.log("Array combinado:", combinado);
  });
```

- `Promise.all()` se utiliza para ejecutar las tres promesas en paralelo.
    - Esta función devuelve una nueva promesa que se resuelve cuando todas las promesas originales se resuelven.
- El `.then()` se ejecuta cuando la nueva promesa se resuelve.
    - Dentro del `.then()`, se obtiene un arreglo resultados que contiene los resultados de las tres promesas.
- Se utiliza el método `flat()` para aplanar el arreglo resultados, combinando todos los subarreglos en un único arreglo.
- Finalmente, se imprime el arreglo combinado en la consola.






# Ejercicios Basicos en Cadena
## Ejercicio 5: Promise.all con Objetos
Crea tres promesas que devuelvan diferentes objetos. Usa Promise.all para combinarlos en un solo objeto.
```js text title="ejercicios_cadena.js"  
  let promesa1 = new Promise(resolve => setTimeout(() => resolve({ nombre: "Ana" }), 1000));
let promesa2 = new Promise(resolve => setTimeout(() => resolve({ edad: 25 }), 1500));
let promesa3 = new Promise(resolve => setTimeout(() => resolve({ ciudad: "Madrid" }), 2000));

Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => {
        let combinado = Object.assign({}, ...resultados);
        console.log("Objeto combinado:", combinado);
    });


```
**Creación de la Promesa:**
- Creación de Promesas:

``` js
let promesa1 = new Promise(resolve => setTimeout(() => resolve({ nombre: "Ana" }), 1000));
let promesa2 = new Promise(resolve => setTimeout(() => resolve({ edad: 25 }), 1500));
let promesa3 = new Promise(resolve => setTimeout(() => resolve({ ciudad: "Madrid" }), 2000));
``` 
- Se crean tres promesas: `promesa1`, `promesa2` y `promesa3.`
    - Cada promesa utiliza setTimeout para simular una operación asíncrona que tarda un tiempo específico en completarse.
    - Dentro de cada setTimeout, se llama a resolve con un objeto que contiene una propiedad.- Ejecución en Paralelo y Manejo de Resultados:

``` js
Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => {
    let combinado = Object.assign({}, ...resultados);
    console.log("Objeto combinado:", combinado);
  });
```

- `Promise.all()` se utiliza para ejecutar las tres promesas en paralelo.
    - Esta función devuelve una nueva promesa que se resuelve cuando todas las promesas originales se resuelven.
- El `.then()` se ejecuta cuando la nueva promesa se resuelve.
    - Dentro del `.then()`, se obtiene un arreglo resultados que contiene los resultados de las tres promesas, cada uno de ellos es un objeto.
- Se utiliza Object`.assign ()` para combinar los objetos en un único objeto. El primer argumento es un objeto vacío, y luego se pasan los objetos del arreglo resultados como argumentos restantes. Esto crea un nuevo objeto con las propiedades de todos los objetos combinados.
- Finalmente, se imprime el objeto combinado en la consola.







# Ejercicios Basicos en Cadena
## Ejercicio 6: Promise.all con Rechazo
Crea una lista de promesas donde una de ellas se rechace. Maneja el rechazo con catch y muestra un mensaje de error.
```js text title="ejercicios_cadena.js"  
    
    let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 1000));
    let promesa2 = new Promise((resolve, reject) => setTimeout(() => reject("Promesa 2 falló"), 1500));
    let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3"), 2000));

    Promise.all([promesa1, promesa2, promesa3])
        .then(resultados => console.log("Resultados:", resultados))
        .catch(error => console.error("Error:", error));

```
**Creación de la Promesa:**

- Creea-reación de Promesas:

``` js
let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 1000));
let promesa2 = new Promise((resolve, reject) => setTimeout(() => reject("Promesa 2 falló"), 1500));
let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3"), 2000));
``` 

- Se crean tres promesas: promesa1, promesa2 y promesa3.
    - Promesa1 y promesa3 utilizan setTimeout para simular operaciones asíncronas que se resuelven después de un tiempo determinado.
    - Promesa2 también utiliza setTimeout, pero en lugar de resolverla, la rechaza con un mensaje de error.
**Ejecución en Paralelo y Manejo de Resultados:**
``` js
Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => console.log("Resultados:", resultados))
  .catch(error => console.error("Error:", error));
```

- `Promise.all()` se utiliza para ejecutar las tres promesas en paralelo.
    Esta función devuelve una nueva promesa que se resuelve cuando todas las promesas originales se resuelven o se rechaza si alguna de las promesas se rechaza.
- El `.then()` se ejecuta si la nueva promesa se resuelve.
- El `.catch()` se ejecuta si la nueva promesa se rechaza.






# Ejercicios Basicos en Cadena
## Ejercicio 7: Promise.all con Fetch Simulado
Simula varias peticiones fetch usando Promise.all para obtener datos ficticios desde diferentes URLs (puedes usar setTimeout para simular los tiempos de respuesta).
```js text title="ejercicios_cadena.js"  
  
function simularFetch(url) {
    return new Promise(resolve => {
        let tiempo = Math.floor(Math.random() * 3000);
        setTimeout(() => resolve(`Datos obtenidos de ${url} en ${tiempo}ms`), tiempo);
    });
}

let peticion1 = simularFetch("https://api.ejemplo.com/datos1");
let peticion2 = simularFetch("https://api.ejemplo.com/datos2");
let peticion3 = simularFetch("https://api.ejemplo.com/datos3");

Promise.all([peticion1, peticion2, peticion3])
    .then(resultados => console.log(resultados));

```
**Creación de la Promesa:**


- Función `simularFetch`:

- Propósito: Simula una petición a una API, pero en lugar de hacer una solicitud real, retorna una promesa que se resuelve después de un tiempo aleatorio.
- Parámetros:
    - url: La URL de la API simulada.
- Funcionamiento:
    - Crea una nueva promesa.
- Genera un número aleatorio entre 0 y 2999 (representando el tiempo de respuesta en milisegundos).
- Utiliza setTimeout para simular una demora en la respuesta.
    - Una vez transcurrido el tiempo, resuelve la promesa con un mensaje que indica la URL y el tiempo de respuesta.
- Promesas `peticion1`, `peticion2`,`peticion3`:

    - Cada variable almacena una promesa que representa una petición a una URL diferente.
    El resultado de cada promesa es un string que indica el éxito de la petición y el tiempo que tardó.
`Promise.all():`

- Propósito: Ejecuta varias promesas en paralelo y espera a que todas se resuelvan.
- Funcionamiento:
    - Toma un array de promesas como argumento.
    - Devuelve una nueva promesa que se resuelve cuando todas las promesas del array se han resuelto.
     - Si alguna promesa se rechaza, `Promise.all()` se rechaza inmediatamente.
- `.then()`:
    - Propósito: Se ejecuta cuando todas las promesas se resuelven correctamente.
- Funcionamiento:
    - Recibrecibe e un callback que se ejecuta con un array de los resultados de cada promesa.
    - En este caso, se imprime en la consola un array con los mensajes de cada petición simulada.





# Ejercicios Basicos en Cadena
## Ejercicio 8: Promise.all con Encadenamiento
Usa Promise.all dentro de una cadena de promesas. Primero resuelve una promesa que devuelve un número, y luego usa ese número en Promise.all para realizar varias operaciones simultáneas.
```js text title="ejercicios_cadena.js"  
  
let numero = Promise.resolve(10);

numero
    .then(valor => {
        let promesa1 = new Promise(resolve => setTimeout(() => resolve(valor * 2), 1000));
        let promesa2 = new Promise(resolve => setTimeout(() => resolve(valor / 2), 1500));
        let promesa3 = new Promise(resolve => setTimeout(() => resolve(valor + 5), 2000));

        return Promise.all([promesa1, promesa2, promesa3]);
    })
    .then(resultados => console.log("Resultados de operaciones:", resultados));

```
**Creación de la Promesa:**

**Creación de una Promesa Resuelta:**

``` js
    let numero = Promise.resolve(10);
```

- Se crea una promesa numero que se resuelve inmediatamente con el valor 10.
- Encadenamiento de Promesas:

``` js
numero
  .then(valor => {
    // ...
  })
  .then(resultados => console.log("Resultados de operaciones:", resultados));
``` 

- Se utiliza `.then()` para encadenar operaciones a la promesa numero.
    -El primer `.then()` recibe el valor resuelto de numero como argumento.
- Creación de Nuevas Promesas:

``` js
    let promesa1 = new Promise(resolve => setTimeout(() => resolve(valor * 2), 1000));
    let promesa2 = new Promise(resolve => setTimeout(() => resolve(valor / 2), 1500));
    let promesa3 = new Promise(resolve => setTimeout(() => resolve(valor + 5), 2000));
```

- Se crean tres nuevas promesas: promesa1, promesa2 y promesa3.
- Cada promesa utiliza setTimeout para simular una operación asíncrona que tarda un tiempo específico en completarse.
- Dentro de cada setTimeout, se llama a resolve con el resultado de la operación correspondiente, utilizando el valor valor recibido del primer .then().
**Ejecución en Paralelo y Retorno de Resultados:**

``` js
    return Promise.all([promesa1, promesa2, promesa3]);
```

- Se utiliza `Promise.all()` para ejecutar las tres promesas en paralelo.
    - Esta función devuelve una nueva promesa que se resuelve cuando todas las promesas originales se resuelven.
    - El resultado de `Promise.all()` se devuelve desde el primer `.then()`, lo que permite encadenar más operaciones.
** Impresión de Resultados:**

``` js
.then(resultados => console.log("Resultados de operaciones:", resultados));
```
El segundo `.then()` se ejecuta cuando la nueva promesa devuelta por `Promise.all()` se resuelve.
Se imprime en la consola un arreglo resultados que contiene los resultados de las tres promesas.







