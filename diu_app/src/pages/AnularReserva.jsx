import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/css/AnularReserva.css';

const AnularReserva = () => {
  const navigate = useNavigate();
  const [reservas, setReservas] = useState([]);
  const [fechas, setFechas] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(data);
    const todasLasFechas = data.flatMap(r => r.fechas.map(f => new Date(f)));
    setFechas(todasLasFechas);
  }, []);

  const handleRemoveDate = (date) => {
    const nuevasReservas = reservas.map(reserva => ({
      ...reserva,
      fechas: reserva.fechas.filter(f => new Date(f).getTime() !== date.getTime())
    })).filter(reserva => reserva.fechas.length > 0);

    setReservas(nuevasReservas);
    const nuevasFechas = nuevasReservas.flatMap(r => r.fechas.map(f => new Date(f)));
    setFechas(nuevasFechas);
    localStorage.setItem('reservas', JSON.stringify(nuevasReservas));
  };

  return (
    <div className="mis-reservas-container">
      <h2>Eliminas mis Reservas</h2>
      <p>Haz clic en una fecha para eliminar esa reserva.</p>
      <div className="calendar-wrapper">
        <DatePicker
          inline
          highlightDates={fechas}
          includeDates={fechas}
          onChange={handleRemoveDate}
          calendarStartDay={1}
        />
      </div>
      {fechas.length === 0 && <p className="no-reservas">No tienes reservas activas.</p>}
        <button
        className="volver-btn"
        onClick={() => {
            alert("Fechas anuladas correctamente!");
            navigate('/Home');
        }}
        >
            Volver al Menú Principal
        </button>
    </div>
  );
};

export default AnularReserva;