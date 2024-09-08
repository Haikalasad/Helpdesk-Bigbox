import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TicketTable from './components/TicketTable';
import PriorityChart from './components/PriorityChart';
import { FaTicketAlt, FaSpinner, FaCheckCircle } from 'react-icons/fa';

const Dashboard = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const tickets = [
    { id: 1, username: 'johndoe', product: 'BigSocial', assignedAdmin: 'Alice', priority: 'High', date: '2024-09-01', status: 'done' },
    { id: 2, username: 'janedoe', product: 'BigMarket', assignedAdmin: 'Bob', priority: 'Medium', date: '2024-09-02', status: 'on-progress' },
    { id: 3, username: 'charlie123', product: 'BigLegal', assignedAdmin: 'Carol', priority: 'Low', date: '2024-09-03', status: 'done' },
    { id: 4, username: 'david_smith', product: 'BigView', assignedAdmin: 'Dan', priority: 'High', date: '2024-09-04', status: 'done' },
    { id: 5, username: 'emily_jones', product: 'BigOne', assignedAdmin: 'Eve', priority: 'Medium', date: '2024-09-05', status: 'done' },
    { id: 6, username: 'frankie', product: 'BigLake', assignedAdmin: 'Frank', priority: 'Low', date: '2024-09-06', status: 'on-progress' },
    { id: 7, username: 'grace_white', product: 'BigVision', assignedAdmin: 'Grace', priority: 'High', date: '2024-09-07', status: 'done' },
    { id: 8, username: 'henry_brown', product: 'BigAction', assignedAdmin: 'Henry', priority: 'Medium', date: '2024-09-08', status: 'on-progress' },
    { id: 9, username: 'isla_black', product: 'BigQuery', assignedAdmin: 'Isla', priority: 'Low', date: '2024-09-09', status: 'done' },
    { id: 10, username: 'jackson', product: 'BigSpider', assignedAdmin: 'Jack', priority: 'High', date: '2024-09-10', status: 'done' },
    { id: 11, username: 'katie_green', product: 'BigBuilder', assignedAdmin: 'Katie', priority: 'Medium', date: '2024-09-11', status: 'on-progress' },
    { id: 12, username: 'liam_king', product: 'BigAssistant', assignedAdmin: 'Liam', priority: 'Low', date: '2024-09-12', status: 'done' },
  ];

  const priorities = [
    tickets.filter(ticket => ticket.priority === 'Low').length,
    tickets.filter(ticket => ticket.priority === 'Medium').length,
    tickets.filter(ticket => ticket.priority === 'High').length,
  ];

  const filteredTickets = tickets.filter(ticket => {
    if (selectedStatus === 'all') return true;
    if (selectedStatus === 'on-progress' && ticket.status === 'on-progress') return true;
    if (selectedStatus === 'completed' && ticket.status === 'done') return true;
    return false;
  });

  const statusSections = [
    {
      status: 'all',
      label: 'All Tickets',
      icon: <FaTicketAlt className="text-blue-500" />,
      count: tickets.length,
    },
    {
      status: 'on-progress',
      label: 'On Progress',
      icon: <FaSpinner className="text-yellow-500" />,
      count: tickets.filter(ticket => ticket.status === 'on-progress').length,
    },
    {
      status: 'completed',
      label: 'Completed',
      icon: <FaCheckCircle className="text-green-500" />,
      count: tickets.filter(ticket => ticket.status === 'done').length,
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Header />
        <div className="flex p-4 space-x-4">
          <div className="flex-1">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              {statusSections.map(section => (
                <div
                  key={section.status}
                  onClick={() => setSelectedStatus(section.status)}
                  className={`flex items-center p-6 rounded-lg shadow-md cursor-pointer ${
                    selectedStatus === section.status ? 'bg-[#fff] text-[#1E48C7] border border-[#1E48C7]' : 'bg-white text-black'
                  }`}
                >
                  <div className="mr-4">{section.icon}</div>
                  <div>
                    <h2 className="text-xl font-semibold">{section.label}</h2>
                    <p>{section.count} Tickets</p>
                  </div>
                </div>
              ))}
            </div>

            <TicketTable tickets={filteredTickets} />
          </div>
          <div className="w-1/4">
            <PriorityChart data={priorities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
