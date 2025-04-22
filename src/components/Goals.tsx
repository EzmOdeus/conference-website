import React from 'react';

interface Goal {
  id: number;
  title: string;
  description: string;
}

const Goals: React.FC = () => {
  const goals: Goal[] = [
    {
      id: 1,
      title: "مناقشة متطلبات الطلاب وتحديد توقعاتهم واحتياجاتهم",
      description: "تهدف إلى فهم احتياجات الطلاب الأكاديمية والمهنية وتوقعاتهم من سوق العمل."
    },
    {
      id: 2,
      title: "التأهيل بالفن وارتباطه بسوق العمل",
      description: "ربط المهارات الفنية بمتطلبات سوق العمل وتطوير قدرات الطلاب في هذا المجال."
    },
    {
      id: 3,
      title: "مواكبة المتغيرات والمستحدثات في سوق العمل",
      description: "تحليل التطورات الحديثة في سوق العمل وتأثيرها على مختلف التخصصات."
    },
    {
      id: 4,
      title: "اكتشاف القدرات والطاقات التي يمتلكها الطلاب",
      description: "تعزيز اكتشاف المواهب وتنمية القدرات لدى الطلاب وتوجيهها بالشكل الأمثل."
    },
    {
      id: 5,
      title: "استثمار دور الطالب لخدمة المجتمع المحلي وتعزيز التواصل الاجتماعي",
      description: "توظيف مهارات الطلاب في خدمة المجتمع المحلي وتعزيز دورهم الاجتماعي."
    },
    {
      id: 6,
      title: "تفعيل العلاقة بين الدراسة النظرية ومتطلبات سوق العمل",
      description: "سد الفجوة بين التعليم النظري والتطبيق العملي في سوق العمل."
    }
  ];

  return (
    <section id="goals" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">أهداف المؤتمر</h2>
          <p className="text-lg text-purple-200">Conference Goals</p>
        </div>
        
        <div className="space-y-6">
          {goals.map((goal) => (
            <div key={goal.id} className="goal-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-800 text-yellow-400 font-bold rounded-full flex-shrink-0">
                  {goal.id}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{goal.title}</h3>
                  <p className="text-purple-200">{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;