import React from 'react';
import heroSection from '../assets/Container.png';

const landingPage = () => {
    return (
        <>
        
        <section className="hero-section bg-white relative overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
                {/* Teks dan Tombol */}
                <div className="flex-1 text-center lg:text-left lg:pr-10 mb-8 relative z-10">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        Penyedia <span className="text-[#FF931E]">Solusi AI</span> Terkemuka di Indonesia
                    </h1>
                    <p className="text-md mb-6 max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                        Kami membantu organisasi menggunakan AI dan analytics untuk bekerja lebih cerdas,
                        membuat keputusan lebih baik, menyederhanakan operasi, memperoleh wawasan
                        lebih mendalam, dan mewujudkan ide inovatif dengan lebih cepat.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <a
                            href="/signup"
                            className="inline-block bg-[#875BF7] hover:bg-[#6a4bb9] text-white font-bold py-2 px-6 rounded-lg transition duration-200"
                        >
                            Jelajahi Bigbox AI
                        </a>
                        <a
                            href="/learn-more"
                            className="inline-block border border-[#875BF7] text-[#875BF7] hover:bg-[#f0f0f0] font-bold py-2 px-6 rounded-lg transition duration-200"
                        >
                            Dapatkan Bantuan Ahli
                        </a>
                    </div>
                </div>

                <div className="flex-1 relative lg:ml-10 lg:pt-8">
                    <img
                        src={heroSection}
                        alt="Hero Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute top-80 left-2/4 w-64 h-64 bg-gradient-to-r from-rose-100 to-rose-400 rounded-full opacity-70 blur-2xl -z-10"></div>
                <div className="absolute top-0 left-2/3 w-64 h-64 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full opacity-50 blur-xl -z-10"></div>
                <div className="absolute top- left-3/4 w-64 h-64 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-50 blur-xl -z-10"></div>

            </div>
        </section>

        <div className="absolute inset-x-0 bottom-20 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256" className="text-[#875BF7]">
                    <path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 160a48.05 48.05 0 0 1-48 48h-32a48.05 48.05 0 0 1-48-48V80a48.05 48.05 0 0 1 48-48h32a48.05 48.05 0 0 1 48 48Zm-56-92.69v89.38l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 172.69V83.31l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32Z" />
                </svg>
            </div>

            
        </>
        
    );
};

export default landingPage;
