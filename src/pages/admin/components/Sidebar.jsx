import React, { useState } from 'react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import { FaSignOutAlt, FaTicketAlt, FaCog, FaUser } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className={`relative ${isOpen ? 'w-64 border-r border-gray-200' : 'w-16'} bg-white text-gray-800 h-screen shadow-lg transition-width duration-300`}>
      <button
        className="absolute top-5 right-3 p-2 rounded-md hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon className="h-6 w-6 text-gray-800" /> : <MenuIcon className="h-6 w-6 text-gray-800" />}
      </button>
      <nav className="h-full flex flex-col">
        <div className={`flex items-center p-6 ${isOpen ? 'border-b border-gray-200' : ''}`}>
          {isOpen && <span className="text-xl font-bold">Dashboard</span>}
        </div>
        <ul className="space-y-4 p-4 flex-1">
          <li className="hover:bg-gray-200 p-2 rounded-md flex items-center space-x-4">
            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 flex items-center space-x-4' : 'text-gray-800 flex items-center space-x-4'
              }
              end
            >
              {({ isActive }) => (
                <>
                  <FaTicketAlt className={`text-xl ${isActive ? 'text-blue-500' : 'text-gray-800'}`} />
                  {isOpen && <span className={`text-lg ${isActive ? 'font-semibold' : ''}`}>Tickets</span>}
                </>
              )}
            </NavLink>
          </li>
          <li className="hover:bg-gray-200 p-2 rounded-md flex items-center space-x-4">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 flex items-center space-x-4' : 'text-gray-800 flex items-center space-x-4'
              }
              end
            >
              {({ isActive }) => (
                <>
                  <FaCog className={`text-xl ${isActive ? 'text-blue-500' : 'text-gray-800'}`} />
                  {isOpen && <span className={`text-lg ${isActive ? 'font-semibold' : ''}`}>Settings</span>}
                </>
              )}
            </NavLink>
          </li>
          <li className="hover:bg-gray-200 p-2 rounded-md flex items-center space-x-4">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 flex items-center space-x-4' : 'text-gray-800 flex items-center space-x-4'
              }
              end
            >
              {({ isActive }) => (
                <>
                  <FaUser className={`text-xl ${isActive ? 'text-blue-500' : 'text-gray-800'}`} />
                  {isOpen && <span className={`text-lg ${isActive ? 'font-semibold' : ''}`}>Profile</span>}
                </>
              )}
            </NavLink>
          </li>
        </ul>
        <div className="p-4 border-t border-gray-200">
          <li
            onClick={handleClick}
            className={`flex items-center p-3 rounded-md transition-colors duration-200 space-x-4 ${isOpen ? 'bg-red-500 text-white' : 'text-red-500 hover:bg-red-500 hover:text-white'}`}
          >
            <FaSignOutAlt className="text-xl" />
            {isOpen && <span>Logout</span>}
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
