import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0
  );

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map(({ producto, cantidad }) => (
        <div key={producto.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h4>{producto.nombre}</h4>
          <p>Precio: ${producto.precio}</p>
          <p>Cantidad: {cantidad}</p>
          <p>Subtotal: ${producto.precio * cantidad}</p>
          <button onClick={() => removeFromCart(producto.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}

export default Cart;