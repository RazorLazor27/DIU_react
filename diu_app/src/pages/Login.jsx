import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import '../assets/css/Login.css';

const generateRolUSM = () => {
  const year = Math.floor(Math.random() * (2025 - 2018 + 1)) + 2018;
  const middle = Math.floor(10000 + Math.random() * 90000); // 5 dígitos
  const lastDigit = Math.floor(Math.random() * 10); // último dígito

  return `${year}${middle}-${lastDigit}`;
};

const parsemail = (email) => {
  const aux = email.split('@')[0];
  const formatted = aux.replaceAll('.', ' ');

  // Separar por espacio y capitalizar cada palabra
  const parts = formatted.split(' ').filter(p => p);
  const capitalizedParts = parts.map(
    part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
  );

  return capitalizedParts.join(' ');
};

const Login = () => {

    const { login, credentials, endLogin } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo válido con dominio.');
                return;
            }

            const mail_formatted = parsemail(email);
            const rol = generateRolUSM();

            login();
            credentials(mail_formatted, rol);
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