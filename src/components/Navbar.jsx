import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
      <img src="/logo.png" alt="AOL Logo" className="h-10" />
      <div className="space-x-4">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#solutions" className="hover:text-accent">Solutions</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
}
