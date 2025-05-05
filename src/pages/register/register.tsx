// src/pages/register/register.tsx
import React from "react";
// import sideImg from "@/assets/image/register/side-bg.png";

export default function Register() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Panel izquierdo: formulario */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-white">
        <h1 className="text-2xl font-bold text-red-700 mb-1">¡Únete y cambia vidas!</h1>
        <p className="text-gray-600 mb-8">
          Regístrate para ser parte de nuestra comunidad y ayudar a nuestros amigos peludos a encontrar un hogar lleno de amor.
        </p>

        <form className="w-full max-w-md space-y-6">
          {/* Nombre completo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Escribe tu nombre completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tu@correo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Crea una contraseña segura"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              La contraseña debe tener al menos 8 caracteres.
            </p>
          </div>

          {/* Confirmar contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              placeholder="Repite tu contraseña"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Botón Crear cuenta */}
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded-full font-semibold hover:bg-red-800 transition"
          >
            Crear cuenta
          </button>
        </form>

        {/* Separador */}
        <div className="flex items-center my-6 w-full max-w-md">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-4 text-gray-500">o</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Botón Google */}
        <button className="w-full max-w-md flex items-center justify-center border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition">
          {/* ícono de Google en SVG */}
          <svg
            className="h-5 w-5 mr-2"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#4285F4" d="M533.5 278.4c0-18.4-1.5-36.2-4.3-53.4H272v101h147.4c-6.3 34.2-25.2 63.2-53.9 82.6v68h87.1c51.1-47.1 80.9-116.3 80.9-198.2z"/>
            <path fill="#34A853" d="M272 544.3c72.9 0 134.3-24.1 179.1-65.5l-87.1-68c-24.2 16.2-55.1 25.7-92 25.7-70.8 0-130.8-47.7-152.3-111.5H31.4v69.9C75.7 490 167.5 544.3 272 544.3z"/>
            <path fill="#FBBC05" d="M119.7 323.1c-5.8-17.4-9.1-35.8-9.1-54.7s3.3-37.3 9.1-54.7v-69.9H31.4C11.2 181.9 0 229.5 0 268.4s11.2 86.5 31.4 113.9l88.3-59.2z"/>
            <path fill="#EA4335" d="M272 107.6c39.6 0 75.2 13.6 103.1 40.4l77.3-77.3C405.8 24.6 347.1 0 272 0 167.5 0 75.7 54.3 31.4 138.8l88.3 69.9c21.5-63.8 81.5-111.1 152.3-111.1z"/>
          </svg>
          <span className="text-gray-700 font-medium">
            Registrarse con Google
          </span>
        </button>

        {/* Link a iniciar sesión */}
        <p className="text-sm text-gray-600 mt-6">
          ¿Ya tienes cuenta?{" "}
          <a href="/iniciar-sesion" className="text-red-700 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>

      {/* Panel derecho: imagen y texto */}
      <div className="hidden md:block flex-1 relative overflow-hidden">
        {/* <img src={sideImg} alt="Mascota feliz" className="absolute inset-0 w-full h-full object-cover" /> */}

        {/* Capa de degradado para dar tono */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/60 via-transparent to-transparent" />

        {/* Texto superpuesto */}
        <div className="relative z-10 flex flex-col justify-end h-full p-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            Cada registro hace la diferencia
          </h3>
          <p className="text-white max-w-sm">
            Al unirte a nuestra comunidad, estás dando un paso importante para ayudar a nuestros amigos de cuatro patas a encontrar un hogar lleno de amor y cuidado.
          </p>
        </div>
      </div>
    </div>
  );
}
