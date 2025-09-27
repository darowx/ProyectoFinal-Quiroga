import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const nuevaOrden = {
      comprador: form,
      items: cart.map(item => ({
        id: item.producto.id,
        nombre: item.producto.nombre,
        precio: item.producto.precio,
        cantidad: item.cantidad,
      })),
      total,
      fecha: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), nuevaOrden);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      alert("Hubo un error al guardar la orden. Intenta nuevamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <b>{orderId}</b></p>
      </div>
    );
  }

  if (cart.length === 0) {
    return <p>El carrito está vacío. Agregá productos antes de comprar.</p>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "24px" }}>
        <div>
          <label>
            Nombre:
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Teléfono:
            <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Finalizar compra"}
        </button>
      </form>
      <h3>Resumen del carrito</h3>
      {cart.map(({ producto, cantidad }) => (
        <div key={producto.id}>
          {producto.nombre} x {cantidad} = ${producto.precio * cantidad}
        </div>
      ))}
      <h4>Total: ${total}</h4>
    </div>
  );
}

export default Checkout;