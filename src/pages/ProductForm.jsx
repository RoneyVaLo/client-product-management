import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import FormHeader from "../components/common/FormHeader";
import FormSection from "../components/common/FormSection";
import TextInput from "../components/common/TextInput";
import TextAreaInput from "../components/common/TextAreaInput";
import NumberInput from "../components/common/NumberInput";
import FormActions from "../components/common/FormActions";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const ProductForm = () => {
  const BASE_URL = "http://localhost:3000/api/products";
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const preloadProduct = async () => {
    const productToEdit = await axios.get(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    reset(productToEdit.data);
  };

  useEffect(() => {
    if (id) {
      preloadProduct();
    } else {
      reset(); // esto limpia el formulario si no hay producto para editar
    }
  }, []);

  const addProduct = async (newProduct) => {
    try {
      newProduct.userId = user.id;
      const { data } = await axios.post(BASE_URL, newProduct, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      console.log(data);
    } catch (err) {
      console.error("Add product error:", err);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      const { data } = await axios.put(`${BASE_URL}/${id}`, updatedProduct, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      console.log(data);
    } catch (err) {
      console.error("Update product error:", err);
    }

    console.log("Actualizar Producto");
    // console.log(updateProduct);
  };

  const onSubmit = async (data) => {
    // console.log(data);
    data.price = parseFloat(data.price);
    if (id) {
      updateProduct(data);
    } else {
      addProduct(data);
      // console.log(response)
    }
    navigate("/products");
  };

  const goBack = () => {
    navigate(-1);
  };

  if (user?.Role !== "Registrador") {
      return <Navigate to="/" replace />
    }

  return (
    <section className="space-y-6">
      <FormHeader
        title={id ? "Editar Producto" : "Crear Producto"}
        onBack={goBack}
      />
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSection
            title={id ? "Detalles del Producto" : "Nuevo Producto"}
            description="Complete la información del producto"
          >
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput
                label="Código"
                name="code"
                register={{
                  ...register("code", { required: "El código es obligatorio" }),
                }}
                error={errors.code?.message}
                placeholder="Código del producto"
              />
              <TextInput
                label="Nombre"
                name="name"
                register={{
                  ...register("name", { required: "El nombre es obligatorio" }),
                }}
                error={errors.name?.message}
                placeholder="Nombre del producto"
              />
            </article>
            <TextAreaInput
              label="Descripción"
              name="description"
              register={{
                ...register("description", {
                  required: "La descripción es obligatorio",
                }),
              }}
              error={errors.description?.message}
              placeholder="Descripción del producto"
            />
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <NumberInput
                label="Cantidad"
                name="quantity"
                register={{
                  ...register("quantity", {
                    required: "La cantidad es obligatorio",
                  }),
                }}
                error={errors.quantity?.message}
                placeholder="Cantidad disponible"
                min="0"
                step="1"
              />
              <NumberInput
                label="Precio"
                name="price"
                register={{
                  ...register("price", {
                    required: "El precio es obligatorio",
                  }),
                }}
                error={errors.price?.message}
                placeholder="Precio del producto"
                min="0"
                step="0.01"
              />
            </article>
          </FormSection>
          <FormActions onCancel={goBack} />
        </form>
      </div>
    </section>
  );
};

export default ProductForm;
