import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import BigboxLogoNormal from '../assets/Bigbox-Logo-normal.png';
import Avatar from 'react-avatar'; 

const Navbar = ({ loggedInUser, setLoggedInUser }) => {
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


  const handleLogout = () => {
    setLoggedInUser(null); 
    navigate('/login');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-4 py-4 flex justify-between items-center bg-white shadow-lg z-50">
        <a className="text-3xl px-6 font-bold leading-none" href="#">
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

       <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">

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
        <div className="flex items-center space-x-4">
          {loggedInUser? (
            <>
              <div className="flex items-center space-x-2">
                <Avatar name="John Doe" size="30" round={true} />
                <span className="text-sm font-medium">{loggedInUser.name}</span>
              </div>
            </>
          ) : (
            <a className="text-md text-white bg-[#1E48C7] font-medium hover:bg-[#0E329F] cursor-pointer py-2 px-6 rounded-md transition duration-300" onClick={() => handleNavigate('/login')}>
              Login
            </a>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
