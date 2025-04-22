import React from 'react';
import { Clock } from 'lucide-react';

interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  description?: string;
  location: string;
  type: 'opening' | 'session' | 'break' | 'panel' | 'closing';
}

const Schedule: React.FC = () => {
  const scheduleItems: ScheduleItem[] = [
    {
      id: 1,
      time: "09:00 - 10:00",
      title: "تسجيل الحضور",
      description: "استقبال المشاركين وتسجيل الحضور",
      location: "مدخل القاعة الرئيسية",
      type: "opening",
    },
    {
      id: 2,
      time: "10:00 - 11:00",
      title: "افتتاح المعرض",
      location: "القاعة الرئيسية",
      type: "opening",
    },
    {
      id: 3,
      time: "11:00 ",
      title: "اقتتاح المؤتمر",
      location: "القاعة الرئيسية",
      type: "opening",
    },
    {
      id: 4,
      time: "11:25 - 11:10",
      title: "الفيديو التعريفي",
      location: "القاعة الرئيسية",
      type: "session",
    },
    {
      id: 5,
      time: "11:40 - 11:25",
      title: "الكلمات",
      description: "ا.د جيهان ابو الخير وكيل الكلية لشئون التعليم والطلاب",
      location: "قاعة قسم التربية الموسيقية",
      type: "session",
    },
    {
      id: 6,
      time: "13:30 - 14:30",
      title: "حلقة نقاش - متطلبات سوق العمل والتعليم النوعي",
      description:
        "جلسة حوارية تجمع الطلاب والأساتذة وممثلين عن سوق العمل لمناقشة التحديات والفرص",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 7,
      time: "14:30 - 15:00",
      title: "الجلسة الختامية والتوصيات",
      description: "إعلان توصيات المؤتمر والخطوات المستقبلية",
      location: "القاعة الرئيسية",
      type: "closing",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'opening':
        return 'border-green-500 bg-green-500/10';
      case 'session':
        return 'border-yellow-500 bg-yellow-500/10';
      case 'break':
        return 'border-purple-500 bg-purple-500/10';
      case 'panel':
        return 'border-blue-500 bg-blue-500/10';
      case 'closing':
        return 'border-red-500 bg-red-500/10';
      default:
        return 'border-gray-500 bg-gray-500/10';
    }
  };

  return (
    <section
      id="schedule"
      className="py-16 bg-gradient-to-b from-indigo-950/50 to-purple-900/50 relative"
    >
      <div className="absolute inset-0 diagonal-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">جدول الأعمال</h2>
          <p className="text-lg text-purple-200">
            من الساعة٩  صباحًا وحتى ٣ مساءً
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-indigo-800"></div>

            <div className="space-y-8">
              {scheduleItems.map((item) => (
                <div
                  key={item.id}
                  className="relative flex items-start gap-8 group"
                >
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full bg-indigo-950 border-2 ${getTypeColor(
                      item.type
                    )} flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110`}
                  >
                    <Clock className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800 shadow-lg transition-all duration-300 group-hover:bg-indigo-900/50">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="px-3 py-1 bg-indigo-800 rounded-full text-sm font-medium">
                        {item.time}
                      </span>
                    </div>
                    <p className="mb-3 text-purple-200">{item.description}</p>
                    <div className="flex items-center text-sm text-yellow-400">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;