# 🛡️ Sistema de Gestión de Productos - Frontend (ReactJS)

## Objetivo

Aplicar los conocimientos relacionados con la seguridad en el software y las vulnerabilidades, garantizando que la aplicación sea robusta y resistente a amenazas comunes.

## Introducción

En este proyecto, los estudiantes desarrollarán una aplicación básica que incorpore principios y prácticas de seguridad en el software. La aplicación es un sistema de gestión de productos, donde los usuarios podrán registrarse, iniciar sesión y gestionar productos (crear, editar y eliminar). A lo largo del desarrollo, se aplicarán técnicas de seguridad esenciales para proteger la aplicación contra ataques y vulnerabilidades, cumpliendo con los requerimientos establecidos por la UTN.

---

## 🎯 Objetivos adicionales del proyecto

- Brindar una interfaz amigable y segura para la gestión de productos, usuarios, roles y permisos.
- Implementar mecanismos de autenticación y autorización que aseguren el acceso a las funciones del sistema según el rol asignado.
- Garantizar la protección contra ataques comunes, como inyección SQL y Cross-site Scripting (XSS).
- Expulsar automáticamente a los usuarios tras 1 minuto de inactividad y asegurar el manejo adecuado de cookies sin exponer información sensible.

---

## ⚙️ Funcionalidades principales

### 🧾 Gestión de Productos
- **CRUD:** Crear, editar, eliminar y listar productos.
- **Datos del producto:** Cada producto incluye un código alfanumérico, nombre, descripción, cantidad y precio.

### 👥 Gestión de Usuarios
- **Administración:** Crear, editar y eliminar usuarios.
- **Seguridad:** Contraseñas cifradas y autenticación obligatoria para acceder al sistema.
- **Listado:** Visualización de usuarios con nombre, identificación, rol asignado, permisos y última fecha/hora de logueo.

### 🔐 Roles y Permisos
- **Permisos únicos:** Crear, editar, borrar y ver reportes.
- **Roles definidos:**
  - **SuperAdmin:** Control total del sistema (usuarios, roles, permisos y reportes).
  - **Auditor:** Acceso solo a las listas de productos y usuarios.
  - **Registrador:** Gestión de productos y visualización de usuarios, sin acceso a la administración de roles y usuarios.

### 🔒 Seguridad
- Implementación de prácticas para evitar vulnerabilidades como inyección SQL y Cross-site Scripting (XSS).
- Sesión de usuario con expiración automática tras 1 minuto de inactividad.
- Acceso restringido según permisos y roles definidos.
- Gestión segura de cookies sin exponer información sensible en texto plano.

---

## 🚀 Tecnologías utilizadas

- **ReactJS** para el desarrollo del frontend.
- **React Router** para la navegación segura y protegida.
- **React Toastify** para las notificaciones en pantalla.
- **React Hook Form** para la gestión de los fórmularios.
- **Axios** para la comunicación con el backend.
- **CSS / Tailwind** para el estilizado de la aplicación.

---

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/RoneyVaLo/client-product-management.git
   ```
2. Ingresa a la carpeta del proyecto:
   ```bash
   cd client-product-management
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación:
   ```bash
   npm run dev
   ```

> ⚠️ **Nota:** Asegúrate de tener configurada la conexión con el backend y la base de datos antes de iniciar.

---

## 📁 Estructura del Proyecto (Frontend)

```
src/
├── assets/
├── components/
├── contexts/
├── hooks/
├── pages/
├── routes/
```

---

## 🛡️ Requisitos UTN Cumplidos

- Aplicación web con base de datos relacional.
- Gestión completa de productos y usuarios.
- Almacenamiento de contraseñas cifradas.
- Sistema de roles y permisos específicos.
- Protección contra inyección SQL y Cross-site Scripting (XSS).
- Cierre de sesión automático tras 1 minuto de inactividad.
- Uso seguro de cookies sin exponer datos sensibles.

---

## ✍️ Autor

Desarrollado por: **Roney Valdelomar López**  
Estudiante de Ingeniería en Software - UTN  
Año: 2025

---