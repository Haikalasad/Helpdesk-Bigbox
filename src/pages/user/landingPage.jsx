import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import iconDocs from '../../assets/icon-docs.png'
import iconTicket from '../../assets/icon-ticket.png'

const FAQs = [
  { question: "Apa itu tiket pengaduan?", answer: "Tiket pengaduan adalah alat untuk mengajukan masalah atau pertanyaan yang memerlukan bantuan dari tim dukungan kami." },
  { question: "Bagaimana cara membuat tiket pengaduan?", answer: "Untuk membuat tiket pengaduan, klik 'Buat Tiket Baru' dan isi formulir yang tersedia." },
  { question: "Apa yang harus saya isi di form tiket pengaduan?", answer: "Isi judul tiket, deskripsi masalah, dan kategori tiket pada formulir yang disediakan." },
  { question: "Berapa lama waktu yang dibutuhkan untuk menindaklanjuti tiket?", answer: "Waktu tindak lanjut tergantung pada kompleksitas masalah, tetapi kami berusaha menyelesaikan tiket dalam waktu 24 jam." },
  { question: "Bagaimana cara mengecek status tiket saya?", answer: "Anda dapat mengecek status tiket dengan mengklik 'Cek Status Tiket' dan memasukkan nomor tiket Anda." },
  { question: "Apakah saya bisa mengedit tiket pengaduan setelah diajukan?", answer: "Saat ini, tiket tidak dapat diedit setelah diajukan. Namun, Anda dapat membuat tiket baru jika ada tambahan informasi." },
  { question: "Apakah saya akan mendapatkan notifikasi tentang tiket saya?", answer: "Ya, Anda akan mendapatkan notifikasi melalui email atau aplikasi tentang status dan pembaruan tiket Anda." },
  { question: "Apakah ada batasan jumlah tiket yang bisa saya ajukan?", answer: "Tidak ada batasan jumlah tiket yang dapat Anda ajukan, namun kami mendorong Anda untuk mengajukan tiket yang relevan." },
  { question: "Apa yang harus saya lakukan jika tiket tidak mendapat tanggapan?", answer: "Jika tiket Anda tidak mendapatkan tanggapan dalam waktu yang wajar, silakan hubungi kami melalui saluran lain untuk mendapatkan bantuan lebih lanjut." },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCreateTicketClick = () => {
    navigate('/Create-ticket');
  };

  const handleCheckStatusClick = () => {
    navigate('/Check-status');
  };

  return (
    <>
      <section className="hero-section min-h-screen bg-white flex items-center justify-center p-14">
        <div className="container mx-auto lg:flex-row items-center relative z-10 flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center text-center lg:pr-10 m-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wider text-center">
              Selamat Datang di <span className="text-[#FF931E]">BigBox</span> Help Center
            </h1>
            <p className="text-xl text-[#737373] font-medium tracking-normal lg:max-w-5xl text-center mt-8">
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

            <div className="flex flex-col lg:flex-row justify-center items-center mt-14 gap-6 w-full max-w-5xl">
              {/* Left box: Buat Tiket Baru */}
              <div className="bg-white p-8 rounded-xl shadow-md w-full lg:w-1/2 flex flex-1 h-auto text-left transition-transform transform hover:scale-105">
                <img src={iconDocs} className='w-[60px] h-[60px] mr-6' alt="Icon Docs" />
                <div>
                  <h2 className="text-3xl font-bold mb-4">Buat Tiket Baru</h2>
                  <p className="text-xl mb-6 max-w-lg text-[#737373]">
                    Buat tiket baru untuk pertanyaan, masukan, atau keluhan. Kami siap membantu!
                  </p>
                  <button
                    onClick={handleCreateTicketClick}
                    className="bg-[#0549CF] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-[#033a9a]"
                  >
                    Buat Tiket Baru
                  </button>
                </div>
              </div>

              {/* Right box: Cek Status Tiket */}
              <div className="bg-white p-8 rounded-xl shadow-md w-full lg:w-1/2 flex flex-1 h-auto text-left transition-transform transform hover:scale-105">
                <img src={iconTicket} className='w-[60px] h-[60px] mr-6' alt="Icon Ticket" />
                <div>
                  <h2 className="text-3xl font-bold mb-4">Cek Status Tiket</h2>
                  <p className="text-xl mb-6 max-w-lg text-[#737373]">
                    Masukkan nomor tiket Anda untuk mengetahui status terbaru dari tiket yang telah diajukan.
                  </p>
                  <button
                    onClick={handleCheckStatusClick}
                    className="bg-[#0549CF] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-[#033a9a]"
                  >
                    Cek Status Tiket
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-80 left-1 w-64 h-64 bg-gradient-to-r from-rose-100 to-rose-400 rounded-full opacity-70 blur-2xl -z-10"></div>
            <div className="absolute top-5 left-3/4 w-64 h-64 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full opacity-50 blur-xl -z-10"></div>
          </div>
        </div>
      </section>

      <section className='mb-12'>
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF931E] transition duration-300">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <span className="float-right text-lg font-bold">{open ? '-' : '+'}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-2 text-gray-600 bg-white border border-t border-gray-300 rounded-b-lg">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
