---
sidebar_position: 2
---

# Sintaxis y uso básico
## Sintaxis basica

Aqui un ejemplo de una sintaxis basica:

```js text title="sintaxis_basica.js"  
  Promise.race([promesa1, promesa2, ..., promesaN])
  .then(resultado => {
    // Código a ejecutar cuando la primera promesa se resuelve
  })
  .catch(error => {
    // Código a ejecutar si todas las promesas se rechazan
  });
```
**Componentes de la Sintaxis**
`romise.race([promesa1, promesa2, ..., promesaN]):`

`Promise.race`: Es un método estático de JavaScript que inicia una "carrera" entre múltiples promesas.
``[promesa1, promesa2, ..., promesaN]`` : Es un array que contiene las promesas que competirán.
`.then(resultado => { ... })`:

Se ejecuta si alguna de las promesas se resuelve primero.
resultado: Contiene el valor con el que se resolvió la primera promesa.
`.catch(error => { ... })`:

Se ejecuta si todas las promesas se rechazan.
error: Contiene el motivo del rechazo de la primera promesa que se rechazó.