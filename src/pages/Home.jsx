import React from "react";
import Dashboard from "../components/Dashboard";

const Home = () => {
  // TODO: Obtener estos datos de la API
  const activityData = [1, 2, 3, 4, 5].map((i) => ({
    id: i,
    isNew: i % 2 !== 0,
    description:
      i % 2 === 0 ? "Producto actualizado" : "Nuevo producto agregado",
    timeAgo: `Hace ${i} ${i === 1 ? "hora" : "horas"}`,
  }));

  const featuredProductsData = [
    {
      name: "Laptop Pro",
      units: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 1000) + 100,
    },
    {
      name: "Smartphone X",
      units: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 1000) + 100,
    },
    {
      name: "Tablet Mini",
      units: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 1000) + 100,
    },
    {
      name: "Monitor 4K",
      units: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 1000) + 100,
    },
  ];

  return (
    <Dashboard activityData={activityData} featuredProductsData={featuredProductsData}/>
  );
};

export default Home;
