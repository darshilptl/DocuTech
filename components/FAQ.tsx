"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    id: "item-2",
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    id: "item-3",
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    id: "item-4",
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string>("");

  const toggleItem = (id: string) => {
    // Toggle the item: close it if it's already open, or open it otherwise
    setOpenItem((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="FAQ" className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
      >
        {faqData.map(({ id, question, answer }) => (
          <AccordionItem
            key={id}
            value={id}
            className="rounded-lg overflow-hidden mt-5 shadow-lg shadow-pink-200 "
          >
            <div
              onClick={() => toggleItem(id)}
              className="bg-[#254A76] text-white px-6 py-5 flex justify-between items-center hover:no-underline cursor-pointer"
            >
              <span className="relative text-left font-medium text-lg">
                {question}
              </span>
              {openItem === id ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </div>
            <AccordionContent className="bg-white transition-all duration-300 ease-in-out ">
              <div className="p-6 text-[#254A76] ">{answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
