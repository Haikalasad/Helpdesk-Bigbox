import React, { useState } from 'react';
import { FaFilter, FaTag, FaUser, FaCalendar } from 'react-icons/fa'; 
import Pagination from './Pagination'; 

function TicketTable({ tickets }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [selectedAssignedAdmin, setSelectedAssignedAdmin] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');
  

  const ticketsPerPage = 5;

  const uniqueProducts = ['All', ...new Set(tickets.map(ticket => ticket.product))];
  const uniqueAssignedAdmins = ['All', ...new Set(tickets.map(ticket => ticket.assignedAdmin))];
  const uniqueDates = ['All', ...new Set(tickets.map(ticket => ticket.date))];


  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subjectKeluhan.toLowerCase().includes(searchTerm.toLowerCase())
      || ticket.username.toLowerCase().includes(searchTerm.toLowerCase())
      || ticket.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProduct = selectedProduct === 'All' || ticket.product === selectedProduct;
    const matchesAssignedAdmin = selectedAssignedAdmin === 'All' || ticket.assignedAdmin === selectedAssignedAdmin;
    const matchesPriority = selectedPriority === 'All' || ticket.priority === selectedPriority;
    const matchesDate = selectedDate === 'All' || ticket.date === selectedDate;
    return matchesSearch && matchesProduct && matchesAssignedAdmin && matchesPriority && matchesDate;
  });

  const totalTickets = filteredTickets.length;
  const totalPages = Math.ceil(totalTickets / ticketsPerPage);
  const paginatedTickets = filteredTickets.slice((currentPage - 1) * ticketsPerPage, currentPage * ticketsPerPage);

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
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4 relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg w-full md:w-1/3"
        />
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowFilterMenu(!showFilterMenu)}
            className="bg-gray-200 px-4 py-2 rounded flex items-center space-x-2"
          >
            <FaFilter />
            <span>Filter By</span>
          </button>
          {showFilterMenu && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
              <div className="p-2">
                <div className="flex items-center space-x-2 mb-2">
                  <FaTag />
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    {uniqueProducts.map((product, index) => (
                      <option key={index} value={product}>{product}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <FaUser />
                  <select
                    value={selectedAssignedAdmin}
                    onChange={(e) => setSelectedAssignedAdmin(e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    {uniqueAssignedAdmins.map((admin, index) => (
                      <option key={index} value={admin}>{admin}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <FaFilter />
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    <option value="All">All Priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendar />
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    {uniqueDates.map((date, index) => (
                      <option key={index} value={date}>{date}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <table className="min-w-full table-auto rounded-lg">
      <thead className=" bg-neutral-100 font-medium dark:border-neutral-500 dark:text-neutral-800">
          <tr>
            <th className="px-4 py-2 text-center">Ticket #</th>
            <th className="px-4 py-2 text-center">Username</th>
            <th className="px-4 py-2 text-center">Product</th>
            <th className="px-4 py-2 text-center">Subject</th>
            <th className="px-4 py-2 text-center">Assigned Admin</th>
            <th className="px-4 py-2 text-center">Priority</th>
            <th className="px-4 py-2 text-center">Date</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-center rounded-lg">
          {paginatedTickets.map((ticket) => (
            <tr key={ticket.id} className="hover:bg-gray-100">
              <td className=" px-4 py-2">{ticket.id}</td>
              <td className=" px-4 py-2">{ticket.username}</td>
              <td className=" px-4 py-2">{ticket.product}</td>
              <td className=" px-4 py-2">{ticket.subjectKeluhan}</td>
              <td className=" px-4 py-2">{ticket.assignedAdmin}</td>
              <td className=" px-4 py-2">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getPriorityClass(ticket.priority)}`}>
                  {ticket.priority}
                </span>
              </td>
              <td className=" px-4 py-2">{ticket.date}</td>
              <td className=" px-4 py-2 text-center">
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
