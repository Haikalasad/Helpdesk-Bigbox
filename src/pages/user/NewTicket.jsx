import React, { useState } from 'react';
import NewTicketModal from '../../components/NewTicketModal';
import Footer from '../../components/Footer';

const NewTicket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  const handleCreateTicketClick = (e) => {
    e.preventDefault();  
    const newTicketCode = 'TIKET-12345';
    setTicketCode(newTicketCode);
    setIsModalOpen(true);
    console.log('Modal is opening with ticket code:', newTicketCode); // Add this for debugging
  };
  

  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="w-full max-w-5xl bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0549CF] mb-4">Tiket Baru</h1>
          <p className="text-lg  text-gray-600">
            Ajukan tiket pengaduan baru di sini. Isi form dengan lengkap untuk mendapatkan bantuan cepat. Setelah mengirim, Anda akan menerima notifikasi tentang status tiket.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Dropdown Produk */}
          <div>
            <label htmlFor="produk" className="block text-lg font-medium text-gray-700">Produk:</label>
            <select id="produk" name="produk" className="mt-1 block w-full p-2 border rounded-lg shadow-sm">
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

          {/* Dropdown Jenis Laporan */}
          <div>
            <label htmlFor="jenis-laporan" className="block text-lg font-medium text-gray-700">Jenis Laporan:</label>
            <select id="jenis-laporan" name="jenis-laporan" className="mt-1 block w-full p-2 border rounded-lg shadow-sm">
              <option>Pertanyaan</option>
              <option>Permintaan</option>
              <option>Keluhan dan kendala</option>
              <option>Aspirasi dan saran</option>
            </select>
          </div>

          {/* Perihal (Judul keluhan) */}
          <div>
            <label htmlFor="perihal" className="block text-lg font-medium text-gray-700">Perihal (Judul keluhan):</label>
            <input
              type="text"
              id="perihal"
              name="perihal"
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm"
              placeholder="Masukkan judul keluhan"
            />
          </div>

          {/* Proyek */}
          <div>
            <label htmlFor="proyek" className="block text-lg font-medium text-gray-700">Proyek:</label>
            <input
              type="text"
              id="proyek"
              name="proyek"
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm"
              placeholder="Masukkan nama proyek"
            />
          </div>

          {/* Detail Pertanyaan */}
          <div>
            <label htmlFor="detail-pertanyaan" className="block text-lg font-medium text-gray-700">Detail Pertanyaan:</label>
            <textarea
              id="detail-pertanyaan"
              name="detail-pertanyaan"
              rows="4"
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm"
              placeholder="Masukkan detail pertanyaan"
            ></textarea>
          </div>

          {/* Dokumen Pendukung */}
          <div>
            <label htmlFor="dokumen" className="block text-lg font-medium text-gray-700">Dokumen Pendukung (File: PDF, Code, Image, XLS, CSV, dll):</label>
            <input
              type="file"
              id="dokumen"
              name="dokumen"
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm"
            />
          </div>

          <button
            onClick={handleCreateTicketClick}
            className="w-full bg-[#0549CF] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#033a9a]"
          >
            Ajukan Tiket
          </button>
        </form>

        <NewTicketModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          ticketCode={ticketCode}
        />
      </div>
    </section>
  );
};

export default NewTicket;
