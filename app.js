document.addEventListener("DOMContentLoaded", function() {

  // Obtener las entidades de los productos
  const product1 = document.getElementById("product1");
  const product2 = document.getElementById("product2");
  const product3 = document.getElementById("product3");

  // Botones para seleccionar el producto
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  // Agregar eventos a los botones para mostrar los productos
  btn1.addEventListener("click", function() {
    // Ocultar los otros productos y mostrar el producto 1
    product1.setAttribute("visible", "true");
    product2.setAttribute("visible", "false");
    product3.setAttribute("visible", "false");
  });

  btn2.addEventListener("click", function() {
    // Ocultar los otros productos y mostrar el producto 2
    product1.setAttribute("visible", "false");
    product2.setAttribute("visible", "true");
    product3.setAttribute("visible", "false");
  });

  btn3.addEventListener("click", function() {
    // Ocultar los otros productos y mostrar el producto 3
    product1.setAttribute("visible", "false");
    product2.setAttribute("visible", "false");
    product3.setAttribute("visible", "true");
  });
});
