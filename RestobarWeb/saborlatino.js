// Función para cargar productos por categoría
function loadProducts(category) {
  // Limpiar el contenedor de productos
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = ''; // Limpiar contenido anterior

  // Definir los productos por categoría
  const categoryProducts = products[category]; // products es el objeto de productos

  if (categoryProducts) {
      categoryProducts.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product-card');
          productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.name}" class="product-image">
              <div class="product-info">
                  <h3>${product.name}</h3>
                  <p>${product.description}</p>
                  <p>Precio: ${product.price}</p>
                  <p>Cantidad disponible: ${product.quantity}</p>
              </div>
          `;
          productContainer.appendChild(productDiv);
      });
  } else {
      productContainer.innerHTML = "<p>No hay productos disponibles en esta categoría.</p>";
  }
}
const products = {
  cervezas: [
      {
          name: "Cerveza 1",
          description: "Cerveza artesanal",
          price: "S/ 15.00",
          quantity: 20,
          image: "imagenes/cerveza1.jpg" // Aquí la imagen del producto
      },
      {
          name: "Cerveza 2",
          description: "Cerveza rubia",
          price: "S/ 10.00",
          quantity: 15,
          image: "imagenes/cerveza2.jpg" // Aquí la imagen del producto
      }
  ],
  platos_fuertes: [
      {
          name: "Plato 1",
          description: "Comida típica",
          price: "S/ 25.00",
          quantity: 10,
          image: "imagenes/plato1.jpg" // Aquí la imagen del producto
      },
      {
          name: "Plato 2",
          description: "Comida gourmet",
          price: "S/ 30.00",
          quantity: 5,
          image: "imagenes/plato2.jpg" // Aquí la imagen del producto
      }
  ],
  // Añadir otras categorías con sus productos...
};
