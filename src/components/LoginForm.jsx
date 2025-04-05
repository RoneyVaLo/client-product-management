import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-gray-500"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-gray-500"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
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
