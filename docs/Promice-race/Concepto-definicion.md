---
sidebar_position: 1
---

# Concepto y Definicion 
## Promise.race: Una Carrera de Promesas

Promise.race es un método estático en JavaScript que toma un iterable (como un array) de promesas y devuelve una nueva promesa. Esta nueva promesa se resuelve con el valor de la primera promesa que se resuelva de las que están en el iterable, o se rechaza si todas las promesas se rechazan.

**¿Cómo funciona?**

- Se crea un array de promesas: Este array contiene las promesas que queremos comparar.
- Se llama a Promise.race: Se pasa el array de promesas a este método.
- Se crea una nueva promesa: Esta nueva promesa representa el resultado de la carrera.
- La primera promesa en resolverse: La nueva promesa se resuelve con el valor de la primera promesa que se resuelve en el array.
- Si todas las promesas se rechazan: La nueva promesa se rechaza con el motivo del rechazo de la primera promesa en rechazar.