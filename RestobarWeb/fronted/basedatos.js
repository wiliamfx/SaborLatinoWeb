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
        const imagenURL = `http://localhost:3000/productos/imagen/${product.idproducto}`;
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

function loadPromos() {
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
function displayPromos() {
    console.log("Datos recibidos:"); // Verifica los datos
    const productsContainer = document.getElementById('promocion-container');
    promosContainer.innerHTML = ''; // Limpiar productos anteriores

    if (products.length === 0) {
        productsContainer.innerHTML = `<p>No se encontraron productos en esta categoría.</p>`;
        return;
    }

    products.forEach(product => {
        const imagenURL = `http://localhost:3000/productos/imagen/${product.idproducto}`;
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <div class="promocion-card">
                <span class="descuento">30% OFF</span>
                <img src="imagenes/alita.png" alt="Pack Coca Cola + Inca Kola">
                <div class="promo-details">
                    <p>Pack (6 Alitas + 1 maracu x 500 ml)</p>
                    <p><span class="precio-original">S/ 19.60</span> S/ 13.90</p>
                    <a href="#" class="ver-producto">Ver producto</a>
                </div>
            </div>
        `;

        productsContainer.appendChild(productElement);
    });
}

let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Cargar carrito desde localStorage

// Función para calcular el precio total dinámicamente
function calcularPrecioTotal() {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
}

// Función para agregar productos al carrito
function addToCart(id, nombre, precio, imagen) {
    const productoExistente = carrito.find(producto => producto.id === id);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
    }

    // Guardar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar contador del carrito (precio total dinámico)
    actualizarCarritoUI();

    alert(`${nombre} ha sido agregado al carrito`);
}

// Función para actualizar la interfaz del carrito
function actualizarCarritoUI() {
    const carritoCountElement = document.getElementById('carrito-count');
    if (carritoCountElement) {
        const total = calcularPrecioTotal();
        carritoCountElement.textContent = `S/ ${total.toFixed(2)}`;
    }
}

// Llamar a actualizarCarritoUI al cargar la página para mostrar el estado inicial del carrito
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarritoUI();
});
