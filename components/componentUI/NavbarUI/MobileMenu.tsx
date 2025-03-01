import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <>
      {/* Mobile Navigation: Only visible on mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="p-4">
          {/* Added visually hidden title for accessibility */}
          <SheetHeader className="sr-only">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <h2 className="sr-only">Mobile Navigation Menu</h2>
          <nav className="flex justify-center items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Why Choose Us
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              FAQ
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
