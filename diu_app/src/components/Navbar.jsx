import React from "react";

import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import '../assets/css/Navbar.css'

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    

    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo"> USM.cl </div>
            </div>
            
            <ul className="navbar-right">
                <li><Link to="/">Home</Link></li>
                {user ? (
                    <>
                        <li><button className="navbar-button" onClick={handleLogout}>Log Out</button></li>
                    </>
                ) : null }
            </ul>
        </div>
    );
}

export default Navbar;
