import React from "react";
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import fondo from '../assets/images/fondo_3.png'


const Landing = () => {
  return (
    <div className="background" style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '130vh'
    }}>
    </div>
  );
}

export default Landing;