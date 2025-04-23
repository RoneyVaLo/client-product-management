import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import FormHeader from "../components/common/FormHeader";
import FormSection from "../components/common/FormSection";
import TextInput from "../components/common/TextInput";
import SelectInput from "../components/common/SelectInput";
import PasswordInput from "../components/common/PasswordInput";
import FormActions from "../components/common/FormActions";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const RoleForm = () => {
  const BASE_URL = "http://localhost:3000/api/roles";
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    // watch,   
    reset,
    formState: { errors },
  } = useForm();

  const preloadRole = async () => {
    const roleToEdit = await axios.get(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    reset(roleToEdit.data);
  };

  useEffect(() => {
    if (id) {
      preloadRole();
    } else {
      reset();
    }
  }, []);


  const addRole = async (newRole) => {
    try {
      const { data } = await axios.post(BASE_URL, newRole, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      console.log(data);
    } catch (err) {
      console.error("Add role error:", err);
    }
  };

  const updateRole = async (updatedData) => {
    try {
      console.log(updatedData);
      const response = await axios.put(
        `${BASE_URL}/${id}`,
        { updatedData },
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error("Update role error:", err);
    }
  };

  const onSubmit = async (data) => {
    if (id) {
      updateRole(data);
    } else {
      addRole(data);
      // console.log(response)
    }
    navigate("/roles");
  };

  const goBack = () => {
    navigate(-1);
  };

  if (user?.Role !== "SuperAdmin") {
      return <Navigate to="/" replace />
    }

  return (
    <div className="space-y-6">
      <FormHeader
        title={id ? "Editar Rol" : "Crear Rol"}
        onBack={goBack}
      />
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSection
            title={id ? "Detalles del Rol" : "Nuevo Rol"}
            description="Complete la información del rol"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput
                label="Nombre del Rol"
                name="name"
                register={{
                  ...register("name", {
                    required: "El nombre del rol es obligatorio",
                  }),
                }}
                error={errors.name?.message}
                placeholder="Nombre del rol"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {}
            </div>
          </FormSection>
          <FormActions onCancel={goBack} />
        </form>
      </div>
    </div>
  );
};

export default RoleForm;
