import axios from "axios";
import React, { useEffect, useState } from "react";
import UserRow from "../components/UserRow";
import EntityHeader from "../components/common/EntityHeader";
import EntitySearchBar from "../components/common/EntitySearchBar";
import DataTable from "../components/common/DataTable";

const UserManagement = () => {
  const BASE_URL = "http://localhost:3000/api/users";
  const [searchTerm, setSearchTerm] = useState("");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { label: "Nombre", key: "name" },
    { label: "Identificación", key: "identification" },
    { label: "Último Logueo", key: "lastLogin" },
    { label: "Rol", key: "Role" },
    { label: "Acciones", key: "actions", className: "text-right" },
  ];

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      // console.log(response);

      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (err) {
      console.error("Fetch users error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUserRow = (user) => (
    <UserRow key={user.id} userShow={user} onDelete={handleDelete} />
  );

  // Filtrar productos basados en término de búsqueda
  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ("" + user.identification).includes(searchTerm.toLowerCase()) ||
      ("" + user.role).includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      if (window.confirm("¿Está seguro que desea eliminar este usuario?")) {
        await axios.delete(`${BASE_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setUsers((prev) => prev.filter((user) => user.id !== id));
      }
    } catch (err) {
      console.error("Delete user error:", err);
    }
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <section className="space-y-6">
      <EntityHeader
        title="Usuarios"
        subtitle="Gestione la información de los usuarios"
        buttonLabel="Crear usuario"
        buttonHref="/users/new"
      />
      <EntitySearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        totalCount={filteredUsers.length}
        placeholder="Buscar usuarios..."
      />
      <DataTable
        columns={columns}
        data={filteredUsers}
        renderRow={renderUserRow}
      />
    </section>
  );
};

export default UserManagement;
