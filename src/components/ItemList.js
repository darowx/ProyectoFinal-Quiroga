import Item from './Item';

function ItemList({ products }) {
  return (
    <div>
      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        products.map(producto => (
          <Item key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
}

export default ItemList;