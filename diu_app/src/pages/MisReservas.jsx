import React, { useEffect, useState } from 'react';
import '../assets/css/MisReservas.css';

const MisReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(data);
  }, []);

  const reservasPlanas = reservas.flatMap(r =>
    r.fechas.map(f => ({
      fecha: new Date(f),
      menu: r.menu,
      campus: r.campus,
      rol: r.rol,
      nombre: r.nombre
    }))
  ).sort((a, b) => a.fecha - b.fecha);

  return (
    <div className="mis-reservas-container">
      <h2>Mis Reservas Activas</h2>
      {reservasPlanas.length === 0 ? (
        <p className="no-reservas">No tienes reservas activas.</p>
      ) : (
        <ul className="reserva-lista">
          {reservasPlanas.map((r, idx) => (
            <li key={idx} className="reserva-item">
              <strong>{r.fecha.toDateString()}</strong> – {r.menu} en {r.campus}
            </li>
          ))}
        </ul>
      )}
      <button
        className="volver-btn"
        onClick={() => window.history.back()}
      >
        Volver al Menú Principal
      </button>
    </div>
  );
};

export default MisReservas;