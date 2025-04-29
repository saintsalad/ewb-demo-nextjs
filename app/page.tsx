import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#c4e538] flex flex-col items-center justify-center p-8">
      {/* Main Content Container */}
      <div className="max-w-4xl w-full flex flex-col items-center justify-center gap-8">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#6c1b9a] mb-2">
            NinjaVan Delivery
          </h1>
          <h2 className="text-2xl text-[#6c1b9a]">
            Monitoring System
          </h2>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Link href="/inquiry">
            <Button className="bg-[#6c1b9a] text-white px-12 py-8 rounded-lg text-lg font-semibold hover:bg-[#8e24aa] transition-colors w-full sm:w-auto">
              Inquire
            </Button>
          </Link>
          <Link href="/upload">
            <Button className="bg-[#6c1b9a] text-white px-12 py-8 rounded-lg text-lg font-semibold hover:bg-[#8e24aa] transition-colors w-full sm:w-auto">
              Upload
            </Button>
          </Link>
        </div>

        {/* Company Name */}
        <div className="mt-8">
          <p className="text-xl font-semibold text-[#6c1b9a]">EastWest</p>
        </div>
      </div>
    </div>
  );
}
