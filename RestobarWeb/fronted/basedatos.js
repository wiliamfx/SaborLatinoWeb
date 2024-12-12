// Función para cargar productos según la categoría seleccionada
function loadProducts(categoria) {
    const url = `http://localhost:3000/categoria/${categoria}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar productos: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Productos cargados:', data);
            // Llamar a displayProducts para renderizar los productos en el HTML
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error al cargar productos:', error);
        });
}

// Función para mostrar productos en el DOM
function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Limpiar productos anteriores

    if (products.length === 0) {
        // Si no hay productos, mostrar un mensaje
        productsContainer.innerHTML = `<p>No se encontraron productos en esta categoría.</p>`;
        return;
    }

    // Mostrar productos en el contenedor
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <div class="product-image">
                <!-- Aquí reemplaza 'ruta/a/la/imagen.jpg' con la URL de la imagen o su ruta -->
                <img src="ruta/a/la/imagen.jpg" alt="${product.nombre}" />
            </div>
            <div class="product-info">
                <h3>${product.nombre}</h3>
                <p>Precio: S/${product.precio}</p>
            </div>
        `;

        productsContainer.appendChild(productElement);
    });
}
