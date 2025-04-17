import React from "react";
import StatsCard from "./StatsCard";
import Package from "./icons/Package";
import Users from "./icons/Users";
import InfoCardWithList from "./InfoCardWithList";
import FeaturedProductItem from "./FeaturedProductItem";
import ActivityItem from "./ActivityItem";

const Dashboard = ({activityData, featuredProductsData}) => {
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
          value="254"
          trend="+12% desde el mes pasado"
        />
        <StatsCard
          title="Usuarios Activos"
          icon={<Users className="h-5 w-5" />}
          value="18"
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
          {featuredProductsData.map((product, i) => (
            <FeaturedProductItem key={i} {...product} />
          ))}
        </InfoCardWithList>
      </div>
    </>
  );
};

export default Dashboard;
