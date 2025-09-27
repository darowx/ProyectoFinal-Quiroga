import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

function ItemDetail({ producto }) {
  const [agregado, setAgregado] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      {!agregado ? (
        <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p style={{ color: 'green' }}>¡Producto agregado al carrito!</p>
      )}
    </div>
  );
}

export default ItemDetail;