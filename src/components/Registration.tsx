import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="registration" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-indigo-950/50 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">التسجيل</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            سجل الآن للمشاركة في المؤتمر الطلابي الأول لكلية التربية النوعية
            واستفد من فرصة التواصل مع الخبراء والمختصين في مجالك
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <div className="bg-indigo-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-800 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">معلومات التسجيل</h3>
              
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">تم التسجيل بنجاح!</h4>
                  <p className="text-purple-200">
                    شكراً لتسجيلك في المؤتمر. سيتم التواصل معك قريباً بتفاصيل المشاركة عبر البريد الإلكتروني.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">الاسم بالكامل</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-indigo-950/50 border border-indigo-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-indigo-950/50 border border-indigo-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">رقم الهاتف</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-indigo-950/50 border border-indigo-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium mb-1">القسم العلمي</label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-indigo-950/50 border border-indigo-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">اختر القسم</option>
                        <option value="home_economics">الاقتصاد المنزلي</option>
                        <option value="art_education">التربية الفنية</option>
                        <option value="music_education">التربية الموسيقية</option>
                        <option value="education_tech">تكنولوجيا التعليم</option>
                        <option value="psychology">العلوم التربوية والنفسية</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="academic_year" className="block text-sm font-medium mb-1">السنة الدراسية</label>
                    <select
                      id="academic_year"
                      name="academic_year"
                      value={formData.academic_year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-indigo-950/50 border border-indigo-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">اختر السنة الدراسية</option>
                      <option value="first">الفرقة الأولى</option>
                      <option value="second">الفرقة الثانية</option>
                      <option value="third">الفرقة الثالثة</option>
                      <option value="fourth">الفرقة الرابعة</option>
                      <option value="postgrad">دراسات عليا</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="expectations" className="block text-sm font-medium mb-1">ما الذي تتوقع الاستفادة منه في المؤتمر؟</label>
                    <textarea
                      id="expectations"
                      name="expectations"
                      value={formData.expectations}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-indigo-950/50 border border-indigo-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-purple-900 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-purple-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>جاري التسجيل...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>تسجيل</span>
                        </>
                        )}
                  </button>
                </form>
              )}
            </div> */}

            <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                مميزات المشاركة
              </h3>
              <ul className="space-y-3 list-disc list-inside text-purple-200">
                <li>فرصة للتفاعل مع أساتذة وخبراء في مجال تخصصك</li>
                <li>ورش عمل تطبيقية ومحاضرات متخصصة</li>
                <li>التعرف على متطلبات سوق العمل في مجالك</li>
                <li>شهادة حضور معتمدة من الكلية</li>
                <li>مواد تعليمية وتدريبية قيمة</li>
                <li>فرص للتواصل وتبادل الخبرات مع الزملاء</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  معلومات المؤتمر
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-yellow-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <span className="block font-medium">التاريخ</span>
                      <span className="text-purple-200">22-23 أبريل 2025</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-yellow-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <span className="block font-medium">الوقت</span>
                      <span className="text-purple-200">
                        من الساعة ٩ صباحًا وحتى ٣ مساءً
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-yellow-400 flex-shrink-0"
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
                    <div>
                      <span className="block font-medium">المكان</span>
                      <span className="text-purple-200">
                        كلية التربية النوعية - جامعة الإسكندرية
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30 shadow-lg">
                <h3 className="text-lg font-bold mb-2">للاستفسارات والتواصل</h3>
                <p className="text-purple-200 mb-3">
                  لمزيد من المعلومات، يرجى التواصل عبر:
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>conference@alexu.edu.eg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;