import React from 'react';
import BigboxLogoNormal from '../assets/Bigbox-Logo-normal.png';
import BigboxLogoSmall from '../assets/Bigbox-Logo-small.png';
import Illustration from '../assets/illustration.png';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  
  return (
    <div className="flex h-screen">
     
      <div className="w-1/2 bg-[#F0F5FF] text-[#1E1E1E] text-white flex flex-col justify-center items-center p-12">
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
        <h2 className="text-3xl font-bold mb-6">Mausk ke BigBox</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-3" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 "
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium mb-3" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700"
              placeholder="Enter your password"
            />
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
