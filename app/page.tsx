'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/images/bg.png";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 opacity-90">
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        {/* Brand Logo - Using text since image was commented out */}
        <div className="mb-16">
          <h3 className="text-3xl font-light tracking-widest text-white">EASTWEST</h3>
        </div>

        {/* Main Content Area */}
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Title and Description with Apple-like typography */}
          <div>
            <h1 className="text-6xl font-semibold text-white tracking-tight mb-3">
              NinjaVan Delivery
            </h1>
            <h2 className="text-2xl font-normal text-white/80">
              Monitoring System
            </h2>
          </div>

          {/* Subtle Divider */}
          <div className="w-24 h-px bg-white/20 mx-auto my-10"></div>

          {/* Description Text */}
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            An innovative solution designed to streamline your delivery tracking experience with precision and elegance.
          </p>

          {/* Buttons with Apple-inspired design */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
            <Link href="/inquiry" className="w-full sm:w-auto">
              <Button className="bg-white/90 cursor-pointer hover:bg-white text-black border-0 rounded-full px-8 py-6 text-base font-medium transition-all w-full">
                Inquire
              </Button>
            </Link>
            <Link href="/upload" className="w-full sm:w-auto">
              <Button className="bg-[#6c1b9a]/90 cursor-pointer hover:bg-[#6c1b9a] text-white border-0 rounded-full px-8 py-6 text-base font-medium transition-all w-full">
                Upload
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-sm font-light text-white/60">EastWest © {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
