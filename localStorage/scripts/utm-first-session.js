<script>
// 📌 Este script captura los parámetros UTM de la primera visita del usuario
// y los guarda en localStorage por un máximo de 30 días.
//
// ✅ Útil para:
// - Atribuir conversiones o eventos a la campaña original del usuario.
// - Usar esos valores en etiquetas o variables de Google Tag Manager (GTM).
//
// 📥 Cómo acceder a los valores:
// - Crea variables en GTM de tipo "Código JavaScript personalizado"
//   que lean directamente desde localStorage (por ejemplo: localStorage.getItem("first_utm_source"))

  
  
  // Lista de parámetros UTM que deseamos capturar 
  var params = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

  // Objeto que permite leer los parámetros de la URL
  var searchParams = new URLSearchParams(window.location.search);

  // Obtenemos la fecha y hora actual en milisegundos
  var now = (new Date).getTime();

  // Definimos el tiempo de expiración en milisegundos (30 días)
  var expirationDays = 30;
  var expirationLimit = expirationDays * 24 * 60 * 60 * 1000; // 30 días en ms

  // Recorremos cada parámetro UTM
  for (var i = 0; i < params.length; i++) {
    var param = params[i];

    // Obtenemos el valor almacenado previamente y la marca de tiempo asociada
    var storedValue = localStorage.getItem("first_" + param);
    var storedTime = localStorage.getItem("first_" + param + "_ts");

    // Verificamos si el valor ha expirado (si ya pasaron los 30 días)
    var isExpired = storedTime && now - parseInt(storedTime, 10) > expirationLimit;

    // Si no hay valor guardado o ya expiró, capturamos el valor actual de la URL
    if (!storedValue || isExpired) {
      var value = searchParams.get(param);
      if (value) {
        // Guardamos el valor y el timestamp en localStorage
        localStorage.setItem("first_" + param, value);
        localStorage.setItem("first_" + param + "_ts", now.toString());
      }
    }
  }
</script>






