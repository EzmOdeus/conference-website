import React from 'react';

interface Patron {
  id: number;
  name: string;
  title: string;
  role: string;
  image: string;
}

const Patrons: React.FC = () => {
  const patrons: Patron[] = [
    {
      id: 1,
      name: "الأستاذ الدكتور / عبد العزيز قنصوه",
      title: "رئيس جامعة الإسكندرية",
      role: "راعي المؤتمر",
      image: "/IMG_4703.jpeg",
    },
    {
      id: 2,
      name: "الأستاذ الدكتور / علي عبد المحسن",
      title: "نائب رئيس الجامعة لشئون التعليم والطلاب",
      role: "داعم المؤتمر",
      image: "/f47a6cde-c50b-4be5-ac01-8f532d80cff8.jpg",
    },
    {
      id: 3,
      name: "الأستاذ الدكتور / سعيد محمد علام",
      title: "نائب رئيس الجامعة لشئون خدمة المجتمع وتنمية البيئة",
      role: "داعم المؤتمر",
      image: "/70429526872202503200337523752.jpg",
    },
    {
      id: 4,
      name: "الأستاذ الدكتور / نجدة إبراهيم ماضي",
      title: "عميد كلية التربية النوعية",
      role: "رئيس عام المؤتمر",
      image: "/WhatsApp Image 2025-04-19 at 5.00.10 PM.jpeg",
    },
    {
      id: 5,
      name: "الأستاذ الدكتور / جيهان فاروق أبو الخير",
      title: "وكيل الكلية لشئون التعليم والطلاب",
      role: "نائب رئيس عام المؤتمر",
      image: "/WhatsApp Image 2025-04-21 at 8.03.14 PM.jpeg",
    },
    {
      id: 6,
      name: "الدكتور / أميرة يحيى زيتون",
      title: "الأستاذ المساعد بقسم العلوم التربوية والنفسية",
      role: "أمين المؤتمر",
      image: "/WhatsApp Image 2025-04-21 at 8.05.28 PM.jpeg",
    },
  ];

  return (
    <section id="patrons" className="py-16 bg-gradient-to-b from-purple-900/50 to-indigo-950/50 relative">
      <div className="absolute inset-0 diagonal-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">برعاية</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patrons.map((patron) => (
            <div key={patron.id} className="patron-card group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={patron.image} 
                  alt={patron.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent"></div>
                <div className="absolute bottom-3 right-3 bg-yellow-500 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                  {patron.role}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{patron.name}</h3>
              <p className="text-purple-200">{patron.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patrons;