import React, { useState } from 'react';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const Profile = () => {

    const [user, setUser] = useState({
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        product: 'Product A',
        division: 'Marketing',
        phoneNumber: '123-456-7890',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User data:', user);
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col bg-gray-100">
                <Header />
                <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md max-w-6xl ">
                    <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="flex flex-col items-center">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${user.fullName.replace(' ', '+')}&background=random&size=150`}
                                    alt="Profile"
                                    className="w-56 h-56 rounded-full object-cover mb-4"
                                />
                                <div className='text-center py-6'>

                                <h3 className="text-xl font-semibold">{user.fullName}</h3>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="text-gray-600">{user.product}</p>
                                <p className="text-gray-600">{user.division}</p>

                                </div>
                               
                            </div>
                        </div>

                        {/* Right Section: Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Full Name */}
                                <div className="flex items-center">
                                    <label className="block text-lg font-medium text-gray-700 w-1/4">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={user.fullName}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="flex items-center">
                                    <label className="block text-lg font-medium text-gray-700 w-1/4">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                                    />
                                </div>

                                {/* Product */}
                                <div className="flex items-center">
                                    <label className="block text-lg font-medium text-gray-700 w-1/4">
                                        Product <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="product"
                                        value={user.product}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                                    >
                                        <option value="Product A">Product A</option>
                                        <option value="Product B">Product B</option>
                                        <option value="Product C">Product C</option>
                                    </select>
                                </div>

                                {/* Division */}
                                <div className="flex items-center">
                                    <label className="block text-lg font-medium text-gray-700 w-1/4">
                                        Division <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="division"
                                        value={user.division}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="flex items-center">
                                    <label className="block text-lg font-medium text-gray-700 w-1/4">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={user.phoneNumber}
                                        onChange={handleChange}
                                        className="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                                    />
                                </div>

                                {/* Password */}
                                <div className="flex items-center">
                                    <label className="block text-lg font-medium text-gray-700 w-1/4">
                                        Password <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#1E48C7] text-white py-2 rounded-md shadow-md hover:bg-indigo-600"
                                >
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
