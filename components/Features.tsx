"use client";
import React, { useState } from "react";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState("trusted");

  const features = [
    {
      id: "trusted",
      title: "Trusted by Thousands",
      description:
        "Join thousands of businesses that trust DocuTech for their document needs.",
    },
    {
      id: "soc2",
      title: "SOC-2 Certified",
      description:
        "Our platform meets the highest security standards with SOC-2 certification.",
    },
    {
      id: "gdpr",
      title: "GDPR & HIPAA Compliant",
      description:
        "We ensure compliance with global data protection regulations.",
    },
    {
      id: "encryption",
      title: "End-to-end encryption",
      description:
        "Your documents are protected with enterprise-grade encryption.",
    },
  ];

  return (
    <div id="Features" className="max-w-7xl  mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Docutech
      </h2>

      <div className="relative flex  justify-center flex-col md:flex-row gap-12">
        {/* Left column - Feature buttons */}
        <div className="flex flex-col items-start">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`
                relative w-full max-w-[320px] mx-auto mb-4 py-4 px-6 text-left font-semibold text-[#1e3a8a] bg-white 
                border-2  shadow-sm  transition-all duration-300 ease-in-out overflow-hidden rounded-3xl
                ${
                  activeFeature === feature.id
                    ? "border-[#254A76] shadow-pink-500"
                    : ""
                }
              `}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Right column - Feature image/content */}
        <div className="max-w-4xl ">
          <div className="lg:w-[550px] w-[380px] h-[450px] bg-white shadow-xl rounded-xl border border-[#254A76] border-r-2 border-b-2 ">

            {/* Title and description of the active feature will go here  */}
            
            {/* <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">
                {features.find((f) => f.id === activeFeature)?.title}
              </h3>
              <p className="text-gray-600">
                {features.find((f) => f.id === activeFeature)?.description}
              </p>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}
