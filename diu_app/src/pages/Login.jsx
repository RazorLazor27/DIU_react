import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import '../assets/css/Login.css';


const Login = () => {

    const { login, credentials, endLogin } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            login();
            credentials(email);
            endLogin();  // Terminamos el estado intermedio
            alert('Sesión iniciada correctamente.');
            navigate('/Home');
        } else {
            alert('Por favor, completa ambos campos.');
        }
    };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            placeholder="usuario@dominio.com" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Contraseña" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
          />
        </div>
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Login;