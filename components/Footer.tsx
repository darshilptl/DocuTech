import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className=" bg-[#254A76] text-white rounded-t-4xl">
      <div className="relative max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Company Name */}
        <div className="relative">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center gap-2">
              <Image
                src="/icons/FooterLogo.png"
                alt="DocuTech Logo"
                width={30}
                height={30}
                className="object-contain"
              />
              <h1 className="text-xl font-bold">DocuTech</h1>
            </div>
          </div>
          <p className="text-xs text-gray-300 mt-1">
            Powered by Classy Endeavors
          </p>
        </div>

        {/* Navigation and Social Icons */}
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-2">
            <Link href="#" className="text-white hover:text-gray-300">
              <FaWhatsapp className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaFacebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaLinkedin className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaDiscord className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FiMail className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaRegMessage className="relative h-4 w-4 " />
            </Link>
          </div>
          <div className="w-52 h-[1px] bg-white"></div>
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm mt-1">
            <Link href="#features" className="hover:text-gray-300">
              Features
            </Link>
            <Link href="#why-choose-us" className="hover:text-gray-300">
              Why Choose Us
            </Link>
            <Link href="#pricing" className="hover:text-gray-300">
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-gray-300">
              FAQ
            </Link>
            <Link href="#legal-terms" className="hover:text-gray-300">
              Legal terms
            </Link>
            <Link href="#privacy-policy" className="hover:text-gray-300">
              Privacy policy
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
