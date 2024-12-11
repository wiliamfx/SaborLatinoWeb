// Función para añadir al carrito
function añadirAlCarrito(nombre, precio) {
    let carrito = document.getElementById("lista-carrito");
    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td><img src="img/carrito-icono.png" alt="${nombre}"></td>
        <td>${nombre}</td>
        <td>$${precio}</td>
    `;
    carrito.appendChild(fila);
}

// Función para mostrar el precio
function mostrarPrecio(nombre, descripcion, precio) {
    alert(`Promo: ${nombre}\n${descripcion}\nPrecio: $${precio}`);
}

// Función para mostrar los productos de la categoría
function mostrarProductos(categoria) {
    alert(`Mostrando productos de la ${categoria}`);
}
