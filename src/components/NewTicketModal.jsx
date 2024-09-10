import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { ClipboardIcon, XIcon } from '@heroicons/react/outline';
import iconThankYou from '../assets/icon-thankyou.png';

const NewTicketModal = ({ isOpen, onClose, ticketCode }) => {
    const handleCopyCode = () => {
        navigator.clipboard.writeText(ticketCode);
        alert('Kode tiket berhasil disalin!');
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <Dialog
                        open={isOpen}
                        onClose={onClose}
                        className="fixed inset-0 flex items-center justify-center z-50"
                    >
                        <DialogPanel className="bg-[#0549CF] text-white rounded-2xl p-8 max-w-lg mx-auto relative shadow-lg">

    
                            {console.log('Modal is visible')}
                            <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
                                <XIcon className="h-6 w-6" />
                            </button>

                            {/* Title */}
                            <h2 className="text-2xl font-semibold text-center mb-4">Tiket Pengaduan Telah Dikirim!</h2>

                               {/* Icon Thank You */}
                               <div className="flex justify-center">
                                <img src={iconThankYou} alt="Thank You Icon" className="w-60 h-60 mb-6" />
                            </div>


                            {/* Description */}
                            <p className="text-lg text-center mb-6">
                                Terima kasih telah mengajukan tiket Anda. Kami akan segera memprosesnya dan menghubungi Anda dengan informasi lebih lanjut atau solusi terkait masalah Anda.
                            </p>

                            {/* Ticket Code Section */}
                            <div className="flex justify-center items-center space-x-2 bg-white text-[#0549CF] rounded-xl py-3 px-4 mb-6">
                                <span className="text-lg font-semibold">Kode Tiket: {ticketCode}</span>
                                <button onClick={handleCopyCode} className="hover:text-[#FF931E]">
                                    <ClipboardIcon className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Check Status Button */}
                            <div className="flex justify-center">
                                <button
                                    onClick={onClose}  // Add your routing logic for "Check Status" here
                                    className="bg-[#FF931E] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-[#e07b00]"
                                >
                                    Cek Status Tiket
                                </button>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </div>
            )}
        </>
    );
};

export default NewTicketModal;
