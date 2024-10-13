---
sidebar_position: 1
---

# Introduccion a promesas de JavaScript


Una **promesa** es un objeto que representa la terminación o el fracaso de una operación asíncrona. 
Esta es una guía que explica primero cómo consumirlas, y luego cómo crearlas.

## Para empezar

En esta sección, aprenderás a trabajar con promesas en JavaScript desde lo más básico hasta ejemplos más avanzados. Las promesas son una pieza clave en la programación asincrónica, permitiendo gestionar tareas como solicitudes a servidores, temporizadores, y más, de manera clara y eficiente.

<!-- Estructuras base
Listas
- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies. 
codigo
```bash
npm init docusaurus@latest my-website classic
```
negritas
** d ** 
url
[Node.js](https://nodejs.org/en/download/)
nombres de archivos
`nombre.js`
separadores 
---

---
Tips
:::tip My tip

Use this awesome feature option

:::
Peligro
:::danger Take care

This action is dangerous

:::

  -->

## Requisitos previos
Requisitos previos:
- Conocimientos básicos de JavaScript (variables, funciones, etc.)
- Familiaridad con el uso de consola para ver resultados en el navegador.

## Primeros Pasos con Promesas
Comencemos con un ejemplo sencillo de una promesa en JavaScript.
Crea un nuevo archivo llamado `promesas.js` y pega el siguiente codigo:
```js text title="promesas.js"  
  let promesa = new Promise((resolve, reject) => {
      setTimeout(() => resolve("¡Promesa cumplida!"), 2000);
  });

  promesa.then(mensaje => console.log(mensaje));

```
En este ejemplo, después de 2 segundos, la promesa se resolverá y verás el mensaje "¡Promesa cumplida!" en la consola.

## Siguientes Pasos
A continuación, exploraremos más en profundidad el uso de las promesas y cómo podemos manejarlas de manera eficiente. Temas principales:

- [Promesas de JavaScript](/docs/category/tutorial---basics)


