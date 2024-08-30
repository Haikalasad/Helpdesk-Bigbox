import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import BigboxLogoNormal from '../assets/Bigbox-Logo-normal.png';
import BigboxLogoSmall from '../assets/Bigbox-Logo-small.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };
  const isActive = (path) => {
    return location.pathname === path
      ? 'text-blue-600 font-bold'
      : 'text-[#565656] hover:text-gray-500';
  };

  useEffect(() => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    const close = document.querySelector('.navbar-close');

    const toggleMenu = () => {
      if (menu) {
        menu.classList.toggle('hidden');
      }
    };

    if (burger) {
      burger.addEventListener('click', toggleMenu);
    }

    if (close) {
      close.addEventListener('click', toggleMenu);
    }

    return () => {
      if (burger) {
        burger.removeEventListener('click', toggleMenu);
      }
      if (close) {
        close.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-lg">
        <a className="text-3xl font-bold leading-none" href="#">
          <img className="h-10" src={BigboxLogoNormal} alt="Bigbox Logo" />
        </a>

        <div className="lg:hidden flex items-center ml-auto">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">

          <li className="relative group">
            <a className={`text-md font-medium cursor-pointer flex items-center ${isActive('/produk')}`} onClick={() => handleNavigate('/')}>
              Produk
              <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className="hidden group-hover:block absolute bg-white shadow-md rounded-lg mt-2 p-2 space-y-2">
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/produk/feature1')}`} onClick={() => handleNavigate('/produk/feature1')}>Feature 1</a></li>
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/produk/feature2')}`} onClick={() => handleNavigate('/produk/feature2')}>Feature 2</a></li>
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/produk/feature3')}`} onClick={() => handleNavigate('/produk/feature3')}>Feature 3</a></li>
            </ul>
          </li>

          <li className="relative group">
            <a className={`text-md font-medium cursor-pointer flex items-center ${isActive('/solusi')}`} onClick={() => handleNavigate('/solusi')}>
              Solusi
              <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className="hidden group-hover:block absolute bg-white shadow-md rounded-lg mt-2 p-2 space-y-2">
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/solusi/solution1')}`} onClick={() => handleNavigate('/solusi/solution1')}>Solution 1</a></li>
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/solusi/solution2')}`} onClick={() => handleNavigate('/solusi/solution2')}>Solution 2</a></li>
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/solusi/solution3')}`} onClick={() => handleNavigate('/solusi/solution3')}>Solution 3</a></li>
            </ul>
          </li>

          <li className="relative group">
            <a className={`text-md font-medium cursor-pointer flex items-center ${isActive('/bantuan')}`} onClick={() => handleNavigate('/bantuan')}>
              Bantuan
              <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className="hidden group-hover:block absolute bg-white shadow-md rounded-lg mt-2 p-2 space-y-2">
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/bantuan/help1')}`} onClick={() => handleNavigate('/bantuan/help1')}>Help 1</a></li>
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/bantuan/help2')}`} onClick={() => handleNavigate('/bantuan/help2')}>Help 2</a></li>
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/bantuan/help3')}`} onClick={() => handleNavigate('/bantuan/help3')}>Help 3</a></li>
            </ul>
          </li>

          <li>
            <a className={`text-md font-medium cursor-pointer ${isActive('/harga')}`} onClick={() => handleNavigate('/harga')}>Harga</a>
          </li>

          <li className="relative group">
            <a className={`text-md font-medium cursor-pointer flex items-center ${isActive('/tentang-kami')}`} onClick={() => handleNavigate('/tentang-kami')}>
              Tentang Kami
              <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className="hidden group-hover:block absolute bg-white shadow-md rounded-lg mt-2 p-2 space-y-2">
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/tentang-kami/about1')}`} onClick={() => handleNavigate('/tentang-kami/about1')}>About 1</a></li>
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/tentang-kami/about2')}`} onClick={() => handleNavigate('/tentang-kami/about2')}>About 2</a></li>
              <li><a className={`block p-2 text-sm hover:text-blue-600 ${isActive('/tentang-kami/about3')}`} onClick={() => handleNavigate('/tentang-kami/about3')}>About 3</a></li>
            </ul>
          </li>
        </ul>

        <div className="flex items-center">
          <a className="hidden lg:inline-block text-md text-white bg-[#875BF7] font-medium hover:bg-[#6d3fca] cursor-pointer py-2 px-4 rounded-md transition duration-300" href="#">Login</a>
        
          <div className="relative ml-4">
            <button className="hidden text-sm text-gray-900 font-bold hover:text-blue-600 cursor-pointer flex items-center">
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12 7.858 4.5 12 4.5zm0-2.25C6.624 2.25 2.25 6.624 2.25 12s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zM11.25 12h1.5v7.5h-1.5V12zm0-4.5h1.5v3h-1.5V7.5z" />
              </svg>
              Bahasa
            </button>
            <ul className="hidden absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg p-2 space-y-2">
              <li><a className="block p-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Bahasa Indonesia</a></li>
              <li><a className="block p-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">English</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="navbar-menu relative z-50 hidden lg:hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img className="h-10" src={BigboxLogoSmall} alt="Bigbox Logo" />
            </a>
            <button className="navbar-close">
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul>
            <li className="mb-1">
              <a className={`block p-4 text-sm font-semibold hover:bg-blue-50 ${isActive('/produk')}`} onClick={() => handleNavigate('/produk')}>Produk</a>
            </li>
            <li className="mb-1">
              <a className={`block p-4 text-sm font-semibold hover:bg-blue-50 ${isActive('/solusi')}`} onClick={() => handleNavigate('/solusi')}>Solusi</a>
            </li>
            <li className="mb-1">
              <a className={`block p-4 text-sm font-semibold hover:bg-blue-50 ${isActive('/bantuan')}`} onClick={() => handleNavigate('/bantuan')}>Bantuan</a>
            </li>
            <li className="mb-1">
              <a className={`block p-4 text-sm font-semibold hover:bg-blue-50 ${isActive('/harga')}`} onClick={() => handleNavigate('/harga')}>Harga</a>
            </li>
            <li className="mb-1">
              <a className={`block p-4 text-sm font-semibold hover:bg-blue-50 ${isActive('/tentang-kami')}`} onClick={() => handleNavigate('/tentang-kami')}>Tentang Kami</a>
            </li>
          </ul>

          <div className="mt-auto">
            <a className="block w-full px-4 py-3 mb-2 text-sm font-semibold text-center bg-gray-200 hover:bg-gray-300 rounded-lg" href="#">Login</a>
            <p className="mt-4 text-center text-sm text-gray-500">
              <span>© 2024 Bigbox</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
