import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("Footer");
  console.log(t);
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
              src="/white-logo.png"
              alt="Company Logo"
              className="mb-4 w-52"
            />
            <p className="text-white">{t("description")}</p>
          </div>

          {/* Sections */}
          <div className="w-full sm:w-1/4">
            <h3 className="text-lg font-semibold mb-4">{t("sections")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-100 hover:text-white">
                  {t("services")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-100 hover:text-white">
                  {t("contactInfo")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/4">
            <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-2">
              <li className="text-gray-100">
                <a href="tel:+4917684234070" className="hover:text-white">
                  +49 176 84234070
                </a>
              </li>
              <li className="text-gray-100">
                <a href="tel:+4915771922675" className="hover:text-white">
                  +49 157 71922675
                </a>
              </li>
              <li className="text-gray-100">
                <a
                  href="mailto:sauberpromax@gmail.com"
                  className="hover:text-white"
                >
                  Sauberpromax@gmail.com
                </a>
              </li>
            </ul>
            {/* Social Media Links */}
            <div className="w-full sm:w-1/4 mt-4">
              <h3 className="text-md font-semibold mb-4">{t("follow")}</h3>
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
        </div>

        {/* Bottom Text */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-white text-sm">
          <p>{t("copyRight")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
