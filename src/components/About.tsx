import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 to-purple-900/50 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">عن المؤتمر</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-indigo-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-800 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">المؤتمر الطلابي الأول</h3>
                <p className="text-lg text-yellow-400">كلية التربية النوعية</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-purple-300">قرار إنشاء</span>
                <span className="font-bold">180 / 2018 - 7 - 30</span>
              </div>
            </div>
            
            <p className="mb-6 text-lg leading-relaxed">
              يعد هذا المؤتمر الأول من نوعه الذي يقام برعاية كلية التربية النوعية بجامعة الإسكندرية، ويهدف إلى إيجاد منصة للطلاب لمناقشة متطلباتهم وتطلعاتهم واحتياجاتهم، وربط التأهيل الفني بسوق العمل.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed">
              يركز المؤتمر على محاور متعددة تشمل العلاج بالفن، والذكاء الاصطناعي، وأثرهما على سوق العمل، بالإضافة إلى استكشاف آفاق جديدة في مجالات الموسيقى والتكنولوجيا والاقتصاد المنزلي.
            </p>
            
            <div className="flex gap-4 mt-8">
              <div className="flex flex-col items-center bg-indigo-800/50 backdrop-blur-sm p-4 rounded-lg flex-1">
                <span className="text-3xl font-bold mb-2">٥</span>
                <span className="text-sm">محاور رئيسية</span>
              </div>
              <div className="flex flex-col items-center bg-indigo-800/50 backdrop-blur-sm p-4 rounded-lg flex-1">
                <span className="text-3xl font-bold mb-2">٦</span>
                <span className="text-sm">أهداف استراتيجية</span>
              </div>
              <div className="flex flex-col items-center bg-indigo-800/50 backdrop-blur-sm p-4 rounded-lg flex-1">
                <span className="text-3xl font-bold mb-2">٥</span>
                <span className="text-sm">تخصصات مستهدفة</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="صورة المؤتمر" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 max-w-xs bg-purple-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-700">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">الفئة المستهدفة</h3>
              <p className="text-white">
                طلاب كلية التربية النوعية بكافة التخصصات (الاقتصاد المنزلي، التربية الفنية، التربية الموسيقية، تكنولوجيا التعليم) بالإضافة إلى العلوم التربوية والنفسية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;