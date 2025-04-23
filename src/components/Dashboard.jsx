import React, { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import Package from "./icons/Package";
import Users from "./icons/Users";
import InfoCardWithList from "./InfoCardWithList";
import FeaturedProductItem from "./FeaturedProductItem";
import ActivityItem from "./ActivityItem";
import axios from "axios";

const Dashboard = ({ activityData }) => {
  const BASE_URL = "http://localhost:3000/api";
  const [totalProducts, setTotalProducts] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const products = await axios.get(`${BASE_URL}/products`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        const users = await axios.get(`${BASE_URL}/users`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setTotalProducts(products.data.length);
        setActiveUsers(users.data.length);
        setFeaturedProducts(products.data.slice(0, 4)); // Asumiendo que los primeros 4 son destacados
      } catch (error) {
        console.log(error);
      }
    };
    fetchDashboardData();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-2xl space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500">
          Bienvenido al sistema de gestión de productos
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Productos"
          icon={<Package className="h-5 w-5" />}
          value={totalProducts}
          trend="+12% desde el mes pasado"
        />
        <StatsCard
          title="Usuarios Activos"
          icon={<Users className="h-5 w-5" />}
          value={activeUsers}
          trend="+2 nuevos esta semana"
        />
      </div>
      <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-6">
        <InfoCardWithList
          title="Resumen de Actividad"
          description="Actividad reciente en el sistema"
        >
          {activityData.map((activity) => (
            <ActivityItem key={activity.id} {...activity} />
          ))}
        </InfoCardWithList>

        <InfoCardWithList
          title="Productos Destacados"
          description="Los productos más populares"
        >
          {featuredProducts.map((product, i) => (
            <FeaturedProductItem key={i} {...product} />
          ))}
        </InfoCardWithList>
      </div>
    </>
  );
};

export default Dashboard;
