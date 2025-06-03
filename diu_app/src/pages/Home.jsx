// Aqui va la "Home Page" para nuestra pagina 
import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white font-sans px-4 pt-4">
      {/* Encabezado superior */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_Universidad_T%C3%A9cnica_Federico_Santa_Mar%C3%ADa.svg/2560px-Logo_Universidad_T%C3%A9cnica_Federico_Santa_Mar%C3%ADa.svg.png"
          alt="Logo USM"
          className="h-12"
        />

        {/* Botones y menú */}
        <div className="flex items-center space-x-4">
          <button className="text-white bg-blue-900 px-4 py-2 rounded text-sm font-semibold">
            CAMBIAR NOMBRE<br />SEGÚN USUARIO
          </button>
          <button
            className="text-white bg-blue-900 px-4 py-2 rounded text-sm font-semibold"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
          <button className="bg-blue-900 text-white px-3 py-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm14 6H3a1 1 0 010-2h14a1 1 0 010 2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mensaje de bienvenida */}
      <div className="flex justify-center">
        <div className="bg-gray-300 rounded-full px-8 py-4 text-center w-full max-w-xl">
          <p className="text-lg font-semibold text-gray-800">
            Bienvenido a Sistema de Casino
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;