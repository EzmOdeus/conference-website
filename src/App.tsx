import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Patrons from "./components/Patrons";
import Topics from "./components/Topics";
import Goals from "./components/Goals";
import Schedule from "./components/Schedule";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import { Calendar, CalendarClock, ChevronUp, Clock, MapPin } from "lucide-react";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 text-white relative">
      <Navbar />
      <Hero />
      <About />
      <Patrons />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <Topics />
        <Goals />
      </div>
      <Schedule />
      <div className="container justify-center items-center mx-auto px-4 py-10">
        <div className="grid grid-cols-1 justify-center items-center py-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className=" relative">
              <img src="/1.jpg" alt="bannner" className="object-contain" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className=" relative">
              <img src="/2.jpg" alt="bannner" className="object-contain" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className=" relative">
              <img src="/3.jpg" alt="bannner" className="object-contain" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className=" relative">
              <img src="/4.jpg" alt="bannner" className="object-contain" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className=" relative">
              <img src="/5.jpg" alt="bannner" className="object-contain" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className=" relative h-[35rem]">
              <img
                src="/conference-bg - Copy.jpg"
                alt="bannner"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Registration />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.43394044763!2d29.9455566!3d31.208705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c499876f072d%3A0xd6276e4d4a94d1c1!2z2YPZhNmK2Kkg2KfZhNiq2YXYsdmK2LYg2KzYp9mF2LnYqSDYp9mE2KXYs9mD2YbYr9ix2YrYqQ!5e0!3m2!1sar!2seg!4v1744916991008!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#fffff] mb-4">
            القاعة الزرقاء - كلية التمريض
          </h3>
          <p className="text-lg mb-4 leading-relaxed text-gray-100">
            يقام المؤتمر في القاعة الزرقاء بكلية التمريض بجامعة الإسكندرية.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-[#e9b84f] mr-2 mt-1" />
              <div>
                <h4 className="font-bold text-[#fffff]">العنوان</h4>
                <p className="text-gray-50">
                  القاعة الزرقاء بكلية التمريض بجامعة الإسكندرية
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-[#e9b84f] mr-2 mt-1" />
              <div>
                <h4 className="font-bold text-[#fffff]">مواعيد المؤتمر</h4>
                <p className="text-gray-50">
                  ٢٢-٢٣ أبريل ٢٠٢٣، من الساعة ٩ صباحًا حتى ٣ عصرًا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <div className="fixed text-center bottom-10 left-10 flex items-center  p-3 bg-purple-800/60 backdrop-blur-sm rounded-lg opacity-90 z-20 shadow-lg">
        <div className="">
          {" "}
          <div className="flex mb-3 gap-4">
            {" "}
            <Calendar className="text-yellow-400" size={24} />
            <span className="font-bold">22-23 أبريل 2025</span>
          </div>
          <div className="flex  gap-4">
            <CalendarClock className="text-yellow-400" size={24} />
            <span className="font-bold"> ٩ صباحًا - ٣ مساءً</span>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-yellow-500 hover:bg-yellow-400 p-3 rounded-full shadow-lg transition-all duration-300 z-20"
        >
          <ChevronUp />
        </button>
      )}
    </div>
  );
}

export default App;
