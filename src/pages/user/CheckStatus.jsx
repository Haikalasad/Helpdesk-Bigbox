const CheckStatus = () => {
    return (
        <section className="min-h-screen bg-white flex items-center justify-center">
            <div className="w-full max-w-4xl flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-wider">
                    Cek Status Tiket
                </h1>
                <p className="text-xl text-gray-600 font-normal tracking-normal mt-6">
                    Pantau perkembangan tiket pengaduan Anda secara real-time. Setiap perubahan status akan ditampilkan, pastikan Anda menyimpan kode tiket untuk pelacakan mudah.
                </p>

                <div className="relative flex w-full mt-12">
                    <input
                        type="text"
                        className="w-full p-5 pl-12 text-lg border rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                        placeholder="Masukkan kode tiket anda"
                    />
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
                            />
                        </svg>
                    </div>
                    <button className="ml-6 bg-[#0549CF] text-white text-xl rounded-md font-semibold px-4  shadow-md hover:bg-[#033a9a] whitespace-nowrap">
                        Cek Status Tiket
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CheckStatus;
