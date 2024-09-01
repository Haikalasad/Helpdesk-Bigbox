import React from 'react';
import BigboxLogoNormal from '../assets/Bigbox-Logo-normal.png';
import Illustration from '../assets/illustration.png';

const RegisterPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
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
        <h1 className="text-3xl font-bold mb-6">Join BigBox</h1>
        <p className="text-lg font-medium text-center">
          Daftar sekarang untuk mendapatkan akses penuh ke solusi data intelligence terdepan kami dan dukungan terbaik.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-2">Register ke BigBox</h2>
        <form className="w-full max-w-sm p-">
          <div className="mb-3">
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="name">
              Nama Lengkap
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="instansi">
              Instansi
            </label>
            <input
              id="instansi"
              type="text"
              className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700"
              placeholder="Enter your institution"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="phone">
              Nomor Telepon
            </label>
            <input
              id="phone"
              type="tel"
              className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="confirm-password">
              Konfirmasi Password
            </label>
            <input
              id="confirm-password"
              type="password"
              className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center text-sm text-gray-700">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 font-medium">I agree with terms and conditions</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium w-full py-3 px-4 mt-3 rounded-xl focus:outline-none focus:shadow-outline hover:bg-blue-700 transition duration-150"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
