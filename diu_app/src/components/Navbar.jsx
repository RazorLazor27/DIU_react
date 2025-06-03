// Aqui va el javascript de la navbar que vamos a utilizar
import React from "react";

import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';



import '../assets/css/Navbar.css'

const Navbar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    

    return (
        <div className="nav">
            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><button onClick={handleLogout}>Log Out</button></li>
            </ul>
        </div>
    );
}

export default Navbar;
