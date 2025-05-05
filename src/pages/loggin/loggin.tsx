// src/components/register.tsx
import React from "react";
// Si quieres importar la imagen de fondo:
// import sideImg from "@/assets/image/register/side-bg.png";

export default function Register() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* === PANEL IZQUIERDO === */}
      <div className="flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          {/* Icono */}
          <div className="flex justify-center mb-6">
            <div className="bg-red-700 text-white rounded-full p-3">
              <span className="text-xl">🐾</span>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-2xl font-bold text-center text-red-700 mb-1">
            Bienvenido de nuevo
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Un hogar para cada pata
          </p>

          {/* Formulario (solo front) */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-red-600"
                />
                <span className="ml-2">Recordarme</span>
              </label>
              <a href="#" className="text-red-700 hover:underline font-medium">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white rounded-full py-2 font-semibold hover:bg-red-800 transition"
            >
              Entrar
            </button>
          </form>

          {/* Separador */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-gray-500">o</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Botón Google */}
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition">
            {/* Aquí puedes reemplazar con tu SVG de Google */}
            <img
              src="/assets/icons/google.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            <span className="text-gray-700 font-medium">
              Iniciar con Google
            </span>
          </button>

          {/* Link a registro */}
          <p className="text-center text-sm text-gray-600 mt-6">
            ¿No tienes una cuenta?{" "}
            <a
              href="/registrarse"
              className="text-red-700 hover:underline font-medium"
            >
              Regístrate
            </a>
          </p>
        </div>
      </div>

      {/* === PANEL DERECHO === */}
      <div className="relative">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/image/register/side-bg.png') /* ajusta la ruta según tu proyecto */",
          }}
        />
        {/* Capa de color encima para dar tinte */}
        <div className="absolute inset-0 bg-red-700 bg-opacity-50" />

        {/* Card superpuesto */}
        <div className="relative h-full flex items-center justify-center p-8">
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-6 max-w-sm space-y-4">
            <h3 className="flex items-center text-lg font-semibold text-red-700">
              <span className="text-2xl mr-2">❤️</span>
              Cambia vidas con nosotros
            </h3>
            <p className="text-gray-800">
              Cada inicio de sesión es un paso más para ayudar a nuestros amigos
              de cuatro patas a encontrar un hogar lleno de amor.
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex items-center text-sm text-gray-800">
                <span className="text-red-700 mr-2">🐾</span>
                <span>120+ Adopciones</span>
              </div>
              <div className="flex items-center text-sm text-gray-800">
                <span className="text-red-700 mr-2">🏠</span>
                <span>30+ Hogares temporales</span>
              </div>
              <div className="flex items-center text-sm text-gray-800">
                <span className="text-red-700 mr-2">❤️</span>
                <span>200+ Voluntarios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
