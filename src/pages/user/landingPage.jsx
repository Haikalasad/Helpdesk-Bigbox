import React from 'react';
import '../../styling/background-animation.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

const navigate = useNavigate();

  const handleCreateTicketClick = () => {
    navigate('/Create-ticket');
  };
  return (
  
      <section className="hero-section min-h-full bg-white p-14">
        <div className="container mx-auto lg:flex-row items-center relative z-10">
          <div className="flex flex-col justify-center items-center text-center lg:pr-10 m-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wider text-center">
              Selamat Datang di <span className="text-[#FF931E]">BigBox</span> Help Center
            </h1>
            <p className="text-xl text-gray-600 font-normal tracking-normal max-w-full lg:max-w-full text-center mt-6">
              Platform dukungan siap membantu Anda menyelesaikan masalah dengan cepat. Jelajahi panduan, ajukan pertanyaan, atau hubungi tim kami untuk solusi terbaik!
            </p>

            {/* Search bar */}
            <div className="relative w-full mt-12 max-w-3xl">
              <input
                type="text"
                className="w-full p-4 pl-12 text-lg border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF931E]"
                placeholder="Cari informasi atau panduan yang Anda butuhkan..."
              />
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
                </svg>
              </div>
            </div>

            {/* Two boxes section */}
            <div className="flex flex-col lg:flex-row justify-center items-center mt-14 gap-6 w-full max-w-5xl">
            {/* Left box: Buat Tiket Baru */}
            <div className="bg-white text-[#0549CF] p-8 rounded-xl shadow-md w-full lg:w-1/2 flex flex-1 h-auto text-left transition-transform transform hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mr-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8m-5 8h5M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
              </svg>
              <div>
                <h2 className="text-3xl font-bold mb-4">Buat Tiket Baru</h2>
                <p className="text-xl mb-6 max-w-lg">
                  Buat tiket baru untuk pertanyaan, masukan, atau keluhan. Kami siap membantu!
                </p>
                <button
                  onClick={handleCreateTicketClick}
                  className="bg-[#0549CF] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#033a9a]"
                >
                  Buat Tiket Baru
                </button>
              </div>
            </div>

            {/* Right box: Cek Status Tiket */}
            <div
              className="bg-white text-[#0549CF] p-8 rounded-xl shadow-md w-full lg:w-1/2 flex flex-1 h-auto text-left transition-transform transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mr-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m0 0V8m0 4v4m9 2a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h3m3 0h3m0 0h3a2 2 0 012 2v10a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h2 className="text-3xl font-bold mb-4">Cek Status Tiket</h2>
                <p className="text-xl mb-6 max-w-lg">
                  Masukkan nomor tiket Anda untuk mengetahui status terbaru dari tiket yang telah diajukan.
                </p>
                <button className="bg-[#0549CF] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#033a9a]">
                  Cek Status Tiket
                </button>
              </div>
            </div>
          </div>
            <div className="absolute top-80 left-2/4 w-64 h-64 bg-gradient-to-r from-rose-100 to-rose-400 rounded-full opacity-70 blur-2xl -z-10"></div>
                <div className="absolute top-0 left-2/3 w-64 h-64 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full opacity-50 blur-xl -z-10"></div>
                <div className="absolute top-[260px] left-3/4 w-64 h-64 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-50 blur-xl -z-10"></div>
          </div>
     
        
        </div>
        
      </section>

  );
};

export default LandingPage;
