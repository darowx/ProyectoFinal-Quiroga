import { useNavigate } from 'react-router-dom';

function Item({ producto }) {
  const navigate = useNavigate();

  const handleDetalle = () => {
    navigate(`/producto/${producto.id}`);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h4>{producto.nombre}</h4>
      <p>{producto.descripcion}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <button onClick={handleDetalle}>Ver detalle</button>
    </div>
  );
}

export default Item;