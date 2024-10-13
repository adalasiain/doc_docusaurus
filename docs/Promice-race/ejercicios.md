---
sidebar_position: 3
---

# Ejercicios Basicos en Paralelo
## Ejercicio 1: Promise.race con Promesas Simples
Crea tres promesas que se resuelvan después de diferentes tiempos y usa Promise.race para obtener la primera promesa que se resuelva.
```js text title="ejercicios_cadena.js"  
 
let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 1000));
let promesa2 = new Promise(resolve => setTimeout(() => resolve("Promesa 2"), 2000));
let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3"), 3000));

Promise.race([promesa1, promesa2, promesa3])
    .then(resultado => console.log("Primera resuelta:", resultado));

```
**Creación de la Promesa:**

``` js

```
1. Creación de Promesas:

JavaScript
let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 1000));
let promesa2 = new Promise(resolve => setTimeout(() => resolve("Promesa 2"), 2000));
let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3"), 3000));
Usa el código con precaución.

Se crean tres promesas: promesa1, promesa2 y promesa3.
Cada promesa utiliza setTimeout para simular una operación asíncrona que tarda un tiempo específico en completarse.
Dentro de cada setTimeout, se llama a resolve con un mensaje que indica el nombre de la promesa.
2. Ejecución en Paralelo:

JavaScript
Promise.race([promesa1, promesa2, promesa3])
Usa el código con precaución.

Se utiliza Promise.race() para ejecutar las tres promesas en paralelo.
Esta función devuelve una nueva promesa que se resuelve con el valor de la primera promesa que se resuelva en el array.
3. Impresión de Resultado:

JavaScript
.then(resultado => console.log("Primera resuelta:", resultado));
Usa el código con precaución.

Se utiliza .then() para manejar el resultado de la promesa devuelta por Promise.race().
Se imprime en la consola el mensaje de la primera promesa que se resolvió.






## Ejercicio 2: Promise.race con Rechazo
Crea tres promesas, una de las cuales se rechaza. Usa Promise.race y maneja tanto la resolución como el rechazo.
```js text title="ejercicios_cadena.js"  
 let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 2000));
let promesa2 = new Promise((resolve, reject) => setTimeout(() => reject("Promesa 2 fallida"), 1000));
let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3"), 3000));

Promise.race([promesa1, promesa2, promesa3])
    .then(resultado => console.log("Resultado:", resultado))
    .catch(error => console.error("Error:", error));


```
**Creación de la Promesa:**

``` js

```
Claro, vamos a desglosar este código paso a paso:

1. Creación de Promesas:

JavaScript
let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 2000));
let promesa2 = new Promise((resolve, reject) => setTimeout(() => reject("Promesa 2 fallida"), 1000));
let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3"), 3000));
Usa el código con precaución.

Se crean tres promesas: promesa1, promesa2 y promesa3.
promesa1 y promesa3 utilizan resolve para indicar que se resolvieron correctamente.
promesa2 utiliza reject para indicar que falló.
Cada promesa utiliza setTimeout para simular una operación asíncrona que tarda un tiempo específico en completarse.
2. Ejecución en Paralelo:

JavaScript
Promise.race([promesa1, promesa2, promesa3])
Usa el código con precaución.

Se utiliza Promise.race() para ejecutar las tres promesas en paralelo.
Esta función devuelve una nueva promesa que se resuelve con el valor de la primera promesa que se resuelva o se rechaza con el motivo de la primera promesa que se rechace.
3. Manejo de Resultados:

JavaScript
.then(resultado => console.log("Resultado:", resultado))
.catch(error => console.error("Error:", error));
Usa el código con precaución.

Se utilizan .then() y .catch() para manejar los posibles resultados de la promesa devuelta por Promise.race().
Si la primera promesa se resuelve, se imprime el resultado en la consola.
Si la primera promesa se rechaza, se imprime el error en la consola.






## Ejercicio 3: Promise.race con Simulación de Tiempo de Espera
Crea una promesa que simule una operación con retraso, y otra que simule un límite de tiempo. Usa Promise.race para devolver la primera que ocurra.
```js text title="ejercicios_cadena.js"  
 let operacion = new Promise(resolve => setTimeout(() => resolve("Operación completada"), 4000));
let tiempoEspera = new Promise((resolve, reject) => setTimeout(() => reject("Tiempo agotado"), 3000));

Promise.race([operacion, tiempoEspera])
    .then(resultado => console.log("Resultado:", resultado))
    .catch(error => console.error("Error:", error));


```
**Creación de la Promesa:**

