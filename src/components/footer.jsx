import React from 'react';
import isoLogo from '../assets/logo-iso.png';
import pseLogo from '../assets/logo-pse.png';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-xl text-[#565656] font-bold">Solusi enterprise yang terpercaya untuk bisnis anda</h2>
      </div>

      <div className="flex justify-center mb-24 space-x-4">
        <img src={pseLogo} alt="Logo 1" className="w-30 h-20" />
        <img src={isoLogo} alt="Logo 2" className="w-20 h-15" />
      </div>

      {/* Column Container */}
      <div className="max-w-full mx-auto px-auto text-[#565656]">
        <div className="flex  justify-center gap-24 text-md">
          {/* Column 1: Engage */}
          <div className="flex-shrink-0 w-auto ">
            <h3 className="text-base font-semibold mb-6">ENGAGE</h3>
            <ul className="space-y-2 ">
              <li><a href="#" className="hover:underline">Contact Sales</a></li>
              <li><a href="#" className="hover:underline">Find a Partner</a></li>
              <li><a href="#" className="hover:underline">Become a Partner</a></li>
              <li><a href="#" className="hover:underline">Request a Demo</a></li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="flex-shrink-0 w-auto">
            <h3 className="text-base font-semibold mb-6 text-black">PRODUCTS</h3>
            <ul className="space-y-2 ">
              <li><a href="#" className="hover:underline">Data Integration</a></li>
              <li><a href="#" className="hover:underline">Crawling Engine</a></li>
              <li><a href="#" className="hover:underline">Enterprise Data Lake</a></li>
              <li><a href="#" className="hover:underline">Search Engine</a></li>
              <li><a href="#" className="hover:underline">Machine Learning</a></li>
              <li><a href="#" className="hover:underline">Data Exploration</a></li>
              <li><a href="#" className="hover:underline">Visualization & Dashboard</a></li>
              <li><a href="#" className="hover:underline">API Factory</a></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="w-auto me-8 ms-8">
            <h3 className="text-base font-semibold mb-6 text-black">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Social Media Analytics</a></li>
              <li><a href="#" className="hover:underline">eCommerce Analytics</a></li>
              <li><a href="#" className="hover:underline">Video Analytics & eKYC</a></li>
              <li><a href="#" className="hover:underline">Legal Analytics</a></li>
              <li><a href="#" className="hover:underline">Risk Scoring</a></li>
              <li><a href="#" className="hover:underline">One Data</a></li>
              <li><a href="#" className="hover:underline">Smart Gov Dashboard</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="flex-shrink-0 w-auto">
            <h3 className="text-base font-semibold mb-6 text-black">SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Professional Services</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Training</a></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="flex-shrink-0 w-auto">
            <h3 className="text-base font-semibold mb-6 text-black">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Choosing BigBox</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Partner</a></li>
              <li><a href="#" className="hover:underline">Event</a></li>
              <li><a href="#" className="hover:underline">Locations</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-24 text-2xl">
        <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-700"><FaFacebook /></a>
        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
        <a href="#" className="hover:text-red-600"><FaYoutube /></a>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-sm">
        <p>© 2024. BigBox. All rights reserved | <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a></p>
      </div>
    </footer>
  );
};

export default Footer;
