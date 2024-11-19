document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("a-scene");

  // Detectar si la cámara se inicializa correctamente
  scene.addEventListener("camera-init", () => {
    console.log("¡Cámara inicializada correctamente!");
  });

  // Manejar errores de la cámara
  scene.addEventListener("camera-error", (error) => {
    console.error("Error al inicializar la cámara:", error);
  });

  // Control de modelos 3D
  document.addEventListener("DOMContentLoaded", () => {
  // Obtener los modelos y botones
  const product1 = document.getElementById("product1");
  const product2 = document.getElementById("product2");
  const product3 = document.getElementById("product3");

  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  // Función para mostrar un modelo y ocultar los demás
  function showModel(modelToShow) {
    product1.setAttribute("visible", "false");
    product2.setAttribute("visible", "false");
    product3.setAttribute("visible", "false");

    modelToShow.setAttribute("visible", "true");
  }

  // Asignar eventos a los botones
  btn1.addEventListener("click", () => showModel(product1));
  btn2.addEventListener("click", () => showModel(product2));
  btn3.addEventListener("click", () => showModel(product3));
});
