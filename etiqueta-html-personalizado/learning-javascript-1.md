# JavaScript

En JavaScript, una forma muy común de acceder a funcionalidades es usando la sintaxis

```
objeto.función(argumentos)
```
Esto significa: "llamar a una función (método) que pertenece a un objeto"  
o  
```
objeto.propiedad()
```
Una propiedad es una característica o dato que pertenece a un objeto. 

---
## Ejemplos clásicos de funciones (métodos)

```
1) document.createElement("div")
```
createElement es una función (método) que pertenece al objeto document y "div" es el argumento de la función.
Si pusieras "p" en el argumento, crearía un <p>
```
2) console.log("Hola")
```
log() es una función que imprime algo en la consola y "Hola" es el argumento de la función.
```
3) array.push(4)
```
push() es una función que agrega elementos al final del arreglo (le estás diciendo: "agrega el número 4 al final del arreglo")

**Regla general**
  - Una función (método) puede tener cero, uno o varios argumentos.
  - Los argumentos van entre () y se separan por comas si son varios
---

## ¿Qué es una propiedad en JavaScript?
Una propiedad es una característica o dato que pertenece a un objeto. Se define como un par clave:valor.

```
let objeto = {
  propiedad1: valor1,
  propiedad2: valor2
};
```
let se utiliza para declarar variables. En este caso, se ha creado una variable llamada objeto con 2 propiedades  

Las propiedades pueden ser:
  - textos ("hola")
  - números (42)
  - booleanos (true)
  - otros objetos

**Ejemplo básico:**
```
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Lima"
};
```
**¿Cómo accedes a las propiedades?**
```
console.log(persona.nombre); // "Ana"
console.log(persona["edad"]); // 30
};
```



