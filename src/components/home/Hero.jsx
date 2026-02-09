/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import heroBg from "../../assets/images/electionbg.png";
import { Button } from "../../components/ui/button";
import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover
          sm:object-[20%_50%]
          md:object-[50%_50%]
          lg:object-[50%_25%]
          "
        />
      </div>
       <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F5EEDC] leading-[1.1] mb-4 sm:mb-6 drop-shadow-sm">
             আপনার কণ্ঠেই
            <br />
           <span  className="block mt-4">গড়বে আগামী বাংলাদেশ</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#FFFFFF] max-w-md sm:max-w-lg leading-relaxed mb-6 sm:mb-8">
           লাইভ গণভোটে অংশ নিন, মতামত জানান এবং সচেতন সিদ্ধান্তের অংশ হয়ে উঠুন।
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-[#006A4E] hover:bg-[#00553A] text-white border-0 shadow-lg cursor-pointer">
              প্রার্থী দেখুন
            </Button>
            <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-white/50 text-slate-900 border-white/20 hover:bg-white/10 hover:text-slate-700 backdrop-blur-sm cursor-pointer">
              ফলাফল দেখুন
            </Button>
          </div>
        </motion.div>

        {/* Right Floating Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-end"
        >
          <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl max-w-sm lg:max-w-md">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#006A4E] flex items-center justify-center text-white shadow-lg">
                <Calendar className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">আসন্ন নির্বাচন</p>
                <h3 className="text-white font-serif font-bold text-sm sm:text-xl">বাংলাদেশ ২০২৬</h3>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { label: "নির্বাচনের তারিখ", value: "১২ ফেব্রুয়ারি, ২০২৬" },
                { label: "বর্তমান অবস্থা", value: "প্রস্তুতি চলছে" }, 
                { label: "আমাদের লক্ষ্য", value: "স্বচ্ছ ও সুষ্ঠু গণতন্ত্র" }
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0 last:pb-0">
                  <span className="text-white/60 text-xs sm:text-sm">{item.label}</span>
                  <span className="text-white font-medium text-right ml-2 sm:ml-4 text-sm sm:text-base">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 pt-2 sm:pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-red-500"></span>
                </span>
                <p className="text-white/80 text-xs sm:text-sm font-medium uppercase">লাইভ আপডেট</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
