// Arreglo de productos
const productos = [
    { nombre: 'Playera_Yzy.Gap', precio: 1000 },
    { nombre: 'Pantalón_yzy.vultures', precio: 1500 },
    { nombre: 'Tenis_yzy.pods', precio: 800 },
  ];
  
  // Arreglo para almacenar los productos seleccionados (carrito de compras)
  let carrito = [];
  
  // Función para mostrar el menú de productos
  const mostrarMenu = () => {
    let opciones = productos.map((producto, index) => `${index + 1}. ${producto.nombre} - $${producto.precio}`).join('\n');
    opciones += '\n0. Finalizar compra'; // Agregamos la opción de finalizar la compra
  
    let seleccion = prompt(`Selecciona un producto:\n${opciones}`);
    let indice = parseInt(seleccion);
  
    if (indice >= 1 && indice < productos.length) {
      agregarAlCarrito(productos[indice]);
      mostrarMenu(); // Mostrar el menú nuevamente para agregar más productos
    } else if (indice === 0) {
      finalizarCompra();
    } else {
      console.log('Opción inválida.');
    }
  };
  
  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    console.log(`Producto "${producto.nombre}" agregado al carrito.`);
  };
  
  // Función para calcular el total de la compra
  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  };
  
  // Función para finalizar la compra
  const finalizarCompra = () => {
    console.log('Resumen de la compra:');
    carrito.forEach(producto => {
      console.log(`- ${producto.nombre}: $${producto.precio}`);
    });
    console.log(`Total: $${calcularTotal()}`);
  
    if (confirm('¿Estás seguro de querer finalizar la compra?')) {
      console.log('¡Compra realizada!');
      // Aquí podrías simular un pago o integrar una pasarela de pago real
    } else {
      mostrarMenu(); // Volver al menú principal
    }
  };
  
  // Iniciar la aplicación
  mostrarMenu();