let carrito = []; // Declarar carrito como un arreglo vacío

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

function displayProducts(products) {
    console.log("Datos recibidos:", products); // Verifica los datos
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Limpiar productos anteriores

    if (products.length === 0) {
        productsContainer.innerHTML = `<p>No se encontraron productos en esta categoría.</p>`;
        return;
    }

    products.forEach(product => {
        const imagenURL = `http://localhost:3000/imagenes/${product.idproducto}`    
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <div class="product-image">
                <img src="${imagenURL}" alt="${product.nombreproducto}" />
            </div>
            <div class="product-info">
                <h3>${product.nombreproducto}</h3>
                <p>Precio: S/${product.precio}</p>
                <button onclick="addToCart(${product.idproducto}, '${product.nombreproducto}', ${product.precio}, '${imagenURL}')">Agregar al carrito</button>
            </div>
        `;

        productsContainer.appendChild(productElement);
    });
}

function addToCart(id, nombre, precio, imagen) {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.id === id);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
    }

    // Actualizar el contador del carrito
    const carritoCountElement = document.getElementById('carrito-count');
    if (carritoCountElement) {
        carritoCountElement.textContent = carrito.length;
    }

    alert(`${nombre} ha sido agregado al carrito`);
    console.log("soy un let" + carrito)
}
