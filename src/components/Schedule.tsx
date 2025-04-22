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
      description:
        "ا.د جيهان ابو الخير \nوكيل الكلية لشئون التعليم والطلاب  \nنائب رئيس عام المؤتمر \n ا.د نجدة ماضي\n  عميد الكلية\nرئيس عام المؤتمر\n ا.د علي عبد المحسن \nنائب رئيس الجامعة لشئون التعليم والطلاب\n ",
      location: "القاعة الرئيسية",
      type: "session",
    },
    {
      id: 6,
      time: "11:40 - 12:00",
      title: "كلمات الضيوف",
      description:
        "ا.د سامية الشيخ \nاستاذ النسيج بكلية التربية الفنية - جامعة حلوان\n prof Cristian A.Zaelzer \n Assistant Professor \n Department of Design and Computation Arts\nConcordia University",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 7,
      time: "12:00 - 12:30",
      title: "كلمات المشاركين من المجتمع",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 8,
      time: "12:30 - 1:00",
      title: "عرض للأبحاث المشتركة لجميع الأقسام العلمية",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 9,
      time: "1:00 - 1:30",
      title: "التكريم",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 10,
      time: "1:30 - 3:00",
      title: "الختام والحفل الموسيقي",
      location: "القاعة الرئيسية",
      type: "closing",
    },
  ];
  const scheduleItems2: ScheduleItem[] = [
    {
      id: 1,
      time: "10:00 - 10:30",
      title: " ورشة العمل مع Prof. Cristian A. Zaelzer",
      location: " القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 2,
      time: "10:30 - 11:00",
      title: "عرض الأبحاث الطلابية لقسم التربية الفنية",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 3,
      time: "11:00 - 11:30",
      title: "عرض الأبحاث الطلابية لقسم الاقتصاد المنزلي",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 4,
      time: "11:30 - 12:00",
      title: "عرض الأبحاث الطلابية لقسم التربية الموسيقية",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 5,
      time: "12:00 - 12:30",
      title: " عرض الأبحاث الطلابية لقسم تكنولوجيا التعليم",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 6,
      time: "12:30 - 1:00",
      title: "عرض الأبحاث الطلابية لقسم العلوم التربوية والنفسية",
      location: "القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 7,
      time: "10:30 - 11:00",
      title: "ورشة العلوم التربوية والنفسية",
      location: "امام القاعة الرئيسية ",
      type: "panel",
    },
    {
      id: 8,
      time: "11:00 - 11:30",
      title: "ورشة الاقتصاد المنزلي",
      location: "امام القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 9,
      time: "11:30 - 12:00",
      title: "ورشة التربية الموسيقية",
      location: "امام القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 10,
      time: "12:00 - 12:30",
      title: "ورشة التربية الفنية",
      location: "امام القاعة الرئيسية",
      type: "panel",
    },
    {
      id: 11,
      time: "1:00 - 1:30",
      title: "التوصيات وتسليم الشهادات",
      location: "امام القاعة الرئيسية",
      type: "panel",
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
          <h2 className="section-title"> جدول الأعمال اليوم الاول</h2>
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
                    <p className="mb-3 text-purple-200"><pre>{item.description}</pre></p>
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
      <div className="container mx-auto px-4 pt-5 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title"> جدول الأعمال اليوم الثاني</h2>
          <p className="text-lg text-purple-200">
            من الساعة ٩  صباحًا وحتى 1.30 مساءً
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-indigo-800"></div>

            <div className="space-y-8">
              {scheduleItems2.map((item) => (
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
                    <p className="mb-3 text-purple-200"><pre>{item.description}</pre></p>
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