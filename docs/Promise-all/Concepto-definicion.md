---
sidebar_position: 1
---

# Concepto y Definicion 

Promise.all es una función en JavaScript que nos permite ejecutar múltiples promesas de manera concurrente y esperar a que todas se resuelvan o a que alguna falle. Es decir, nos permite ejecutar varias operaciones asíncronas al mismo tiempo y obtener los resultados de todas ellas de una sola vez.

**¿Cómo funciona?**

- Toma un iterable de promesas: Como argumento, Promise.all recibe un arreglo (o cualquier otro iterable) de promesas.
- Devuelve una nueva promesa: Esta nueva promesa se resuelve cuando todas las promesas del arreglo se han resuelto exitosamente.
- Resultado: Si todas las promesas se resuelven, la nueva promesa se resuelve con un arreglo que contiene los valores de resolución de cada promesa en el mismo orden en que fueron pasadas al arreglo original.
- Rechazo: Si alguna de las promesas es rechazada, la nueva promesa se rechaza inmediatamente con el motivo del primer rechazo.