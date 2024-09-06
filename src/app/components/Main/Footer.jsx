import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#12418A] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/4">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/Hanover.png"
              alt="Company Logo"
              className="mb-4 w-52"
            />
            <p className="text-white">
              Sauber Pro Max is a cleaning company that cares about the smallest
              details. We are not the only ones, but we are the best. We clean
              hotels, homes, offices, buildings, apartments, warehouses,
              basements, and many other services. We look forward to providing
              you with the best service.
            </p>
          </div>

          {/* Sections */}
          <div className="w-full sm:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Sections</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-100 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-100 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/NKYTkvX9QmUVzhN9/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://www.instagram.com/sauber_pro_max"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-white text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sauber Pro Max. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
