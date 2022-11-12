function setCarritoVacio() {
  cartRows.innerHTML = `
      <tr>     
          <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes productos en el carrito</div></td>
      </tr>            
      `;
}
function vaciarCarrito() {
  localStorage.removeItem('carrito');
}

function calcularTotal(products) {
  return products.reduce(
    (acum, product) => (acum += product.price * product.quantity),
    0
  );
}

let cartRows = document.querySelector('.cartRows');

if (localStorage.carrito) {
  let carrito = JSON.parse(localStorage.carrito);
  carrito.forEach((item, index) => {
    fetch(`/api/v1/products/${item.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        cartRows.innerHTML += `
        <tr id="row${index}">
        <th scope="row">${index + 1}</th>
        <td>${data.data.name}</td>
        <td>${data.data.price}</td>
        <td class="text-center">${item.quantity}</td>
        <td class="text-center">$ ${parseFloat(
          data.data.price * item.quantity,
          2
        ).toFixed(2)}</td>
        <td><button class="btn btn-danger btn-sm" onclick=removeItem(${index})></button></td>
        </tr>
        `;
      });
  });
}
