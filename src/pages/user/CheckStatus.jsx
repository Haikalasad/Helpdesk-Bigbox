import React, { useState } from 'react';

const CheckStatus = () => {
    const [ticketCode, setTicketCode] = useState('');
    const [ticketDetails, setTicketDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCheckStatus = () => {
        setLoading(true);
        setTimeout(() => {
            setTicketDetails({
                code: ticketCode,
                status: 'On Progress', 
                submittedDate: '2024-09-15',
                finishedDate: 'N/A',
                subject: 'Mengalami error pada saat login di platform Bigbox Social',
                product: 'Bigbox Social',
                reportType: 'Keluhan dan Kendala',
                project: '-',
                details: 'Saya mengalami kesulitan saat login ke platform Bigbox Social. Setelah memasukkan username dan password, muncul pesan kesalahan yang menghalangi saya untuk mengakses akun saya.',
                supportingDocuments: 'https://placeholder.com/placeholder.pdf',
                adminReplies: [
                    {
                        title: 'Balasan Pertama',
                        message: 'Kami sedang memproses pengaduan Anda dengan cermat. Tim kami telah menerima laporan ini dan sedang melakukan pengecekan lebih lanjut terkait permasalahan yang Anda alami.'
                    },
                ],
            });
            
            setLoading(false);
        }, 1000);
    };

    const getStatusBadge = (status) => {
        let badgeClass = '';
        if (status === 'On Progress') {
            badgeClass = 'bg-yellow-400 text-black';
        } else if (status === 'Completed') {
            badgeClass = 'bg-green-500 text-white';
        }
        return <span className={`inline-flex items-center px-3 py-1 text-sm font-semibold ${badgeClass} rounded-full`}>{status}</span>;
    };

    return (
        <section className="min-h-screen bg-white flex items-center justify-center">
            <div className="w-full max-w-4xl flex flex-col p-6">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-wider text-center mb-6">Cek Status Tiket</h1>
                <p className="text-xl text-gray-600 text-center mb-6">
                    Pantau perkembangan tiket pengaduan Anda secara real-time. Pastikan Anda menyimpan kode tiket untuk pelacakan mudah.
                </p>

                <div className="relative flex w-full mt-12">
                    <input
                        type="text"
                        className="w-full p-5 pl-12 text-lg border rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                        placeholder="Masukkan kode tiket anda"
                        value={ticketCode}
                        onChange={(e) => setTicketCode(e.target.value)}
                    />
                    <button
                        className="ml-4 bg-[#0549CF] text-white text-xl rounded-md font-semibold px-4 shadow-md hover:bg-[#033a9a] whitespace-nowrap"
                        onClick={handleCheckStatus}
                    >
                        Cek Status Tiket
                    </button>
                </div>

                {loading && <p className="mt-4 text-gray-600 text-center">Loading...</p>}

                {ticketDetails && (
                    <div className="grid grid-cols-1 gap-6 mt-12">
                        <div className="bg-[#F0F5FF] p-6 rounded-lg shadow border border-[#0549CF]">
                            <h2 className="text-2xl font-bold mb-4">Rincian Tiket</h2>
                            <div className="flex flex-col space-y-4">
                                {[
                                    { label: 'Kode Tiket', value: ticketDetails.code },
                                    { label: 'Status Tiket', value: getStatusBadge(ticketDetails.status) },
                                    { label: 'Tanggal Pengajuan', value: ticketDetails.submittedDate },
                                    { label: 'Tanggal Selesai', value: ticketDetails.finishedDate },
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between">
                                        <span className="font-semibold w-1/4 text-left">{item.label}</span>
                                        <span className="w-3/4 text-left">: {item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-2xl font-bold mt-4 mb-4">{ticketDetails.subject}</h2>
                            <div className="flex flex-col space-y-4 mt-4">
                                {[
                                    { label: 'Produk', value: ticketDetails.product },
                                    { label: 'Jenis Laporan', value: ticketDetails.reportType },
                                    { label: 'Proyek', value: ticketDetails.project },
                                    { label: 'Detail Pertanyaan', value: ticketDetails.details },
                                    { label: 'Dokumen Pendukung', value: ticketDetails.supportingDocuments },
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between">
                                        <span className="font-semibold w-1/4 text-left">{item.label}</span>
                                        <span className="w-3/4 text-left">: {item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#F0F5FF] p-6 rounded-lg shadow border border-[#0549CF]">
                            {ticketDetails.adminReplies.map((reply, index) => (
                                <div key={index} className="text-left ">
                                    <strong className="text-xl">Re: {ticketDetails.subject}</strong>
                                    <p className="mt-4">
                                        <strong>Pesan:</strong> {reply.message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CheckStatus;
