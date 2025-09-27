import { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '10px 0' }}>
        <button onClick={decrementar} disabled={cantidad === 1}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar} disabled={cantidad === stock}>+</button>
      </div>
      <button onClick={() => onAdd(cantidad)} disabled={stock === 0}>
        Agregar al carrito
      </button>
      {stock === 0 && <p style={{ color: 'red' }}>Sin stock</p>}
    </div>
  );
}

export default ItemCount;