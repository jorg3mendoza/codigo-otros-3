const productos = [
  // Array de objetos que representan los productos, cada uno con sus propiedades
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  // ... otros productos
];

const productosList = document.getElementById("lista-de-productos"); // Obtener la lista de productos por su ID
const inputFiltro = document.querySelector('.input'); // Obtener el input para el filtro
const botonFiltro = document.querySelector("button"); // Obtener el botón de filtro

// Función para crear un elemento HTML de producto a partir de un objeto producto
function crearElementoProducto(producto) {
  const divProducto = document.createElement("div"); // Crear un nuevo div para cada producto
  divProducto.classList.add("producto"); // Agregar la clase "producto" para estilos

  const titulo = document.createElement("p"); // Crear un párrafo para el título
  titulo.classList.add("titulo");
  titulo.textContent = producto.nombre; // Asignar el nombre del producto al título

  const imagen = document.createElement("img"); // Crear una imagen
  imagen.src = producto.img; // Asignar la URL de la imagen

  divProducto.appendChild(titulo); // Agregar el título al div del producto
  divProducto.appendChild(imagen); // Agregar la imagen al div del producto
  return divProducto; // Retornar el div del producto completo
}

// Función para mostrar los productos en la lista, reemplazando el contenido actual
function mostrarProductos(productosAMostrar) {
  productosList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
  productosAMostrar.forEach(producto => {
    productosList.appendChild(crearElementoProducto(producto)); // Crear y agregar cada producto a la lista
  });
}

// Función para filtrar los productos según el texto de búsqueda y las propiedades especificadas
function filtrarProductos(productos, texto, propiedades = ['tipo', 'color']) {
  return productos.filter(producto => {
    // Iterar sobre las propiedades y verificar si alguna coincide con el texto de búsqueda
    return propiedades.some(propiedad => {
      return producto[propiedad].toLowerCase().includes(texto.toLowerCase());
    });
  });
}

// Mostrar todos los productos al inicio
mostrarProductos(productos);

// Agregar un event listener al botón de filtro
botonFiltro.addEventListener('click', () => {
  const textoFiltro = inputFiltro.value; // Obtener el texto de búsqueda
  const productosFiltrados = filtrarProductos(productos, textoFiltro); // Filtrar los productos
  mostrarProductos(productosFiltrados); // Mostrar los productos filtrados
});  