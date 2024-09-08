"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LanguageSelector from "./reusable/LangSelector";
import { FaBars, FaTimes } from "react-icons/fa"; // For the hamburger and close icons
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Menu");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="h-[100px] bg-white shadow-md relative">
      <div className="flex justify-between items-center w-full h-full px-6 lg:px-12 mx-auto">
        {/* Logo */}
        <div className="h-full">
          <Image src="/blue-logo.png" width={100} height={100} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-row gap-6 text-xl font-semibold">
          <Link href="/" className="hover:text-blue-500 cursor-pointer">
            {t("home")}
          </Link>
          <Link href="#services" className="hover:text-blue-500 cursor-pointer">
            {t("services")}
          </Link>
          <Link href="#contact" className="hover:text-blue-500 cursor-pointer">
            {t("contact")}
          </Link>
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleSidebar} className="text-2xl">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full py-8 px-4">
          {/* Logo in Sidebar */}
          <div className="mb-6">
            <Image src="/logo.png" width={100} height={100} alt="Logo" />
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col gap-4 text-xl font-semibold">
            <Link
              href="/"
              className="hover:text-blue-500 cursor-pointer"
              onClick={toggleSidebar}
            >
              {t("home")}
            </Link>
            <Link
              href="#services"
              className="hover:text-blue-500 cursor-pointer"
              onClick={toggleSidebar}
            >
              {t("services")}
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-500 cursor-pointer"
              onClick={toggleSidebar}
            >
              {t("contact")}
            </Link>
            <LanguageSelector />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
