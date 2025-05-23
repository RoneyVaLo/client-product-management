import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";

const UserForm = () => {
  const BASE_URL = "http://localhost:3000/api/users";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);
  const [roles, setRoles] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const preloadUser = async () => {
    const userToEdit = await axios.get(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    reset(userToEdit.data);
  };

  useEffect(() => {
    if (id) {
      preloadUser();
    } else {
      reset();
    }
    loadRoles();
  }, []);

  const loadRoles = async () => {
    const response = await axios.get("http://localhost:3000/api/roles", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    delete response.data.permissions;
    setRoles(response.data);
  };

  const addUser = async (newUser) => {
    try {
      const { data } = await axios.post(BASE_URL, newUser, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      console.log(data);
      toast.success("Usuario creado correctamente")
    } catch (err) {
      console.error("Add user error:", err);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      console.log(updatedData)
      updatedData.roleId = updatedData.Role;
      delete updatedData.Role;
      const response = await axios.put(`${BASE_URL}/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      console.log(response.data);
      toast.success("Usuario actualizado correctamente")
    } catch (err) {
      console.error("Update user error:", err);
    }
  };

  // console.log(roles)
  const onSubmit = async (data) => {
    delete data.confirmationPassword;
    data.Role = roles.find((role) => role.id === parseInt(data.Role)).id;
    console.log(data.Role)

    if (id) {
      updateUser(data);
    } else {
      addUser(data);
    }
    navigate("/users");
  };

  const goBack = () => {
    navigate(-1);
  };

  const {user} = useAuth();
  if (user?.Role !== "SuperAdmin") {
      return <Navigate to="/" replace />
    }

  return (
    <div className="space-y-6">
      <FormHeader
        title={id ? "Editar Usuario" : "Crear Usuario"}
        onBack={goBack}
      />
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSection
            title={id ? "Detalles del Usuario" : "Nuevo Usuario"}
            description="Complete la información del usuario"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {!id && (
                <TextInput
                  label="Username"
                  name="username"
                  register={{
                    ...register("username", {
                      required: "El username es obligatorio",
                    }),
                  }}
                  error={errors.username?.message}
                  placeholder="Username del usuario"
                />
              )}

              <TextInput
                label="Nombre de Usuario"
                name="name"
                register={{
                  ...register("name", {
                    required: "El nombre de usuario es obligatorio",
                  }),
                }}
                error={errors.name?.message}
                placeholder="Nombre de usuario"
              />

              <TextInput
                label="Identificación"
                name="identification"
                register={{
                  ...register("identification", {
                    required: "La identificación del usuario es obligatorio",
                  }),
                }}
                error={errors.identification?.message}
                placeholder="Identificación del usuario"
              />
            </div>
            <SelectInput
              label="Rol"
              name="Role"
              register={{
                ...register("Role", {
                  required: "El rol del usuario es obligatorio",
                }),
              }}
              error={errors.role?.message}
              options={roles.map((role) => ({
                value: role.id,
                label: role.name,
              }))}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PasswordInput
                id="password"
                label="Contraseña"
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Debe tener al menos 8 caracteres",
                  },
                })}
                error={errors.password?.message}
                show={showPassword}
                toggle={() => setShowPassword(!showPassword)}
              />
              <PasswordInput
                id="confirmationPassword"
                label="Confirmar Contraseña"
                {...register("confirmationPassword", {
                  minLength: {
                    value: 8,
                    message: "Debe tener al menos 8 caracteres",
                  },
                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                })}
                error={errors.confirmationPassword?.message}
                show={showConfirmationPassword}
                toggle={() =>
                  setShowConfirmationPassword(!showConfirmationPassword)
                }
              />
            </div>
          </FormSection>
          <FormActions onCancel={goBack} />
        </form>
      </div>
    </div>
  );
};

export default UserForm;
