import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="pt-24 text-center md:pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-950/80 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-cover bg-no-repeat mix-blend-overlay opacity-30 z-[-1]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  items-center">
          <div
            className={`transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex flex-wrap gap-4 mb-6 justify-center">
              <div className="flex items-center gap-2 bg-purple-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="text-yellow-400" size={16} />
                <span className="text-sm">22-23 أبريل 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="text-yellow-400" size={16} />
                <span className="text-sm">٩ صباحًا - ٣ مساءً</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="text-yellow-400" size={16} />
                <span className="text-sm">
                  القاعة الزرقاء بكلية التمريض بجامعة الإسكندرية
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              المؤتمر الطلابي الأول
              <br />
              <span className="text-3xl md:text-4xl">
                لكلية التربية النوعية
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl mb-6 font-bold text-yellow-400 mt-4">
              الالتقاء - خطوات نحو التغيير
            </h2>

            <p className="text-xl mb-8 text-purple-100 max-w-xl">
              CONVERGENCE - STEPS TOWARDS CHANGE
            </p>

            <div className="flex flex-wrap  justify-center gap-4">
              <a
                href="#registration"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-purple-900 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
              >
                سجل الآن
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-purple-800/50 backdrop-blur-sm hover:bg-purple-800 border border-purple-700 rounded-lg font-bold transition-all"
              >
                اكتشف المزيد
              </a>
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-700 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative w-72 mb-10 h-72 md:w-96 md:h-80">
              <img
                src="/conference-hall.png"
                alt="شعار كلية التربية النوعية"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="animate-bounce">
            <a
              href="#about"
              className="inline-block rounded-full p-2 bg-purple-800/50 backdrop-blur-sm hover:bg-purple-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;