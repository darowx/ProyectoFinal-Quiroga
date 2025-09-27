import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(producto, cantidad) {
    // Si el producto ya está en el carrito, suma la cantidad
    const found = cart.find(item => item.producto.id === producto.id);
    if (found) {
      setCart(cart.map(item =>
        item.producto.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      ));
    } else {
      setCart([...cart, { producto, cantidad }]);
    }
  }

  function removeFromCart(productId) {
    setCart(cart.filter(item => item.producto.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}