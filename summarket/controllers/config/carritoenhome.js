const refrescarConteoDeCarrito = () => {
    const conteoCarrito = document.querySelector("#conteoCarrito");
    const carritoEncabezado = new Carrito();
    const conteo = carritoEncabezado.obtenerConteo();
    if (conteo > 0) {
        conteoCarrito.textContent = "(".concat(conteo, ")");
    } else {
        $conteoCarrito.textContent = "";
    }
};
// Hacerla global
window.refrescarConteoDeCarrito = refrescarConteoDeCarrito;
refrescarConteoDeCarrito();