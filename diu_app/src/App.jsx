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
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
