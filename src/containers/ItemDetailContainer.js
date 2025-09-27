import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const ref = doc(db, "productos", productoId);

    getDoc(ref)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProducto(null);
        }
      })
      .finally(() => setLoading(false));
  }, [productoId]);

  return (
    <div>
      <h2>Detalle del Producto</h2>
      {loading ? (
        <p>Cargando producto...</p>
      ) : producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;