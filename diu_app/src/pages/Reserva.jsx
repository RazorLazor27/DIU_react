import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/css/Reserva.css';

const Reserva = () => {
  const navigate = useNavigate();
  const [campus, setCampus] = useState('Casa Central Valparaíso');
  const [menu, setMenu] = useState('Normal');
  const [dates, setDates] = useState([]);

  const handleDateChange = (date) => {
    // Toggle date selection
    if (dates.some(d => d.getTime() === date.getTime())) {
      setDates(dates.filter(d => d.getTime() !== date.getTime()));
    } else {
      setDates([...dates, date]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reserva = {
      rol: '202173567-4',
      nombre: 'Carlos Soto',
      campus,
      menu,
      fechas: dates.map(d => d.toISOString())
    };

    const reservasExistentes = JSON.parse(localStorage.getItem('reservas')) || [];
    reservasExistentes.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservasExistentes));

    alert('Reserva ingresada correctamente.');
    navigate('/Home');
  };

  return (
    <div className="reserva-container">
      <h2>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit} className="reserva-form">
        <label>
          Rol Comensal:
          <input type="text" value="202173567-4" disabled />
        </label>
        <label>
          Nombre:
          <input type="text" value="Carlos Soto" disabled />
        </label>
        <label>
          Campus o Sede:
          <select value={campus} onChange={(e) => setCampus(e.target.value)}>
            <option>Casa Central Valparaíso</option>
            <option>Vitacura</option>
            <option>Viña del Mar</option>
            <option>Concepción</option>
            <option>San Joaquin</option>
          </select>
        </label>
        <label>
          Menú:
          <select value={menu} onChange={(e) => setMenu(e.target.value)}>
            <option>Normal</option>
            <option>Hipocalórico</option>
            <option>Vegetariano</option>
          </select>
        </label>
        <label className="form-label">Fechas a incluir:</label>
            <div className="calendar-wrapper">
            <DatePicker
                onChange={handleDateChange}
                highlightDates={dates}
                inline
                calendarStartDay={1}
            />
            </div>
            <div className="selected-dates">
            Fechas seleccionadas:
            <ul>
                {dates.map((d, idx) => (
                <li key={idx}>{d.toDateString()}</li>
                ))}
            </ul>
            </div>
        <button type="submit">Ingresar Reserva</button>
      </form>
    </div>
  );
};

export default Reserva;