``` js

``` 
Creación de Promesas:

operacion: Esta promesa simula una operación que tarda 4 segundos en completarse. Cuando finaliza, se resuelve con el mensaje "Operación completada".
tiempoEspera: Esta promesa simula un tiempo de espera de 3 segundos. Si la operación no termina en ese tiempo, se rechaza con el mensaje "Tiempo agotado".
Carrera de Promesas con Promise.race():

Promise.race([operacion, tiempoEspera]): Esta línea inicia una "carrera" entre las dos promesas. La primera promesa que se resuelva o rechace determinará el resultado final.
Manejo de Resultados:

.then(resultado => console.log("Resultado:", resultado)): Si la operación se completa antes de que se agote el tiempo, se ejecuta este bloque. Imprime el resultado de la operación.
.catch(error => console.error("Error:", error)): Si se agota el tiempo antes de que la operación termine, se ejecuta este bloque. Imprime un mensaje de error.






## Ejercicio 4: Promise.race con Promesas y Temporizador
Crea tres promesas con tiempos de resolución aleatorios y usa Promise.race para capturar la primera en resolverse.
```js text title="ejercicios_cadena.js"  
 function temporizadorAleatorio() {
    return new Promise(resolve => {
        let tiempo = Math.floor(Math.random() * 5000);
        setTimeout(() => resolve(`Resuelto en ${tiempo}ms`), tiempo);
    });
}

let promesa1 = temporizadorAleatorio();
let promesa2 = temporizadorAleatorio();
let promesa3 = temporizadorAleatorio();

Promise.race([promesa1, promesa2, promesa3])
    .then(resultado => console.log("Primera promesa completada:", resultado));


```
**Creación de la Promesa:**

``` js

```
Función temporizadorAleatorio():

¿Qué hace? Esta función crea una nueva promesa que se resuelve después de un tiempo aleatorio entre 0 y 5000 milisegundos.
¿Cómo funciona?
Math.random() * 5000: Genera un número aleatorio entre 0 y 5000.
Math.floor(): Redondea hacia abajo el número aleatorio para obtener un entero.
setTimeout(): Establece un temporizador que se activará después del tiempo aleatorio calculado.
resolve(): Cuando se activa el temporizador, se resuelve la promesa con un mensaje que indica cuánto tiempo tardó.
Creación de Promesas:

let promesa1 = temporizadorAleatorio();, let promesa2 = temporizadorAleatorio();, let promesa3 = temporizadorAleatorio();: Se crean tres promesas, cada una con un tiempo de resolución aleatorio.
Carrera de Promesas con Promise.race():

Promise.race([promesa1, promesa2, promesa3]): Se inicia una "carrera" entre las tres promesas. La primera que se resuelva determinará el resultado final.
Manejo del Resultado:

.then(resultado => console.log("Primera promesa completada:", resultado)): Si una promesa se resuelve, se ejecuta este bloque. Imprime en la consola un mensaje indicando cuál promesa fue la primera en completarse y el tiempo que tardó.






## Ejercicio 5: Promise.race con Fetch Simulado
Simula varias peticiones fetch con diferentes tiempos de respuesta y usa Promise.race para devolver los datos de la primera petición exitosa.
```js text title="ejercicios_cadena.js"  
 function simularFetch(url, tiempo) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Datos obtenidos de ${url} en ${tiempo}ms`), tiempo);
    });
}

let peticion1 = simularFetch("https://api.ejemplo.com/datos1", 3000);
let peticion2 = simularFetch("https://api.ejemplo.com/datos2", 2000);
let peticion3 = simularFetch("https://api.ejemplo.com/datos3", 1000);

Promise.race([peticion1, peticion2, peticion3])
    .then(resultado => console.log("Primera respuesta:", resultado));


```
**Creación de la Promesa:**

Sección 1: Función simularFetch
``` js
function simularFetch(url, tiempo) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Datos obtenidos de ${url} en ${tiempo}ms`), tiempo);
    });
}
``` 

