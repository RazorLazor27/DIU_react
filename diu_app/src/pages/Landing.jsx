import React from "react";
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';


const Landing = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = () => {
    login();
    navigate('/Home');
    };


  return (
    console.log("jijjiji")
  );
}

export default Landing;