import React from 'react';
import { useNavigate } from 'react-router';

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-blue-100 p-10 rounded-md shadow-md text-center">
        <h1 className="text-2xl font-bold mb-2 text-blue-500">Hello, this is about page</h1>
        <p className="text-gray-600">This is an example of using Tailwind CSS in a React component.</p>
        <button className='p-2 mt-3 rounded-md shadow-md bg-blue-500 text-white' onClick={handleNavigate}>go to home page</button>
      </div>
    </div>

  );
};

export default About;
