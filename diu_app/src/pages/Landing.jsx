import React from "react";
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';


const Landing = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = () => {
    login();
    navigate('/Home');
    };


  return (
    <div className="min-h-screen bg-white font-sans">
      
      
      <div className="flex justify-between items-center px-10 py-6 bg-white border-b">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_Universidad_T%C3%A9cnica_Federico_Santa_Mar%C3%ADa.svg/2560px-Logo_Universidad_T%C3%A9cnica_Federico_Santa_Mar%C3%ADa.svg.png"
          alt="Logo USM"
          className="h-12"
        />
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={handleLogin}>
          Acceso
        </button>
      </div>

      {/* Banner de bienvenida */}
      <section
        className="h-[300px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://www.diarioconcepcion.cl/wp-content/uploads/2021/09/USM-casino.jpg')",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Bienvenidos al <br /> Sistema de Casino de Alimentación USM
        </h1>
      </section>

      {/* Contenido de interés */}
      <section className="py-10 px-6">
        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-6">
          Contenido de interés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Vicerrectoría de Asuntos Económicos y Administrativos",
              image:
                "https://admision.usm.cl/wp-content/uploads/2021/03/campus-casa-central-usm.jpg",
            },
            {
              title: "Informativo Especial CORONAVIRUS COVID-19",
              image:
                "https://www.gob.mx/cms/uploads/article/main_image/76039/coronavirus.jpg",
            },
            {
              title: "Protocolo Coronavirus COVID-19",
              image:
                "https://blogs.unitec.mx/hubfs/protocolo-covid-unitec.jpg",
            },
            {
              title: "Protocolo Seguridad Sanitaria Laboral",
              image:
                "https://www.insst.es/documents/94886/1479537/Protocolo+COVID-19.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-sm font-semibold text-gray-700">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Landing;