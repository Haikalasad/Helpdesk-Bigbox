import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailTicket({ tickets }) {
  const { id } = useParams();
  const ticketId = parseInt(id);

  if (!tickets || tickets.length === 0) {
    return <div className="text-center text-gray-500">Loading tickets...</div>;
  }

  const ticket = tickets.find(ticket => ticket.id === ticketId);

  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([
    {
      title: "Balasan Pertama",
      message: "Terima kasih telah menghubungi kami. Kami akan segera memproses permintaan Anda.",
    },
  ]);
  const [expandedReplies, setExpandedReplies] = useState(Array(replies.length).fill(false));

  const handleReplySubmit = () => {
    if (reply.trim()) {
      setReplies([...replies, { title: `Balasan ${replies.length + 1}`, message: reply }]);
      setReply('');
      setExpandedReplies([...expandedReplies, false]);
    }
  };

  if (!ticket) {
    return <div className="text-center text-red-500">Ticket not found</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white mt-10 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Detail Ticket</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bagian Informasi Ticket */}
        <div className="bg-[#F0F5FF] p-6 rounded-lg shadow border border-[#0549CF]">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">{ticket.subjectKeluhan}</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <strong className="text-gray-600">Ticket Code:</strong>
              <span className="text-gray-800">{ticket.id}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-600">Username:</strong>
              <span className="text-gray-800">{ticket.username}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-600">Ticket Status:</strong>
              <span className={`font-semibold ${ticket.status === 'Closed' ? 'text-green-600' : 'text-yellow-600'}`}>
                {ticket.status}
              </span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-600">Submitted Date:</strong>
              <span className="text-gray-800">{ticket.date}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-600">Finished Date:</strong>
              <span className="text-gray-800">{ticket.finishedDate || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-600">Product:</strong>
              <span className="text-gray-800">{ticket.product}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-600">Proyek:</strong>
              <span className="text-gray-800">{ticket.proyek}</span>
            </div>
            {/* Detail Keluhan */}
            <div className="flex flex-col">
              <strong className="text-gray-600">Detail Keluhan:</strong>
              <span className="text-gray-800">{ticket.detailKeluhan}</span>
            </div>
            {/* Dokumen Pendukung */}
            <div className="flex flex-col">
              <strong className="text-gray-600">Dokumen Pendukung:</strong>
              {ticket.filePendukung.length > 0 ? (
                <ul className="text-gray-800">
                  {ticket.filePendukung.map((file, index) => (
                    <li key={index} className="mt-2">
                      <a
                        href={file.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {file.fileName}
                      </a> ({file.fileType}, {file.fileSize})
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-gray-800">Tidak ada dokumen pendukung</span>
              )}
            </div>
          </div>
        </div>

        {/* Bagian Balasan */}
        <div className="bg-white">
          <div className="mb-4 space-y-2">
            {replies.map((reply, index) => (
              <div key={index} className="bg-[#F0F5FF] p-4 rounded border border-[#0549CF]">
                <strong className="text-lg">Re: {ticket.subjectKeluhan}</strong>
                <p className="font-semibold">Pesan:</p>
                <span>
                  {expandedReplies[index]
                    ? reply.message
                    : reply.message.substring(0, 50) + (reply.message.length > 50 ? '...' : '')}
                </span>
                {reply.message.length > 50 && (
                  <button
                    className="text-blue-600 mt-1 underline"
                    onClick={() => {
                      const newExpanded = [...expandedReplies];
                      newExpanded[index] = !newExpanded[index];
                      setExpandedReplies(newExpanded);
                    }}
                  >
                    {expandedReplies[index] ? 'See Less' : 'See All'}
                  </button>
                )}
              </div>
            ))}
          </div>

          <textarea
            className="w-full h-[222px] p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ketik balasan di sini..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            onClick={handleReplySubmit}
          >
            Kirim Balasan
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailTicket;
