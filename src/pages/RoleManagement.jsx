import axios from "axios";
import React, { useEffect, useState } from "react";
import EntityHeader from "../components/common/EntityHeader";
import EntitySearchBar from "../components/common/EntitySearchBar";
import DataTable from "../components/common/DataTable";
import RoleRow from "../components/RoleRow";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const RoleManagement = () => {
  const BASE_URL = "http://localhost:3000/api/roles";
  const [searchTerm, setSearchTerm] = useState("");
  
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const columns = [
    { label: "Nombre", key: "name" },
    { label: "Permisos", key: "permissions" },
    { label: "Acciones", key: "actions", className: "text-right" },
  ];

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      // console.log(response);

      if (response.status === 200) {
        setRoles(response.data);
      }
    } catch (err) {
      console.error("Fetch roles error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const renderRoleRow = (role) => (
    <RoleRow key={role.id} role={role} onDelete={handleDelete} />
  );

  // Filtrar productos basados en término de búsqueda
  const filteredRoles = roles?.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      if (window.confirm("¿Está seguro que desea eliminar este rol?")) {
        await axios.delete(`${BASE_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setRoles((prev) => prev.filter((user) => user.id !== id));
      }
    } catch (err) {
      console.error("Delete role error:", err);
    }
  };

  if (loading) return <div>Cargando...</div>;

  if (user?.Role !== "SuperAdmin") {
    return <Navigate to="/" replace />
  }

  return (
    <section className="space-y-6">
      <EntityHeader
        title="Roles"
        subtitle="Gestione la información de los Roles"
        buttonLabel="Crear Role"
        buttonHref="/roles/new"
      />
      <EntitySearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        totalCount={filteredRoles.length}
        placeholder="Buscar roles..."
      />
      <DataTable
        columns={columns}
        data={filteredRoles}
        renderRow={renderRoleRow}
      />
    </section>
  );
};

export default RoleManagement;
