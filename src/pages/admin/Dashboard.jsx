import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


const Dashboard = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const badgeData = [
        { title: 'Created Tickets', total: 150, change: 5, increase: true },
        { title: 'Unsolved Tickets', total: 30, change: -2, increase: false },
        { title: 'Solved Tickets', total: 120, change: 10, increase: true },
        { title: 'Avg First Time Reply', total: '15m', change: 3, increase: false }
    ];

    const barChartData = [
        { name: 'Jan', Created: 30, Solved: 20 },
        { name: 'Feb', Created: 20, Solved: 30 },
        { name: 'Mar', Created: 40, Solved: 35 },
        { name: 'Apr', Created: 50, Solved: 45 },
        { name: 'May', Created: 60, Solved: 50 },
        { name: 'Jun', Created: 70, Solved: 60 },
        { name: 'Jul', Created: 80, Solved: 70 },
        { name: 'Aug', Created: 90, Solved: 80 },
        { name: 'Sep', Created: 100, Solved: 90 },
        { name: 'Oct', Created: 110, Solved: 100 },
        { name: 'Nov', Created: 120, Solved: 110 },
        { name: 'Dec', Created: 130, Solved: 120 }
    ];

    const pieChartData = [
        { name: '< 1hr', value: 50 },
        { name: '1-3hr', value: 30 },
        { name: '> 3hr', value: 20 }
    ];

    const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];

    return (
        <div className="flex-1 p-6 bg-white border">

            <header className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className="relative">
                    <button
                        onClick={handleDropdownToggle}
                        className="bg-[#5CB67C] hover:bg-green-500 text-white font-semibold py-2 px-4 rounded flex items-center"
                    >
                        Export As
                        <svg
                            className="ml-2 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Export as CSV</button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Export as PDF</button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Export as Docs</button>
                        </div>
                    )}
                </div>
            </header>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 border-b border-gray-200 pb-4">
                {badgeData.map((badge, index) => (
                    <div key={index} className={`relative p-6 bg-white ${index < 3 ? ' border-gray-300' : ''}`}>
                        <h2 className="text-lg font-semibold mb-2">{badge.title}</h2>
                        <div className="flex items-center mb-2">
                            <div className="text-3xl font-bold">{badge.total}</div>
                            <div className={`flex items-center text-base ml-4 ${badge.increase ? 'text-green-500' : 'text-red-500'}`}>
                                <span className={`flex items-center justify-center w-6 h-6 rounded-full ${badge.increase ? 'bg-green-100' : 'bg-red-100'}`}>
                                    {badge.increase ? <FaArrowUp className="text-green-500" /> : <FaArrowDown className="text-red-500" />}
                                </span>
                                <span className="ml-1 text-xl font-bold">{badge.change}%</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">Compared to last month</div>
                        {index < 3 && (
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-1/2 w-px bg-gray-300" />
                        )}
                    </div>
                ))}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8 border-b border-gray-200 pb-4">
                <div className="lg:col-span-3 p-6 bg-white shadow rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Average Tickets Created</h2>
                        <button className="bg-blue-500 text-white py-1 px-4 rounded">Filter by Date</button>
                    </div>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={barChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Created" stackId="a" fill="#6863B0" radius={[0, 0, 8, 8]}>
                            </Bar>
                            <Bar dataKey="Solved" stackId="a" fill="#B9A3F0" radius={[8, 8, 0, 0]}>
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4">Tickets By First Reply Time</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={pieChartData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={100}
                                fill="#8884d8"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend
                                layout="horizontal"
                                verticalAlign="bottom"
                                align="center"
                                wrapperStyle={{ padding: 30 }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </section>


            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col p-6 bg-white text-center shadow rounded-lg border border-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">Total Reviews</h3>
                    <div className="text-4xl font-bold mb-2">320</div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center justify-center">
                    <div className="bg-green-100 p-4 rounded-lg shadow text-center border border-gray-200">
                        <h4 className="text-lg font-semibold mb-1">Positive</h4>
                        <div className="text-xl font-bold mb-2">230</div>
                        <div className="h-2 bg-green-200 rounded-full">
                            <div
                                className="bg-green-500 h-full rounded-full"
                                style={{ width: `${(230 / 320) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg shadow text-center border border-gray-200">
                        <h4 className="text-lg font-semibold mb-1">Neutral</h4>
                        <div className="text-xl font-bold mb-2">60</div>
                        <div className="h-2 bg-yellow-200 rounded-full">
                            <div
                                className="bg-yellow-500 h-full rounded-full"
                                style={{ width: `${(60 / 320) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg shadow text-center border border-gray-200">
                        <h4 className="text-lg font-semibold mb-1">Negative</h4>
                        <div className="text-xl font-bold mb-2">30</div>
                        <div className="h-2 bg-red-200 rounded-full">
                            <div
                                className="bg-red-500 h-full rounded-full"
                                style={{ width: `${(30 / 320) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Dashboard;
