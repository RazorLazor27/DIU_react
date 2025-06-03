import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/Minuta.css';

import valpoImg      from '../assets/images/minutas/sanjoaquin.webp';
import vitacuraImg   from '../assets/images/minutas/sanjoaquin.webp';
import vinaImg       from '../assets/images/minutas/sanjoaquin.webp';
import concepcionImg from '../assets/images/minutas/sanjoaquin.webp';
import sanjoaquinImg from '../assets/images/minutas/sanjoaquin.webp';

const campusOpciones = {
  "Casa Central Valparaíso": valpoImg,
  "Vitacura": vitacuraImg,
  "Viña del Mar": vinaImg,
  "Concepción": concepcionImg,
  "San Joaquín": sanjoaquinImg
};

const Minuta = () => {
  const navigate = useNavigate();
  const [campus, setCampus] = useState("Casa Central Valparaíso");
  

  return (
    <div className="minuta-container">
      <h2>Minuta del Mes</h2>
      <label className="minuta-label">
        Selecciona tu campus o sede:
        <select
          value={campus}
          onChange={(e) => setCampus(e.target.value)}
          className="minuta-select"
        >
          {Object.keys(campusOpciones).map((nombre, idx) => (
            <option key={idx} value={nombre}>
              {nombre}
            </option>
          ))}
        </select>
      </label>

      <div className="minuta-img-wrapper">
        <img
          src={campusOpciones[campus]}
          alt={`Minuta para ${campus}`}
          className="minuta-img"
        />
      </div>
        <button
            className="volver-btn"
            onClick={() => window.history.back()}
        >
        Volver al Menú Principal
        </button>
    </div>
  );
};

export default Minuta;