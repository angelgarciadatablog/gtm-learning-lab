// 🎯 Pixel personalizado que guarda la compra en localStorage
//Insertar esto en la parte de eventos de cliente se shopify como un pixel personalizado


analytics.subscribe("checkout_completed", (event) => {
  console.log("🛒 Evento checkout_completed recibido:", event);

  const checkout = event.data.checkout;

  // 🧪 Verificamos si hay datos
  if (!checkout || !checkout.lineItems || !checkout.totalPrice) {
    console.warn("⚠️ Datos incompletos en checkout:", checkout);
    return;
  }

  const items = checkout.lineItems.map(item => {
    const variant = item.variant || {};
    const product = variant.product || {};
    const imageUrl = variant.image ? `https:${variant.image.src}` : '';

    return {
      item_id: variant.sku || variant.id || item.id,
      item_name: item.title,
      item_variant: variant.title,
      currency: variant.price?.currencyCode || checkout.totalPrice?.currencyCode,
      item_brand: product.vendor || '',
      price: variant.price?.amount || item.price,
      quantity: item.quantity,
      item_category: product.type || '',
      item_image: imageUrl
    };
  });

  const payload = {
    transaction_id: checkout.order?.id || checkout.token,
    value: checkout.totalPrice?.amount || 0,
    currency: checkout.totalPrice?.currencyCode || 'PEN',
    shipping: checkout.shippingLine?.price?.amount || 0,
    tax: checkout.totalTax?.amount || 0,
    items: items
  };

  try {
    localStorage.setItem("lastPurchase", JSON.stringify(payload));
    console.log("💾 Compra guardada en localStorage:", payload);
  } catch (e) {
    console.error("❌ Error al guardar en localStorage:", e);
  }
});
