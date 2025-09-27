import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartWidget() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalUnidades = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        marginLeft: "16px",
      }}
      onClick={() => navigate("/cart")}
      title="Ir al carrito"
    >
      <span role="img" aria-label="carrito" style={{ fontSize: "22px" }}>
        🛒
      </span>
      <span style={{ marginLeft: "6px", fontWeight: "bold" }}>
        {totalUnidades}
      </span>
    </div>
  );
}

export default CartWidget;