Propósito: Esta función simula una petición a una API, pero en lugar de realizar una solicitud real a un servidor, simplemente espera un tiempo determinado y luego resuelve la promesa con un mensaje indicando la URL y el tiempo de espera.
Explicación:
Parámetros:
url: La URL simulada de la petición.
tiempo: El tiempo en milisegundos que la función esperará antes de resolver la promesa.
Promise: Crea una nueva promesa.
setTimeout: Establece un temporizador que se activará después del tiempo especificado en tiempo.
resolve: Cuando se activa el temporizador, la promesa se resuelve con el mensaje que indica la URL y el tiempo de espera.
Sección 2: Creación de Peticiones Simuladas
JavaScript
let peticion1 = simularFetch("https://api.ejemplo.com/datos1", 3000);
let peticion2 = simularFetch("https://api.ejemplo.com/datos2", 2000);
let peticion3 = simularFetch("https://api.ejemplo.com/datos3", 1000);
Usa el código con precaución.

Propósito: Crea tres promesas, cada una representando una petición a una URL diferente y con un tiempo de espera distinto.
Explicación: Se invocan tres veces la función simularFetch con diferentes parámetros para crear tres promesas distintas.
Sección 3: Ejecución Paralela y Manejo de Resultados
JavaScript
Promise.race([peticion1, peticion2, peticion3])
    .then(resultado => console.log("Primera respuesta:", resultado));
Usa el código con precaución.

Propósito: Ejecuta las tres promesas en paralelo y obtiene el resultado de la primera que se resuelva.
Explicación:
Promise.race: Inicia una "carrera" entre las tres promesas.
.then: Se ejecuta cuando alguna de las promesas se resuelve. Imprime en la consola el resultado de la primera promesa que terminó.







## Ejercicio 6: Promise.race con Rechazo y Resolución
Usa Promise.race con una promesa que se resuelve y otra que se rechaza, mostrando qué ocurre cuando el rechazo sucede primero.
```js text title="ejercicios_cadena.js"  
 let promesaResuelta = new Promise(resolve => setTimeout(() => resolve("Éxito"), 4000));
let promesaRechazada = new Promise((resolve, reject) => setTimeout(() => reject("Falló"), 2000));

Promise.race([promesaResuelta, promesaRechazada])
    .then(resultado => console.log("Resultado:", resultado))
    .catch(error => console.error("Error:", error));


```
**Creación de la Promesa:**

``` js

```
Creando Promesas
let promesaResuelta = new Promise(resolve => setTimeout(() => resolve("Éxito"), 4000));

new Promise: Crea una nueva promesa.
resolve: Esta función se llama cuando la promesa se cumple con éxito.
setTimeout: Establece un temporizador que esperará 4000 milisegundos (4 segundos) antes de ejecutar la función dentro.
resolve("Éxito"): Después de los 4 segundos, se llama a resolve con el mensaje "Éxito", indicando que la promesa se cumplió correctamente.
let promesaRechazada = new Promise((resolve, reject) => setTimeout(() => reject("Falló"), 2000));

new Promise: Crea otra nueva promesa.
reject: Esta función se llama cuando la promesa falla.
setTimeout: Establece un temporizador que esperará 2000 milisegundos (2 segundos) antes de ejecutar la función dentro.
reject("Falló"): Después de los 2 segundos, se llama a reject con el mensaje "Falló", indicando que la promesa falló.
Corriendo la Carrera de Promesas
Promise.race([promesaResuelta, promesaRechazada])

Promise.race: Esta función ejecuta varias promesas en paralelo y devuelve la primera que se cumpla o rechace.
[promesaResuelta, promesaRechazada]: Se pasa un array con las dos promesas que creamos anteriormente.
Manejando los Resultados
.then(resultado => console.log("Resultado:", resultado))

.then: Se ejecuta si alguna de las promesas se cumple con éxito.
resultado: Contiene el valor con el que se resolvió la promesa.
console.log: Imprime en la consola un mensaje con el resultado.
.catch(error => console.error("Error:", error))

.catch: Se ejecuta si alguna de las promesas falla.
error: Contiene el motivo del fallo.
console.error: Imprime en la consola un mensaje de error.






## Ejercicio 7: Promise.race con Varias Promesas y Combinación de Resultados
Crea múltiples promesas con diferentes operaciones (cálculos matemáticos) y usa Promise.race para obtener el resultado de la primera que se complete.
```js text title="ejercicios_cadena.js"  
 let suma = new Promise(resolve => setTimeout(() => resolve(5 + 3), 1500));
let resta = new Promise(resolve => setTimeout(() => resolve(10 - 7), 1000));
let multiplicacion = new Promise(resolve => setTimeout(() => resolve(6 * 2), 2000));

Promise.race([suma, resta, multiplicacion])
    .then(resultado => console.log("Primera operación completada:", resultado));


```
**Creación de la Promesa:**

