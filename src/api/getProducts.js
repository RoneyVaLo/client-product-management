import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get("/Products.json");
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los datos: " + error.message);
  }
};
