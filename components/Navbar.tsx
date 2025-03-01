import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { Button } from "./ui/button";
import HeadingTag from "./componentUI/NavbarUI/HeadingTag";
import MobileMenu from "./componentUI/NavbarUI/MobileMenu";

const Navbar = () => {
  return (
    <>
      <div className="relative">
        <HeadingTag />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo and Brand */}
          <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/icons/icon.png" alt="logo" width={25} height={25} />
            <span className="text-xl font-bold text-[#254A76]">DocuTech</span>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10">
            <Link
              href="#Features"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="#Testimonials"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Why Choose Us
            </Link>
            <Link
              href="#Pricing"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="#FAQ"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              FAQ
            </Link>
          </nav>

          {/* Discord Icon & Get Started & MobileMenu Button */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              <FaDiscord className="h-7 w-7" />
              <span className="sr-only">Discord</span>
            </Link>

            <Button className="bg-[#254A76]">Get Started</Button>

            {/* Mobile Navigation: Only visible on mobile */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
