// 🎯 Pixel personalizado: guarda una compra de shopify en localStorage

// Suscribimos una función al evento "checkout_completed" de Shopify
// y mostramos por consola que el evento fue recibido
analytics.subscribe("checkout_completed", (event) => {
  console.log("🛒 Evento checkout_completed recibido:", event);

// Extraemos la información del checkout desde el evento
  const checkout = event.data.checkout;

  // 🧪 Validamos que existan los datos necesarios
  if (!checkout || !checkout.lineItems || !checkout.totalPrice) {
    console.warn("⚠️ Datos incompletos en checkout:", checkout);
    return;
  }

// Mapeamos los productos de la compra para estructurarlos en formato ecommerce GA4
  const items = checkout.lineItems.map(item => {
    const variant = item.variant || {};  // Detalles del producto seleccionado (color, talla, etc.)
    const product = variant.product || {}; // Detalles generales del producto
    const imageUrl = variant.image ? `https:${variant.image.src}` : ''; // Imagen del producto

    return {
      item_id: variant.sku || variant.id || item.id, // ID del ítem (preferiblemente SKU)
      item_name: item.title,  // Nombre del producto
      item_variant: variant.title, // Variante (por ejemplo, "Rojo / M")
      currency: variant.price?.currencyCode || checkout.totalPrice?.currencyCode, // Moneda
      item_brand: product.vendor || '', // Marca del producto
      price: variant.price?.amount || item.price, // Precio unitario
      quantity: item.quantity, // Cantidad comprada
      item_category: product.type || '', // Categoría del producto
      item_image: imageUrl // URL de la imagen
    };
  });

  // Creamos el objeto de compra (payload) con toda la información de la orden
  const payload = {
    transaction_id: checkout.order?.id || checkout.token, // ID de la transacción u orden
    value: checkout.totalPrice?.amount || 0, // Valor total de la compra
    currency: checkout.totalPrice?.currencyCode || 'PEN', // Moneda
    shipping: checkout.shippingLine?.price?.amount || 0, // Costo de envío
    tax: checkout.totalTax?.amount || 0, // Impuestos
    items: items, // Lista de productos comprados
    purchase_date: new Date().toISOString()  // Fecha y hora exacta de la compra (en formato ISO)
  };

  
  // Guardamos el objeto de compra en localStorage bajo la clave "lastPurchase"
  // En caso de error (por ejemplo, falta de espacio en el navegador), lo mostramos en consola
  try {
    localStorage.setItem("lastPurchase", JSON.stringify(payload));
    console.log("💾 Compra guardada en localStorage:", payload);
  } catch (e) {
    console.error("❌ Error al guardar en localStorage:", e);
  }
});
