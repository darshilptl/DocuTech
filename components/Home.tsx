import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import { Verified } from "lucide-react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { Button } from "./ui/button";
import { GradientText } from "./componentUI/TextUI/GradientText";

const HomeSection = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          AI-Powered Unified Platform;
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <GradientText>Create</GradientText> Effortlessly
        </h2>

        <p className="text-gray-700 mb-8 max-w-4xl mx-auto">
          Fast, Smart & Secure – Works with Google Drive, Dropbox, Salesforce &
          Your Favorite Business Tools
        </p>

        {/* Certification badges */}
        <div className="flex justify-center items-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <Verified className="w-4 h-4 bg-[#254A76] text-white rounded-full" />
            <span className="text-sm">ESIGN Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Verified className="w-4 h-4 bg-[#254A76] text-white rounded-full" />
            <span className="text-sm">UETA Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <Verified className="w-4 h-4 bg-[#254A76] text-white rounded-full" />
            <span className="text-sm">eIDAS Certified</span>
          </div>
        </div>

        {/* Upload section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <div className="flex items-center border border-[#254A76] rounded-full bg-transparent overflow-hidden p-2 pr-2 w-full md:w-auto ">
            <input
              type="text"
              className="px-4 py-2 flex-grow text-sm bg-transparent focus:outline-none focus:ring-0 focus:bg-transparent "
              placeholder="Drop your file here"
            />
            <Button className="bg-[#254A76] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm">
              <FaCloudUploadAlt className="w-5 h-5" />
              Upload File
            </Button>
          </div>

          <span className="text-gray-500">OR</span>

          <Button className="bg-[#254A76] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm">
            <FaWandMagicSparkles />
            Generate with AI
          </Button>
        </div>

        {/* Document preview box */}
        <div className="max-w-md mx-auto mb-10">
          <div className="w-full h-[450px] bg-white shadow-xl rounded-xl border border-[#254A76] border-r-2 border-b-2 ">
            {/* Blank white square */}
          </div>
        </div>

        {/* Stats and clients */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-bold xl:text-xl text-lg">
            <GradientText>64.0k</GradientText> businesses and individuals have
          </p>
          <p className="relative -top-5 font-bold text-xl">
          signed with <GradientText>DocuTech</GradientText>
          </p>
        </div>

        {/* Client logos */}
        <div className="flex flex-wrap justify-center items-center gap-20 ">
          <Image
            src="/icons/Container.png"
            alt="UC San Diego"
            width={120}
            height={120}
            className=" object-contain"
          />
          <Image
            src="/icons/Container (1).png"
            alt="UC San Diego"
            width={120}
            height={120}
            className=" object-contain"
          />
          <Image
            src="/icons/Container (2).png"
            alt="IVIRMA"
            width={120}
            height={120}
            className=" object-contain"
          />
          <Image
            src="/icons/Container (3).png"
            alt="Howard University"
            width={120}
            height={120}
            className=" object-contain"
          />
          <Image
            src="/icons/Container (4).png"
            alt="PharmBills"
            width={120}
            height={120}
            className=" object-contain"
          />
          <Image
            src="/icons/Container (5).png"
            alt="Labs"
            width={120}
            height={120}
            className=" object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default HomeSection;
