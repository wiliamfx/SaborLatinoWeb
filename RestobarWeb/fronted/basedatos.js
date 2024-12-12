// Define la URL de tu API (ajusta esto según corresponda)
const API_URL = 'http://localhost:3000/api/productos'; // Asegúrate de que la URL sea la correcta

// Función para cargar productos según la categoría seleccionada
function loadProducts(categoria) {
    const url = `http://localhost:3000/productos/${categoria}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar productos: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Productos cargados:', data);
            // Aquí agrega lógica para mostrar los productos en el DOM
        })
        .catch(error => {
            console.error('Error al cargar productos:', error);
        });
}


// Función para renderizar productos en el HTML
function renderProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos productos

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Precio:</strong> S/ ${product.price}</p>
        `;
        container.appendChild(productCard);
    });
}

