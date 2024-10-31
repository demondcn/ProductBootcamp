"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { signIn, getSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  const { register: registerRegister, handleSubmit: handleSubmitRegister, reset: resetRegister, formState: { errors: errorsRegister } } = useForm();
  const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin } } = useForm();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const Iconokhepri = require('@/../public/img/logo.png')
  const onSubmitRegister = async (data) => {
    try {
      const res = await fetch('/api/auth/registro', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!res.ok) throw new Error('Error en el registro');
      resetRegister();
      setIsLogin(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error en el registro. Por favor, inténtelo de nuevo.');
    }
  };

  const onSubmitLogin = async (data) => {
    try {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      });

      if (res.error) {
        throw new Error(res.error);
      }

      const session = await getSession();
      if (session && session.user) {
        window.location.replace('/');
      } else {
        throw new Error("No se pudo obtener la sesión del usuario.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-yellow-900 to-black">
      <div className="bg-yellow-100 rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        <motion.div
          className="w-1/2 p-8 relative"
          initial={{ x: isLogin ? 0 : '100%' }}
          animate={{ x: isLogin ? 0 : '100%' }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
            <Image
              src={Iconokhepri}
              alt="Khepri Holístico Logo"
              width={120}
              height={75}
              className="object-contain"
            />
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-black-900 mb-6">
              {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </h2>
            <form onSubmit={isLogin ? handleSubmitLogin(onSubmitLogin) : handleSubmitRegister(onSubmitRegister)} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-900" size={20} />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Nombre"
                      className="pl-10"
                      {...registerRegister("name", { required: "El nombre es requerido" })}
                    />
                  </div>
                  {errorsRegister.name && <p className="text-red-500 text-xs mt-1">{errorsRegister.name.message}</p>}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Correo</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-900" size={20} />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Correo"
                    className="pl-10"
                    {...(isLogin ? registerLogin : registerRegister)("email", {
                      required: "El correo es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Correo inválido"
                      }
                    })}
                  />
                </div>
                {(isLogin ? errorsLogin.email : errorsRegister.email) &&
                  <p className="text-red-500 text-xs mt-1">{isLogin ? errorsLogin.email.message : errorsRegister.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-900" size={20} />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    className="pl-10 pr-10"
                    {...(isLogin ? registerLogin : registerRegister)("password", {
                      required: "La contraseña es requerida",
                      minLength: {
                        value: 6,
                        message: "La contraseña debe tener al menos 6 caracteres"
                      }
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-900"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {(isLogin ? errorsLogin.password : errorsRegister.password) &&
                  <p className="text-red-500 text-xs mt-1">{isLogin ? errorsLogin.password.message : errorsRegister.password.message}</p>}
              </div>
              {isLogin && (
                <a href="#" className="text-sm text-yellow-900 hover:text-yellow-700 transition duration-300">
                  ¿Perdiste tu contraseña?
                </a>
              )}
              <Button type="submit" className="w-full bg-yellow-600 text-white hover:bg-yellow-700">
                {isLogin ? 'Iniciar sesión' : 'Registrarse'}
              </Button>
            </form>
          </div>
        </motion.div>
        <motion.div
          className="w-1/2 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white rounded-tr-2xl rounded-br-2xl py-16 px-12 relative overflow-hidden"
          initial={{ x: isLogin ? 0 : '-100%' }}
          animate={{ x: isLogin ? 0 : '-100%' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 relative z-10">
            {isLogin ? '¡Bienvenido de vuelta!' : '¡Únete a nosotros!'}
          </h2>
          <div className="border-2 w-10 border-white inline-block mb-4 relative z-10"></div>
          <p className="mb-10 relative z-10 text-lg">
            {isLogin
              ? 'Inicia tu viaje hacia el bienestar integral con Khepri Holístico.'
              : 'Descubre el equilibrio emocional y el bienestar holístico. Regístrate hoy y transforma tu vida.'}
          </p>
          <Button
            variant="outline"
            className="border-2 border-white rounded-xl px-12 py-3 inline-block font-semibold bg-transparent text-white hover:bg-white hover:text-yellow-800 hover:shadow-lg transition duration-300 relative z-10"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Crear cuenta' : 'Iniciar sesión'}
          </Button>


        </motion.div>
      </div>
    </div>
  );
}