# Etiqueta de HTML personalizado
Este tipo de etiqueta te permite insertar cualquier código HTML/JavaScript que necesites en tu tienda mediante Google Tag Manager

## Conceptos básicos:

### ¿Qué es el DOM?
DOM significa Document Object Model (Modelo de Objetos del Documento).
Es una representación en forma de árbol de todo el contenido HTML de una página web, pero vista desde el navegador como un objeto de JavaScript.

Cuando abres una página web, tu navegador lee el HTML que compone la página, crea una estructura interna (el DOM), como si todo ese contenido fuera un conjunto de objetos. 
Ese DOM puede ser manipulado con JavaScript: puedes cambiar texto, agregar botones, mover elementos, etc.

Código HTML simple
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <p>Este es un párrafo.</p>
    <button>Haz clic aquí</button>
  </body>
</html>
```

Como lo ve el DOM (de forma conceptual)
```plaintext
document
└── html
    ├── head
    │   └── title → "Mi primera página"
    └── body
        ├── h1 → "Hola mundo"
        ├── p → "Este es un párrafo."
        └── button → "Haz clic aquí"
```



### Etiquetas HTML

Una etiqueta es una palabra clave encerrada entre < >. Algunas etiquetas comunes:

| Etiqueta      | Qué hace                                    |
| ------------- | ------------------------------------------- |
| `<div>`       | Caja genérica para contener otros elementos |
| `<script>`    | Código JavaScript                           |
| `<img>`       | Imagen                                      |
| `<button>`    | Botón                                       |
| `<a>`         | Enlace                                      |
| `<p>`         | Párrafo de texto                            |
| `<h1>`-`<h6>` | Títulos (de más grande a más pequeño)       |


#### ```<div>``` → Elemento visual (contenedor)
Un ```<div>``` sirve para agrupar contenido o estructurar secciones de la página.
Es un elemento de bloque, lo que significa que ocupa todo el ancho disponible y comienza en una nueva línea.

```
<div>
  ¡Hola, soy visible en la web!
</div>
```

#### ```<script>```  → Elemento funcional (lógica / programación)
Un ```<script>``` contiene código JavaScript, que le da funcionalidad dinámica a la página. No se ve directamente en la web, pero puede modificarla, leer datos, activar eventos, etc.

```
<script>
  alert("Hola desde JavaScript");
</script>
```


### ¿Qué tipo de código debo insertar en una etiqueta personalizada HTML de Google Tag Manager (GTM)?
Cuando GTM ejecuta una etiqueta HTML personalizada, hace esto internamente:
```
<script>
  // Aquí GTM inyecta TODO lo que tú pongas en la etiqueta
</script>
```
Es decir, aunque tú escribas HTML puro, GTM lo mete dentro de una etiqueta <script>.
Y el navegador no puede interpretar HTML dentro de <script>

**Entonces, en GTM, una etiqueta de tipo “HTML personalizado” en realidad debe contener solo JavaScript válido.**

```javascript
<script>
  var miDiv = document.createElement("div");        // 1. Crea un elemento <div>
  miDiv.innerText = "Hola desde JavaScript";        // 2. Le agrega texto
  document.body.appendChild(miDiv);                 // 3. Lo muestra en la página
</script>
```


