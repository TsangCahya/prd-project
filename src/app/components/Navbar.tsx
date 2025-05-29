"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[#484848]">
              Rice Plant Monitor
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg transition-colors ${
                pathname === "/" || pathname === ""
                  ? "bg-[#ACDA00] text-white"
                  : "text-[#484848] hover:bg-gray-100"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/history"
              className={`px-4 py-2 rounded-lg transition-colors ${
                pathname.startsWith("/history")
                  ? "bg-[#ACDA00] text-white"
                  : "text-[#484848] hover:bg-gray-100"
              }`}
            >
              History
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 