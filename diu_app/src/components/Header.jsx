import React, { useState, useEffect, useRef } from "react";

import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import '../assets/css/Header.css'

import logoUSM from "../assets/images/logo-usm.svg"
import LogoHeader from "../assets/images/logo-header.svg"

const Header = () => {
    const { user, isLoggingIn, startLogin } = useAuth();
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownref = useRef(null);



    const handleLogin = () => {
    startLogin();
    navigate('/Login');
    };

    const handleClick = () => {
        // Aqui abrir menu!!!
        console.log("Abrir menu")
    }
    
    return(
        <div className="header">
            <div className="header-left">
                <img src={logoUSM} alt="Logo USM" className="usm-logo" />
            </div>
            <div className="header-right">
                {(user || isLoggingIn) ? (
                    <button className="header-button" onClick={handleClick}>
                        <img src={LogoHeader} className="header-logo" alt="Abrir menú"/>
                    </button>
                ) : (
                    <button className="login-button" onClick={handleLogin}>
                        Iniciar Sesión
                    </button>
                )}
            </div>
        </div>
    )
}

export default Header;