``` js

```
1. Creación de Promesas
let suma = new Promise(resolve => setTimeout(() => resolve(5 + 3), 1500));

new Promise(): Se crea una nueva promesa.
resolve: Esta función se ejecuta cuando la promesa se cumple con éxito.
setTimeout(() => resolve(5 + 3), 1500): Se establece un temporizador que esperará 1500 milisegundos (1.5 segundos) antes de ejecutar la función dentro. Una vez transcurrido el tiempo, se llama a resolve con el resultado de la suma (8).
En resumen: Esta promesa representa una operación de suma que tarda 1.5 segundos en completarse.
let resta = new Promise(resolve => setTimeout(() => resolve(10 - 7), 1000));

Funcionamiento similar a la promesa suma, pero representa una operación de resta que tarda 1 segundo en completarse.
let multiplicacion = new Promise(resolve => setTimeout(() => resolve(6 * 2), 2000));

Representa una operación de multiplicación que tarda 2 segundos en completarse.
2. Carrera de Promesas con Promise.race()
Promise.race([suma, resta, multiplicacion]):
Promise.race(): Esta función toma un iterable de promesas (en este caso, un array) y devuelve una nueva promesa.
[suma, resta, multiplicacion]: Se pasa un array con las tres promesas que creamos anteriormente.
Funcionamiento:
Todas las promesas del array se ejecutan en paralelo.
Promise.race() se resuelve con el valor de la primera promesa que se resuelve.
3. Manejo del Resultado
.then(resultado => console.log("Primera operación completada:", resultado)):
.then(): Se ejecuta cuando alguna de las promesas se resuelve.
resultado: Contiene el valor con el que se resolvió la primera promesa que terminó.
console.log(): Imprime en la consola un mensaje con el resultado.








## Ejercicio 8: Promise.race con Encadenamiento
Usa Promise.race dentro de una cadena de promesas. Primero resuelve una promesa que devuelve un número, y luego usa ese número en varias promesas en Promise.race.
```js text title="ejercicios_cadena.js"  
 let numero = Promise.resolve(10);

numero
    .then(valor => {
        let promesa1 = new Promise(resolve => setTimeout(() => resolve(valor * 2), 1000));
        let promesa2 = new Promise(resolve => setTimeout(() => resolve(valor / 2), 500));
        let promesa3 = new Promise(resolve => setTimeout(() => resolve(valor + 5), 2000));

        return Promise.race([promesa1, promesa2, promesa3]);
    })
    .then(resultado => console.log("Primer cálculo completado:", resultado));


```
**Creación de la Promesa:**

``` js

```
¡Analicemos el código paso a paso!

1. Creación de la Promesa numero

JavaScript
let numero = Promise.resolve(10);
Usa el código con precaución.

Se crea una nueva promesa numero que se resuelve inmediatamente con el valor 10.
2. Cadena de Promesas

JavaScript
numero
    .then(valor => {
        // ...
    })
Usa el código con precaución.

El método .then() se utiliza para encadenar una nueva promesa al resultado de la anterior. En este caso, la promesa numero se resuelve con 10, por lo que el valor de valor será 10 dentro del bloque .then().
3. Creación de Promesas Dentro del .then()

JavaScript
let promesa1 = new Promise(resolve => setTimeout(() => resolve(valor * 2), 1000));
let promesa2 = new Promise(resolve => setTimeout(() => resolve(valor / 2), 500));
let promesa3 = new Promise(resolve => setTimeout(() => resolve(valor + 5), 2000));
Usa el código con precaución.

Se crean tres nuevas promesas dentro del bloque .then().
Cada promesa representa un cálculo aritmético diferente:
promesa1 multiplica valor por 2 después de 1000 milisegundos.
promesa2 divide valor entre 2 después de 500 milisegundos.
promesa3 suma 5 a valor después de 2000 milisegundos.
4. Carrera de Promesas con Promise.race()

JavaScript
return Promise.race([promesa1, promesa2, promesa3]);
Usa el código con precaución.

Se utiliza Promise.race() para ejecutar las tres promesas promesa1, promesa2 y promesa3 en paralelo.
La primera promesa que se resuelva determinará el valor de retorno de la función anónima dentro de .then().
5. Imprimir el Resultado

JavaScript
.then(resultado => console.log("Primer cálculo completado:", resultado));
Usa el código con precaución.

Se imprime en la consola el resultado de la primera promesa que se resuelva.




