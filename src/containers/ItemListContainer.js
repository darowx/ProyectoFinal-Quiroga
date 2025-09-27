import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const { categoriaId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let ref = collection(db, "productos");

    if (categoriaId) {
      ref = query(ref, where("categoria", "==", categoriaId));
    }

    getDocs(ref)
      .then((resp) => {
        setProducts(
          resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;