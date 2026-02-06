/* eslint-disable no-unused-vars */
import { Menu, X } from "lucide-react";
import BangladeshIcon from "../components/BangladeshIcon";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "Active Polls",
    "Candidates",
    "Surveys",
    "Results",
    "How it works",
    "Login",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
          <div className="p-1 transition-transform group-hover:scale-110 duration-300">
            <BangladeshIcon size={8} />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`text-xl sm:text-2xl md:text-3xl font-serif font-black tracking-tighter transition-colors duration-300 ${
                scrolled ? "text-[#006A4E]" : "text-slate-900"
              }`}
            >
              VOTE
              <span className={scrolled ? "text-slate-700" : "text-[#006A4E]"}>
                VOICE
              </span>
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm sm:text-base font-semibold transition-all duration-300 hover:text-green-700 ${
                scrolled ? "text-gray-700" : "text-slate-800"
              }`}
            >
              {item}
            </a>
          ))}
          <button
            className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
              scrolled
                ? "bg-green-700 text-white hover:bg-green-800 shadow-sm"
                : "bg-white/20 backdrop-blur-sm border border-slate-900/20 text-slate-900 hover:bg-slate-900 hover:text-white"
            }`}
          >
            Start a Poll
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors focus:outline-none ${
            scrolled ? "text-gray-900" : "text-slate-900"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg sm:text-xl font-medium text-gray-800 hover:text-green-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-green-700 text-white py-3 sm:py-3.5 rounded-lg font-semibold active:scale-95 transition-transform text-base sm:text-lg">
                Start a Poll
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
