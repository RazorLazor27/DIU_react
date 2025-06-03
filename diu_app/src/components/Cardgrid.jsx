import React from "react";
import '../assets/css/CardGrid.css';

import reservaMenu from '../assets/images/reserva_menu.svg'
import misReservas from '../assets/images/mis_reservas.svg'
import misConsumos from '../assets/images/mis_consumos.svg'
import minuta from '../assets/images/minuta.svg'
import anularReserva from '../assets/images/anular_reservas.svg'
import logOut from '../assets/images/logout.svg'

const cards = [
    {img: reservaMenu  , title: "Reserva de Menú" },
    {img: misReservas  , title: "Mis Reservas"},
    {img: misConsumos  , title: "Mis Consumos"},
    {img: minuta       , title: "Minuta"},
    {img: anularReserva, title: "Anular Reserva"},
    {img: logOut       , title: "Cerrar Sesion"}
]

const CardGrid = () => {
    return (
        <div className="card-grid">
            {cards.map((card, i) => (
                <div className="card" key={i}>
                    <img src={card.img} alt={`Imagen de ${card.title}`} className="card-img" />
                    <h3>{card.title}</h3>
                </div>
            ))}
        </div>
    );
};
export default CardGrid;