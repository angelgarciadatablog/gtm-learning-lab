## ¿Qué es `localStorage`?

`localStorage` es una funcionalidad que ofrece el navegador para **guardar información del lado del cliente**, es decir, en el dispositivo del usuario.

- Se usa a través del objeto `localStorage` que viene incluido en JavaScript.
- Los datos se guardan **como texto (strings)** en pares clave–valor.
- El almacenamiento **persiste entre sesiones**, incluso si cierras el navegador.


## ¿Cómo funciona?

En el navegador que estés usando (Chrome, Firefox, Safari, etc.), puedes probar `localStorage` ingresando a cualquier sitio web, por ejemplo: [https://vans.com.pe](https://vans.com.pe).
Cuando accedes a una web, el navegador asigna a ese **dominio** un espacio específico de almacenamiento llamado `localStorage`.
Cada usuario tiene su propio `localStorage` por navegador y por sitio web. Es decir:

- Los datos que se guardan en `localStorage` **solo pueden ser leídos desde el mismo dominio**.
- No importa si navegas entre diferentes páginas del mismo sitio (`/`, `/producto`, `/cart`), siempre y cuando sea el **mismo dominio**, podrás acceder a esos datos.
- Otro sitio (como `https://nike.com`) no podrá acceder al `localStorage` de `https://vans.com.pe`, ni aunque el usuario use el mismo navegador.
- Los únicos que pueden acceder a esos datos son:
  - El **usuario**, desde su navegador (por ejemplo, usando la consola).
  - El **código JavaScript que se ejecuta en ese mismo dominio** (escrito por el desarrollador o el dueño de la web).


👉 **Importante:** `localStorage` es persistente, lo que significa que los datos no se borran al cerrar el navegador, a menos que el usuario los elimine manualmente o use navegación privada.

---

### ¿Cómo guardar un string en `localStorage`?

1) abre el navegador e ingresa a una web de prueba, por ejemplo: [https://vans.com.pe](https://vans.com.pe).
2) Abre la consola de la web con el atajo `Cmd + Option + J` (Mac) o `Ctrl + Shift + J` (Windows).
3) Para guardar un string, solo necesitas definir una **clave** y un **valor**:

```javascript
localStorage.setItem("nombre", "Angel");
```
Esto guarda el string "Angel" bajo la clave "nombre".  
**El método localStorage.setItem() no devuelve ningún valor, por eso verás undefined en la consola. Esto es completamente normal.**

### Leer ese valor luego:
```javascript
localStorage.getItem("nombre"); // Devuelve: "Angel"
```

### Borrar ese valor luego:
```javascript
localStorage.removeItem("nombre");
```

### Ver los claves almacenados en el localStorage:
opción 1
```javascript
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.key(i));
}
```
opción 2
```javascript
const keys = Object.keys(localStorage);
console.log(keys);
```

### Borrar todo el contenido del localStorage:
```javascript
localStorage.clear();
```

## 📦 ¿Qué pasa cuando quiero guardar un objeto o array?

### ¿Cómo guardar un array? JSON.stringify

```javascript
const usuario = {
  nombre: "Angel",
  edad: 25,
  universidad: "pucp"
};

const usuarioComoTexto = JSON.stringify(usuario);
localStorage.setItem("usuario", usuarioComoTexto);
```
Lo que se guarda en localStorage es:
```json
{"nombre":"Angel","edad":25,"universidad":"pucp"}
```
Eso sí es un string válido.


### Leer y convertir de vuelta: JSON.parse()
Cuando leas un valor que guardaste como JSON, necesitas convertirlo de nuevo a objeto:

```javascript
const datos = localStorage.getItem("usuario");
const usuario = JSON.parse(datos);

console.log(usuario.nombre);        // "Angel"
console.log(usuario.universidad);  // "pucp"
```









