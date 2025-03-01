"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );

  // Added conditional pricing values for annually vs monthly
  const freePlan = {
    price: billingCycle === "monthly" ? "0" : "0",
    period: billingCycle === "monthly" ? "/Month" : "/Year",
  };

  const premiumPlan = {
    price: billingCycle === "monthly" ? "10" : "100",
    period: billingCycle === "monthly" ? "/Month" : "/Year",
  };

  const teamsPlan = {
    price: billingCycle === "monthly" ? "8" : "80",
    period: billingCycle === "monthly" ? "/Month per month" : "/Year",
    minimum: billingCycle === "monthly" ? "USD 24/month" : "USD 240/year",
    total: billingCycle === "monthly" ? "USD 24" : "USD 240",
  };

  return (
    <div id="Pricing" className="w-full max-w-6xl mx-auto px-4 py-12 ">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Pick your plan. We make this part easy too.
        </h2>

        <div className="inline-flex items-center rounded-full border border-[#254A76]">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              billingCycle === "monthly"
                ? "bg-[#254A76] text-white"
                : "bg-transparent text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annually")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              billingCycle === "annually"
                ? "bg-[#254A76] text-white"
                : "bg-transparent text-gray-700"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <div className="bg-white rounded-lg overflow-hidden border border-[#254A76] border-r-2 border-b-2 shadow-md shadow-pink-400 relative">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">FREE</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-gray-800 font-bold text-3xl">USD</span>
              <span className="relative top-4 text-gray-800 font-bold text-5xl ml-1">
                {freePlan.price}
              </span>
              <span className="text-gray-600 ml-1">{freePlan.period}</span>
            </div>
            <p className="w-48 text-sm text-gray-600 bg-gray-200 p-2 mb-6 rounded-sm">
              No Credit Card required
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span>5 documents a month</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span>Activity timeline</span>
              </li>
            </ul>
          </div>
          <div className="relative px-6 lg:top-20.5 -top-5">
            <Button className="w-full bg-[#254A76] hover:bg--[#254A76] text-white rounded-full">
              Select Plan
            </Button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-[#254A76] rounded-lg overflow-hidden text-white shadow-md shadow-pink-400 relative">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Premium</h3>
            <div className="flex items-baseline mb-4">
              <span className="font-bold text-3xl">USD</span>
              <span className="relative top-4 font-bold text-5xl ml-1">
                {premiumPlan.price}
              </span>
              <span className="text-gray-200 ml-1">
                {premiumPlan.period}
              </span>
            </div>
            <ul className="space-y-3 mt-8 mb-8">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Unlimited documents</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Unlimited signees</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Activity timeline</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Certificate of completion</span>
              </li>
            </ul>
          </div>
          <div className="relative px-6 lg:top-14 -top-6">
            <Button className="w-full bg-white hover:bg-gray-100 text-[#254A76] rounded-full">
              Select Plan
            </Button>
          </div>
        </div>

        {/* Teams Plan */}
        <div className="bg-[#254A76] rounded-lg overflow-hidden text-white shadow-md shadow-pink-400 relative">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Teams</h3>
            <div className="flex items-baseline mb-1">
              <span className="font-bold text-3xl">USD</span>
              <span className="relative top-4 font-bold text-5xl ml-1">
                {teamsPlan.price}
              </span>
              <span className="text-gray-200 ml-1">
                {teamsPlan.period}
              </span>
            </div>
            <p className="text-sm text-gray-200 mt-6 mb-6">
              Minimum total of{" "}
              <span className="text-white font-semibold">
                {teamsPlan.minimum}
              </span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Everything from Premium</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Team management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Transferable contracts</span>
              </li>
            </ul>
          </div>
          <div className="relative -top-5 px-6 py-4 flex justify-between items-center">
            <span>
              {billingCycle === "monthly" ? "Monthly total" : "Annual total"}
            </span>
            <span className="font-semibold">{teamsPlan.total}</span>
          </div>
          <div className="px-6 pb-6">
            <Button className="w-full bg-white hover:bg-gray-100 text-[#254A76] rounded-full">
              Select Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
