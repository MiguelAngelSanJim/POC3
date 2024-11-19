document.addEventListener("DOMContentLoaded", function () {
  const product1 = document.getElementById("product1");
  const product2 = document.getElementById("product2");
  const product3 = document.getElementById("product3");

  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  function showModel(modelToShow) {
    product1.setAttribute("visible", "false");
    product2.setAttribute("visible", "false");
    product3.setAttribute("visible", "false");

    modelToShow.setAttribute("visible", "true");
  }

  btn1.addEventListener("click", function () {
    showModel(product1);
  });

  btn2.addEventListener("click", function () {
    showModel(product2);
  });

  btn3.addEventListener("click", function () {
    showModel(product3);
  });
});
