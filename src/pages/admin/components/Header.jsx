import React from 'react';
import { FaBell } from 'react-icons/fa'; 
import Avatar from 'react-avatar'; 
import BigboxLogo from '../../../assets/Bigbox-Logo-normal.png';

function Header() {
  return (
    <header className="fixed-header flex justify-between items-center p-7 bg-white shadow-md">
      <div className="flex items-center">
        <img src={BigboxLogo} alt="Bigbox Logo" className="w-24 h-auto" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FaBell className="w-6 h-6 text-[#1E48C7]" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <Avatar name="John Doe" size="30" round={true} />
          <span className="text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
