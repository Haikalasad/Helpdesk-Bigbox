import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/user/LandingPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';
import Tickets from './pages/admin/Tickets';
import NewTicket from './pages/user/NewTicket';
import CheckStatus from './pages/user/CheckStatus';
import Footer from './components/footer';
import Profile from './pages/admin/Profile';
import Dashboard from './pages/admin/Dashboard';
import MainLayout from './pages/admin/MainLayout';
import DetailTicket from './pages/admin/DetailTicket';

function App() {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState(null);

  const hideElementsRoutes = ['/', '/register', '/tickets', '/profile', '/dashboard', '/tickets/detail/:id'];
  const shouldHideElements = hideElementsRoutes.some(route => {
    const path = route.replace(':id', '\\d+'); 
    const regex = new RegExp(`^${path}$`);
    return regex.test(location.pathname);
  });

  const tickets = [
    {
        id: 1,
        username: 'johndoe',
        product: 'BigSocial',
        assignedAdmin: 'Jhon Doe',
        priority: 'High',
        date: '2024-09-01',
        status: 'done',
        subjectKeluhan: 'Masalah login',
        detailKeluhan: 'Saya tidak bisa masuk ke akun saya. Setiap kali mencoba login, halaman hanya merefresh kembali ke layar login tanpa ada pesan error. Saya sudah mencoba membersihkan cache dan cookies serta mereset kata sandi, namun masalahnya masih tetap ada.',
        filePendukung: [
            {
                fileName: 'support_image_1.jpg',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/jpeg',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 2,
        username: 'janedoe',
        product: 'BigMarket',
        assignedAdmin: 'Jhon Doe',
        priority: 'Medium',
        date: '2024-09-02',
        status: 'on-progress',
        subjectKeluhan: 'Masalah gateway pembayaran',
        detailKeluhan: 'Saat mencoba memproses pembayaran melalui gateway pembayaran, pengguna mengalami kesalahan timeout setelah memasukkan detail pembayaran. Masalah ini memengaruhi banyak pelanggan, beberapa di antaranya melaporkan adanya dobel tagihan akibat mencoba ulang beberapa kali.',
        filePendukung: [
            {
                fileName: 'support_image_2.png',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/png',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 3,
        username: 'charlie123',
        product: 'BigLegal',
        assignedAdmin: 'Carol',
        priority: 'Low',
        date: '2024-09-03',
        status: 'done',
        subjectKeluhan: 'Dokumen tidak bisa diunggah',
        detailKeluhan: 'Saya mengalami masalah saat mencoba mengunggah dokumen legal penting ke sistem. Progres bar unggahan tetap berada di 0%, dan tidak ada pesan error yang muncul. Saya sudah mencoba menggunakan browser dan koneksi internet yang berbeda, namun masalah tetap terjadi.',
        filePendukung: [
            {
                fileName: 'support_image_3.jpg',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/jpeg',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 4,
        username: 'david_smith',
        product: 'BigView',
        assignedAdmin: 'Jhon Doe',
        priority: 'High',
        date: '2024-09-04',
        status: 'done',
        subjectKeluhan: 'Dashboard lambat untuk dimuat',
        detailKeluhan: 'Dashboard membutuhkan waktu yang sangat lama untuk dimuat, terutama ketika ada dataset yang besar. Keterlambatan ini menghambat produktivitas dan membuat sulit untuk mengakses laporan serta analitik secara real-time. Saya telah menguji di perangkat dan jaringan yang berbeda, tetapi masalah ini tetap ada.',
        filePendukung: [
            {
                fileName: 'support_image_4.jpg',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/jpeg',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 5,
        username: 'emily_jones',
        product: 'BigOne',
        assignedAdmin: 'Eve',
        priority: 'Medium',
        date: '2024-09-05',
        status: 'done',
        subjectKeluhan: 'Kesalahan pada pembuatan laporan',
        detailKeluhan: 'Saat mencoba membuat laporan, saya mendapat pesan error yang mengatakan bahwa laporan tidak dapat diproses karena ada masalah dengan data input. Saya telah memeriksa semua data yang dimasukkan dan tidak menemukan kesalahan, tetapi tetap saja laporan tidak bisa dibuat.',
        filePendukung: [
            {
                fileName: 'support_image_5.jpg',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/jpeg',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 6,
        username: 'frankie',
        product: 'BigLake',
        assignedAdmin: 'Frank',
        priority: 'Low',
        date: '2024-09-06',
        status: 'on-progress',
        subjectKeluhan: 'Fitur pencarian tidak berfungsi',
        detailKeluhan: 'Fitur pencarian di platform tidak memberikan hasil yang akurat, bahkan ketika saya memasukkan kata kunci yang benar. Pengguna lainnya juga melaporkan masalah yang sama, terutama saat mencari data tertentu yang seharusnya mudah ditemukan.',
        filePendukung: [
            {
                fileName: 'support_image_6.png',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/png',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 7,
        username: 'grace_white',
        product: 'BigVision',
        assignedAdmin: 'Grace',
        priority: 'High',
        date: '2024-09-07',
        status: 'done',
        subjectKeluhan: 'Masalah dengan izin pengguna',
        detailKeluhan: 'Saya menghadapi masalah dengan izin pengguna di platform. Beberapa pengguna memiliki akses ke area yang tidak seharusnya mereka miliki, sementara yang lain tidak dapat mengakses fitur yang diperlukan untuk pekerjaan mereka. Ini menyebabkan kebingungan dan gangguan dalam proses kerja tim.',
        filePendukung: [
            {
                fileName: 'support_image_7.jpg',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/jpeg',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 8,
        username: 'henry_brown',
        product: 'BigAction',
        assignedAdmin: 'Henry',
        priority: 'Medium',
        date: '2024-09-08',
        status: 'on-progress',
        subjectKeluhan: 'Masalah sinkronisasi data',
        detailKeluhan: 'Data tidak disinkronkan dengan benar antar perangkat. Beberapa perubahan yang saya buat di satu perangkat tidak terlihat di perangkat lain, yang menyebabkan inkonsistensi dalam data dan mengganggu alur kerja. Masalah ini sangat mendesak karena memengaruhi keseluruhan operasi tim.',
        filePendukung: [
            {
                fileName: 'support_image_8.png',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/png',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 9,
        username: 'isla_black',
        product: 'BigQuery',
        assignedAdmin: 'Jhon Doe',
        priority: 'Low',
        date: '2024-09-09',
        status: 'done',
        subjectKeluhan: 'Hasil query tidak akurat',
        detailKeluhan: 'Ketika saya menjalankan query untuk mengambil data dari database, hasil yang ditampilkan tidak akurat. Beberapa entri yang saya harapkan tidak muncul, sementara data lain yang seharusnya tidak relevan justru muncul dalam hasil query.',
        filePendukung: [
            {
                fileName: 'support_image_9.jpg',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/jpeg',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 10,
        username: 'jackson',
        product: 'BigSpider',
        assignedAdmin: 'Jack',
        priority: 'High',
        date: '2024-09-10',
        status: 'done',
        subjectKeluhan: 'Error pada komponen spider',
        detailKeluhan: 'Komponen spider mengalami error setiap kali saya mencoba untuk memproses data besar. Ini menyebabkan sistem menjadi lambat atau bahkan crash sepenuhnya. Saya sudah mencoba memuat ulang beberapa kali, namun masalah tetap terjadi.',
        filePendukung: [
            {
                fileName: 'support_image_10.jpg',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/jpeg',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 11,
        username: 'katie_green',
        product: 'BigBuilder',
        assignedAdmin: 'Katie',
        priority: 'Medium',
        date: '2024-09-11',
        status: 'on-progress',
        subjectKeluhan: 'Proyek tidak bisa disimpan',
        detailKeluhan: 'Setiap kali saya mencoba untuk menyimpan proyek yang sedang dikerjakan, muncul pesan error yang mengatakan bahwa proyek tidak dapat disimpan karena masalah dengan server. Ini sangat mengganggu pekerjaan karena saya kehilangan semua perubahan yang telah dibuat.',
        filePendukung: [
            {
                fileName: 'support_image_11.png',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/png',
                fileSize: '150KB'
            }
        ]
    },
    {
        id: 12,
        username: 'liam_king',
        product: 'BigAssistant',
        assignedAdmin: 'Liam',
        priority: 'Low',
        date: '2024-09-12',
        status: 'done',
        subjectKeluhan: 'Perintah suara tidak berfungsi',
        detailKeluhan: 'Fitur perintah suara di asisten digital tidak berfungsi dengan baik. Sistem tidak mengenali perintah saya atau menampilkan hasil yang salah. Saya sudah mencoba kalibrasi mikrofon, tetapi masalah tetap terjadi.',
        filePendukung: [
            {
                fileName: 'support_image_12.png',
                fileUrl: 'https://via.placeholder.com/150',
                fileType: 'image/png',
                fileSize: '150KB'
            }
        ]
    }
]


  return (
    <>
      {!shouldHideElements && <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />}
      
      <Routes>
        {/* User Routes */}
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/Create-ticket" element={<NewTicket />} />
        <Route path="/" element={<LoginPage setLoggedInUser={setLoggedInUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Check-status" element={<CheckStatus />} />

        {/* Admin Routes */}
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/tickets" element={<MainLayout><Tickets /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
        <Route path="/tickets/detail/:id" element={<MainLayout><DetailTicket tickets={tickets} /></MainLayout>} />
      </Routes>
      
      {!shouldHideElements && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
