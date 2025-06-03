import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext.jsx";
import '../assets/css/CardGrid.css';

import reservaMenu from '../assets/images/reserva_menu.svg'
import misReservas from '../assets/images/mis_reservas.svg'
import misConsumos from '../assets/images/mis_consumos.svg'
import minuta from '../assets/images/minuta.svg'
import anularReserva from '../assets/images/anular_reservas.svg'
import logOut from '../assets/images/logout.svg'

const cards = [
    { img: reservaMenu,     title: "Reserva de Menú",     route: "/Reserva" },
    { img: misReservas,     title: "Mis Reservas",        route: "/Mis-reservas" },
    { img: misConsumos,     title: "Mis Consumos",        route: "/Mis-consumos" },
    { img: minuta,          title: "Minuta",              route: "/Minuta" },
    { img: anularReserva,   title: "Anular Reserva",      route: "/Anular-reserva" },
    { img: logOut,          title: "Cerrar Sesión",       action: "logout" }
];
const CardGrid = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    
    return (
        <div className="card-grid">
            {cards.map((card, i) =>
                card.route ? (
                    <Link to={card.route} key={i} className="card-link">
                        <div className="card">
                            <img src={card.img} alt={`Imagen de ${card.title}`} className="card-img" />
                            <h3>{card.title}</h3>
                        </div>
                    </Link>
                ) : (
                    <div className="card-link" key={i} onClick={card.action === "logout" ? handleLogout : undefined}>
                        <div className="card" style={{ cursor: 'pointer' }}>
                            <img src={card.img} alt={`Imagen de ${card.title}`} className="card-img" />
                            <h3>{card.title}</h3>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
export default CardGrid;