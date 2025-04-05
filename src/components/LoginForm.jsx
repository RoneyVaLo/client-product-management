import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Eye from "./icons/Eye";
import EyeOff from "./icons/Eyeoff";

function LoginForm() {
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    console.log("Intentando iniciar sesión con:", data);
    // Aquí iría tu lógica de autenticación
  };

  return (
    <section className="w-full max-w-md border rounded-lg shadow-lg mx-auto my-20">
      <div className="p-6 space-y-1">
        <h3 className="text-2xl font-bold">Iniciar Sesión</h3>
        <p className="text-sm text-gray-500">
          Ingrese sus credenciales para acceder al sistema
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Nombre de Usuario
            </label>
            <input
              id="username"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              placeholder="Ingrese su nombre de usuario"
              {...register("username", {
                required: "El nombre de usuario es obligatorio",
              })}
            />
            {errors.username && <p className="text-xs text-red-400 font-bold">{errors.username.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                placeholder="Ingrese su contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 8,
                    message: "Debe tener al menos 8 caracteres",
                  },
                })}
              />
              <button
                type="button"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye />
                ) : (
                  <EyeOff />
                )}
                <span className="sr-only">
                  {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                </span>
              </button>

              {errors.password && <p className="text-xs text-red-400 font-bold">{errors.password.message}</p>}
            </div>
          </div>
        </div>
        <div className="p-6 pt-0 flex flex-col">
          <button
            type="submit"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 w-full"
          >
            {isSubmitting ? "Verificando..." : "Iniciar Sesión"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
