// Aqui va la "Home Page" para nuestra pagina 
import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import CardGrid from "../components/Cardgrid.jsx";

import '../assets/css/Home.css'

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="card-title" style={{padding: "24px" }}> Bienvenido al Sistema de Casino USM</h2>
      <CardGrid />
    </div>
  );
};

export default Home;