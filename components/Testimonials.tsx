"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  avatar: string;
  text: string;
  rating: number;
}

export default function Testimonial() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      avatar: "/icons/testimonialAvtar.png",
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
    },
    {
      id: 2,
      avatar: "/icons/testimonialAvtar.png",
      text: "Generate contracts, agreements & forms in seconds with cutting-edge AI.",
      rating: 5,
    },
    {
      id: 3,
      avatar: "/icons/testimonialAvtar.png",
      text: "Draft contracts and agreements as well forms instantly using smart AI.",
      rating: 5,
    },
    {
      id: 4,
      avatar: "/icons/testimonialAvtar.png",
      text: "Build contracts, agreements & forms in moments with innovative AI.",
      rating: 5,
    },
    {
      id: 5,
      avatar: "/icons/testimonialAvtar.png",
      text: "Produce contracts, agreements & forms quickly via advanced AI technology.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleItems = 3;
  const totalItems = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getVisibleTestimonials = () => {
    const visibleItems = [];
    for (let i = 0; i < maxVisibleItems; i++) {
      const index = (currentIndex + i) % totalItems;
      visibleItems.push(testimonials[index]);
    }
    return visibleItems;
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  // Variants for staggered animation
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for each testimonial card
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  const cardTransition = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <div id="Testimonials" className="max-w-7xl mx-auto py-12">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          What our users say
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="relative md:left-4 left-0 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#254A76] text-white shadow-md mb-4 md:mb-0"
              aria-label="Previous testimonial"
            >
              {/* Desktop: Left Arrow */}
              <span className="hidden md:block">
                <ChevronLeft className="w-5 h-5" />
              </span>
              {/* Mobile: Up Arrow */}
              <span className="block md:hidden">
                <ChevronUp className="w-5 h-5" />
              </span>
            </button>

            <motion.div
              className="flex flex-col md:flex-row justify-center gap-8"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              <AnimatePresence mode="popLayout">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    variants={cardVariants}
                    transition={{ ...cardTransition, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-[280px] bg-gradient-to-br from-blue-50 via-white to-white p-6 rounded-lg shadow-xl shadow-[#254a7650] border-r-2 border-b-2 border-[#254a7650]"
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative -top-2 left-0 sm:-left-28 w-12 h-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt="User avatar"
                          width={45}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-center text-gray-800 text-sm mb-4">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center mt-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="relative md:right-4 right-0 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#254A76] text-white shadow-md mt-4 md:mt-0"
              aria-label="Next testimonial"
            >
              {/* Desktop: Right Arrow */}
              <span className="hidden md:block">
                <ChevronRight className="w-5 h-5" />
              </span>
              {/* Mobile: Down Arrow */}
              <span className="block md:hidden">
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
