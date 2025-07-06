# Etiqueta de HTML personalizado
Este tipo de etiqueta te permite insertar cualquier código HTML/JavaScript que necesites en tu tienda. Un ejemplo útil es mostrar un mensaje o guardar algo en el localStorage.

## Conceptos básicos

### ¿Qué es el DOM?
DOM significa Document Object Model (Modelo de Objetos del Documento).
Es una representación en forma de árbol de todo el contenido HTML de una página web, pero vista desde el navegador como un objeto de JavaScript.

Cuando abres una página web, tu navegador lee el HTML que compone la página, crea una estructura interna (el DOM), como si todo ese contenido fuera un conjunto de objetos. 
Ese DOM puede ser manipulado con JavaScript: puedes cambiar texto, agregar botones, mover elementos, etc.







### Etiquetas HTML

#### 1) ```<div>``` → Elemento visual (contenedor)
Un ```<div>``` es parte de la estructura visual de una página. Sirve para mostrar contenido en pantalla: texto, imágenes, botones, formularios, etc.

```
<div>
  ¡Hola, soy visible en la web!
</div>
```

#### 2) ```<script>```  → Elemento funcional (lógica / programación)
Un ```<script>``` contiene código JavaScript, que le da funcionalidad dinámica a la página. No se ve directamente en la web, pero puede modificarla, leer datos, activar eventos, etc.

```
<script>
  alert("Hola desde JavaScript");
</script>
```
