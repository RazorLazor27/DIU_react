import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import ReactDOM from "react-dom/client"
import { useAuth } from './context/AuthContext.jsx';

import './App.css'

import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Header from './components/Header.jsx';
import Landing from "./pages/Landing.jsx"
import Reserva from './pages/Reserva.jsx';
import AnularReserva from './pages/AnularReserva.jsx';
import MisReservas from './pages/MisReservas.jsx';
import Minuta from './pages/Minuta.jsx';
import Consumos from './pages/Consumos.jsx';
import Login from './pages/Login.jsx';


function App() {
	const { user } = useAuth();
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar/>
				<Header/>
				<div className='pages'>
					<Routes>
						<Route path="/Home" element={user ? <Home /> : <Navigate to="/"/>}/>
						<Route path="/" element={!user ? <Landing /> : <Navigate to="/Home" />} />
						<Route path="/Reserva" element={user ? <Reserva /> : <Navigate to="/" />} />
						<Route path="/Anular-reserva" element={user ? <AnularReserva /> : <Navigate to="/" />} />
						<Route path="/Mis-reservas" element={user ? <MisReservas /> : <Navigate to="/" />} />
						<Route path="/Minuta" element={user ? <Minuta /> : <Navigate to="/" />} />
						<Route path="/Mis-consumos" element={user ? <Consumos /> : <Navigate to="/" />} /> 
						<Route path="/Login" element={!user ? <Login /> : <Navigate to="/Home" />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
