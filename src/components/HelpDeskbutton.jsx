import React, { useState } from 'react';
import '../styling/helpDesk.css'; // Tambahkan file CSS ini

const HelpDeskButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('User');

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const closeForm = () => {
    setIsFormVisible(false);
    setUploadedFile(null);
    setFilePreview(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreview(e.target.result);
      };

      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserName('Haikal');
  };

  return (
    <>
      <a 
        href="#" 
        onClick={toggleFormVisibility} 
        className="fixed bottom-10 right-10 bg-[#1E48C7] text-white p-6 rounded-full shadow-lg hover:bg-[#0E329F] transition duration-300"
        aria-label="Help Desk"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" 
          />
        </svg>
      </a>

      {isFormVisible && (
        <div className="fixed bottom-10 right-10 bg-white p-0 rounded-lg shadow-lg z-50 w-[400px] fadeIn"> {/* Add fadeIn class here */}
          <div className="flex justify-between items-center bg-[#1E48C7] px-4 py-3 rounded-t-lg">
            <h2 className="text-lg font-semibold text-white">
              Welcome to BigBox Help Center
            </h2>
            <button onClick={closeForm} className="text-white font-bold hover:text-gray-200 transition">
              ✕
            </button>
          </div>
          <div className="p-6 max-h-[650px] overflow-y-auto">
            {isLoggedIn ? (
              <form >
                <p className="text-gray-700 font-medium mb-4">Halo {userName}👋🏻 Ada yang bisa kami bantu?</p>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Produk:</label>
                  <select className="block w-full border border-gray-300 rounded-md p-2">
                    <option>BigSocial</option>
                    <option>BigMarket</option>
                    <option>BigLegal</option>
                    <option>BigView</option>
                    <option>BigOne</option>
                    <option>BigLake</option>
                    <option>BigVision</option>
                    <option>BigAcion</option>
                    <option>BigQuery</option>
                    <option>BigSpider</option>
                    <option>BigBuilder</option>
                    <option>BigAssistant</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Perihal:</label>
                  <input type="text" className="block w-full border border-gray-300 rounded-md p-2" placeholder="Masukkan inti masalah" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Jenis Laporan:</label>
                  <select className="block w-full border border-gray-300 rounded-md p-2">
                    <option>Pertanyaan</option>
                    <option>Permintaan</option>
                    <option>Keluhan dan Kendala</option>
                    <option>Aspirasi dan Saran</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Detail Pertanyaan:</label>
                  <textarea className="block w-full border border-gray-300 rounded-md p-2" placeholder="Masukkan deskripsi"></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Upload Dokumen Pendukung:</label>
                  <input type="file" onChange={handleFileChange} className="block w-full border border-gray-300 rounded-md p-2" />
                  {filePreview ? (
                    <div className="mt-4">
                      <img src={filePreview} alt="File Preview" className="w-full h-auto rounded-md" />
                    </div>
                  ) : (
                    uploadedFile && (
                      <div className="mt-4">
                        <p className="text-gray-700">File: {uploadedFile.name}</p>
                      </div>
                    )
                  )}
                </div>
                <button type="submit" className="bg-[#1E48C7] text-white w-full py-3 px-4 rounded-lg hover:bg-[#043DAC] transition duration-300">
                  Kirim
                </button>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  Jika ingin menghubungi kami, Anda harus Login atau Daftar terlebih dahulu☺️
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleLogin}
                    className="inline-block bg-[#1E48C7] hover:bg-[#1E48C7] text-white font-bold py-2 px-6 rounded-lg transition duration-200"
                  >
                    Login
                  </button>
                  <a
                    href="/signup"
                    className="inline-block border border-[#1E48C7] text-[#1E48C7] hover:bg-[#f0f0f0] font-bold py-2 px-6 rounded-lg transition duration-200"
                  >
                    Daftar
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HelpDeskButton;
