import React from "react";
import Navbar from "@/components/Navbar";
import HomeSection from "../components/Home";
import Testimonials from "@/components/Testimonials";
import FeaturesSection from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className="hero-background">
        {/* Home Section */}
        <HomeSection />

        {/* Testimoinal Section  */}
        <Testimonials />

        {/* Features Section */}
        <FeaturesSection />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
