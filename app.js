function selectProduct(product) {
    const productEntity = document.getElementById('product');
    
    // Cambiar el modelo GLTF según el producto seleccionado
    if (product === 'product1') {
      productEntity.setAttribute('gltf-model', 'url(img/product1.glb)');
    } else if (product === 'product2') {
      productEntity.setAttribute('gltf-model', 'url(img/product2.glb)');
    } else if (product === 'product3') {
      productEntity.setAttribute('gltf-model', 'url(img/product3.glb)');
    }
  
    // Ajustar la escala y la posición del modelo si es necesario
    productEntity.setAttribute('scale', '1 1 1');
    productEntity.setAttribute('position', '0 0.5 0');
    productEntity.setAttribute('rotation', '0 0 0');
  }