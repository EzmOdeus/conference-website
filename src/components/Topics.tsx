import React from 'react';

interface Topic {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Topics: React.FC = () => {
  const topics: Topic[] = [
    {
      id: 1,
      title: "العلاج بالفن - سوق العمل - الذكاء الاصطناعي",
      description: "استكشاف العلاقة بين العلاج بالفن وتطبيقاته في سوق العمل بالاستفادة من تقنيات الذكاء الاصطناعي.",
      icon: "🎨"
    },
    {
      id: 2,
      title: "الذكاء الاصطناعي ومتطلبات سوق العمل في مجال الاقتصاد المنزلي",
      description: "دراسة تأثير الذكاء الاصطناعي على مجالات الاقتصاد المنزلي وكيفية الاستفادة منه في تطوير المهارات المطلوبة لسوق العمل.",
      icon: "🏠"
    },
    {
      id: 3,
      title: "الموسيقى وآفاق جديدة في سوق العمل",
      description: "استكشاف الفرص الجديدة والمبتكرة في مجال الموسيقى وكيفية الاستفادة منها في سوق العمل المعاصر.",
      icon: "🎵"
    },
    {
      id: 4,
      title: "التكنولوجيا والذكاء الاصطناعي وإعادة تشكيل سوق العمل",
      description: "دراسة التحولات الجذرية التي تحدثها التكنولوجيا والذكاء الاصطناعي في سوق العمل وكيفية التكيف معها.",
      icon: "💻"
    },
    {
      id: 5,
      title: "البعد التربوي والنفسي في سوق العمل (الاحتياجات الخاصة)",
      description: "مناقشة الجوانب التربوية والنفسية المرتبطة بسوق العمل، خاصة فيما يتعلق بذوي الاحتياجات الخاصة وكيفية دمجهم في سوق العمل.",
      icon: "⚕️"
    }
  ];

  return (
    <section id="topics" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">محاور المؤتمر</h2>
          <p className="text-lg text-purple-200">Conference Topics</p>
        </div>
        
        <div className="space-y-6">
          {topics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{topic.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">المحور {topic.id}:</h3>
                  <h4 className="text-lg font-bold mb-2">{topic.title}</h4>
                  <p className="text-purple-200">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;