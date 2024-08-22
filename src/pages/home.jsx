import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-blue-100 p-10 rounded-md shadow-md text-center">
        <h1 className="text-2xl font-bold mb-2 text-blue-500">Hello, this is home page</h1>
        <p className="text-gray-600">This is an example of using Tailwind CSS in a React component.</p>
        <button className='p-2 mt-3 rounded-md shadow-md bg-blue-500 text-white font-bold' onClick={handleNavigate}>About page</button>
      </div>
    </div>


  );
};

export default Home;
