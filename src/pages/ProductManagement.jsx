import React, { useEffect, useState } from "react";
// import { useProductsContext } from "../contexts/useProductsContext";
import ProductRow from "../components/ProductRow";
import EntityHeader from "../components/common/EntityHeader";
import EntitySearchBar from "../components/common/EntitySearchBar";
import DataTable from "../components/common/DataTable";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProductManagement = () => {
  const BASE_URL = "http://localhost:3000/api/products";
  const [searchTerm, setSearchTerm] = useState("");
  // const { products, deleteProduct, loading } = useProductsContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useAuth();

  const columns = [
    { label: "Código", key: "code" },
    { label: "Nombre", key: "name" },
    { label: "Cantidad", key: "quantity" },
    { label: "Precio", key: "price" },
    { label: "Acciones", key: "actions", className: "text-right" },
  ];

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      // console.log(response);

      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (err) {
      console.error("Fetch products error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProductRow = (product) => (
    <ProductRow key={product.id} product={product} onDelete={handleDelete} />
  );

  // Filtrar productos basados en término de búsqueda
  const filteredProducts = products?.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      if (window.confirm("¿Está seguro que desea eliminar este producto?")) {
        await axios.delete(`${BASE_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setProducts((prev) => prev.filter((product) => product.id !== id));
      }
    } catch (err) {
      console.error("Delete product error:", err);
    }
  };

  if (loading) return <div>Cargando...</div>;

  if ((user?.Role !== "Auditor") && (user?.Role !== "Registrador")) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="space-y-6">
      <EntityHeader
        title="Productos"
        subtitle="Gestione la información de los productos"
        buttonLabel="Crear Producto"
        buttonHref="/products/new"
      />
      <EntitySearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        totalCount={filteredProducts.length}
        placeholder="Buscar productos..."
      />
      <DataTable
        columns={columns}
        data={filteredProducts}
        renderRow={renderProductRow}
      />
    </section>
  );
};

export default ProductManagement;
