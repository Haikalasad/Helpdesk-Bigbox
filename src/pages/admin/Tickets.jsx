import React, { useState } from 'react';
import TicketTable from './components/TicketTable';
import PriorityChart from './components/PriorityChart';
import { FaTicketAlt, FaSpinner, FaCheckCircle } from 'react-icons/fa';

const Tickets = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const loggedInAdmin = 'Jhon Doe';

  const tickets = [
    { id: 1, username: 'johndoe', product: 'BigSocial', assignedAdmin: 'Jhon Doe', priority: 'High', date: '2024-09-01', status: 'done', subjectKeluhan: 'Problem with login' },
    { id: 2, username: 'janedoe', product: 'BigMarket', assignedAdmin: 'Jhon Doe', priority: 'Medium', date: '2024-09-02', status: 'on-progress', subjectKeluhan: 'Payment gateway issue' },
    { id: 3, username: 'charlie123', product: 'BigLegal', assignedAdmin: 'Carol', priority: 'Low', date: '2024-09-03', status: 'done', subjectKeluhan: 'Document not uploading' },
    { id: 4, username: 'david_smith', product: 'BigView', assignedAdmin: 'Jhon Doe', priority: 'High', date: '2024-09-04', status: 'done', subjectKeluhan: 'Slow dashboard loading' },
    { id: 5, username: 'emily_jones', product: 'BigOne', assignedAdmin: 'Eve', priority: 'Medium', date: '2024-09-05', status: 'done', subjectKeluhan: 'Error in report generation' },
    { id: 6, username: 'frankie', product: 'BigLake', assignedAdmin: 'Frank', priority: 'Low', date: '2024-09-06', status: 'on-progress', subjectKeluhan: 'Search not working' },
    { id: 7, username: 'grace_white', product: 'BigVision', assignedAdmin: 'Grace', priority: 'High', date: '2024-09-07', status: 'done', subjectKeluhan: 'Issue with user permissions' },
    { id: 8, username: 'henry_brown', product: 'BigAction', assignedAdmin: 'Henry', priority: 'Medium', date: '2024-09-08', status: 'on-progress', subjectKeluhan: 'Data syncing problems' },
    { id: 9, username: 'isla_black', product: 'BigQuery', assignedAdmin: 'Jhon Doe', priority: 'Low', date: '2024-09-09', status: 'done', subjectKeluhan: 'Query results not accurate' },
    { id: 10, username: 'jackson', product: 'BigSpider', assignedAdmin: 'Jack', priority: 'High', date: '2024-09-10', status: 'done', subjectKeluhan: 'Spider component error' },
    { id: 11, username: 'katie_green', product: 'BigBuilder', assignedAdmin: 'Katie', priority: 'Medium', date: '2024-09-11', status: 'on-progress', subjectKeluhan: 'Project not saving' },
    { id: 12, username: 'liam_king', product: 'BigAssistant', assignedAdmin: 'Liam', priority: 'Low', date: '2024-09-12', status: 'done', subjectKeluhan: 'Voice commands not recognized' },
  ];

  const adminTicketsData = tickets.reduce((acc, ticket) => {
    const { assignedAdmin, status } = ticket;
    
    if (!acc[assignedAdmin]) {
      acc[assignedAdmin] = { onProgress: 0, completed: 0 };
    }
  
    if (status === 'on-progress') {
      acc[assignedAdmin].onProgress += 1;
    } else if (status === 'done') {
      acc[assignedAdmin].completed += 1;
    }
  
    return acc;
  }, {});
  

  const adminChartData = Object.keys(adminTicketsData).map(admin => ({
    admin,
    onProgress: adminTicketsData[admin].onProgress,
    completed: adminTicketsData[admin].completed,
  }));
  

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
      icon: <FaTicketAlt className="text-blue-500" size={32} />, 
      count: tickets.length,
    },
    {
      status: 'on-progress',
      label: 'On Progress',
      icon: <FaSpinner className="text-yellow-500" size={32} />, 
      count: tickets.filter(ticket => ticket.status === 'on-progress').length,
    },
    {
      status: 'completed',
      label: 'Completed',
      icon: <FaCheckCircle className="text-green-500" size={32} />, 
      count: tickets.filter(ticket => ticket.status === 'done').length,
    },
  ];
  

  return (
        <div className="flex flex-col p-4 space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <div className="grid grid-cols-4 gap-4 mb-4">
                {statusSections.map((section) => (
                  <div
                    key={section.status}
                    onClick={() => setSelectedStatus(section.status)}
                    className={`flex items-center p-8 rounded-lg shadow-md cursor-pointer ${selectedStatus === section.status ? 'bg-[#fff] text-[#1E48C7] border border-[#1E48C7]' : 'bg-white text-black'
                      }`}
                  >
                    <div className="mr-4">{section.icon}</div>
                    <div>
                      <h2 className="text-xl font-semibold">{section.label}</h2>
                      <p>{section.count} Tickets</p>
                    </div>
                  </div>
                ))}
                <PriorityChart data={adminChartData} loggedInAdmin={loggedInAdmin} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <TicketTable tickets={filteredTickets} />
          </div>
        </div>
  );
};

export default Tickets;
