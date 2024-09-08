import React, { useState } from 'react';
import BigboxLogoNormal from '../../assets/Bigbox-Logo-normal.png';
import Illustration from '../../assets/illustration.png';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const LoginPage = () => {

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="flex h-screen">

      <div className="w-1/2 bg-[#F0F5FF] text-[#1E1E1E] flex flex-col justify-center items-center p-12">
        <img
          src={BigboxLogoNormal}
          alt="logo bigbox"
          className="w-3/12 h-auto mb-6"
        />
        <img
          src={Illustration}
          alt="Illustration"
          className="w-10/12 h-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-6">Welcome to BigBox</h1>
        <p className="text-lg font-medium text-center">
          Login sekarang untuk mendapatkan bantuan andal dan akses ke solusi cepat dari platform data intelligence terdepan.
        </p>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-6">Masuk ke BigBox</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-3" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 "
              placeholder="Masukkan alamat email"
            />
          </div>
          <div className="relative mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-3" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 pr-12"
                placeholder="Masukkan Password"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-600 h-5 w-5" />
                ) : (
                  <FaEye className="text-gray-600 h-5 w-5" />
                )}
              </div>
            </div>
          </div>


          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center text-sm text-gray-700">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 font-medium">Remember me</span>
            </label>
            <a href="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium w-full py-3 px-4 mt-3 rounded-xl focus:outline-none focus:shadow-outline hover:bg-blue-700 transition duration-150"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-6">
          Don't have an account?{' '}
          <button
            onClick={handleRegisterClick}
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
