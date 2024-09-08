import React, { useState } from 'react';
import Pagination from './Pagination'; // Import Pagination component

function TicketTable({ tickets }) {
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  const totalTickets = tickets.length;
  const totalPages = Math.ceil(totalTickets / ticketsPerPage);
  const paginatedTickets = tickets.slice((currentPage - 1) * ticketsPerPage, currentPage * ticketsPerPage);

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-600';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-600';
      case 'Low':
        return 'bg-green-100 text-green-600';
      default:
        return '';
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center">Ticket #</th>
            <th className="px-4 py-2 text-center">Username</th>
            <th className="px-4 py-2 text-center">Product</th>
            <th className="px-4 py-2 text-center">Assigned Admin</th>
            <th className="px-4 py-2 text-center">Priority</th>
            <th className="px-4 py-2 text-center">Date</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {paginatedTickets.map(ticket => (
            <tr key={ticket.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{ticket.id}</td>
              <td className="border px-4 py-2">{ticket.username}</td>
              <td className="border px-4 py-2">{ticket.product}</td>
              <td className="border px-4 py-2">{ticket.assignedAdmin}</td>
              <td className="border px-4 py-2">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getPriorityClass(ticket.priority)}`}>
                  {ticket.priority}
                </span>
              </td>
              <td className="border px-4 py-2">{ticket.date}</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-[#1E48C7] text-white py-1 px-3 rounded">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default TicketTable;
