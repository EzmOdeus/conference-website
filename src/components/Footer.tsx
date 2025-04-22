import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950 border-t border-indigo-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/logo.png"
                alt="شعار كلية التربية النوعية"
                className="h-14 w-auto"
              />
              <div>
                <h3 className="font-bold">المؤتمر الطلابي الأول</h3>
                <p className="text-sm text-purple-300">كلية التربية النوعية</p>
              </div>
            </div>
            <p className="text-purple-300 text-sm mb-4">
              الالتقاء - خطوات نحو التغيير
              <br />
              CONVERGENCE - STEPS TOWARDS CHANGE
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61574803049272"
                target="_blank"
                className="w-8 h-8 bg-indigo-800 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">روابط مهمة</h3>
            <ul className="space-y-2 text-purple-300">
              <li>
                <a
                  href="https://alexu.edu.eg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  موقع جامعة الإسكندرية
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61574803049272"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  البث المباشر{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-purple-300">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"
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
                <span>كلية التربية النوعية، طريق الحرية، الإسكندرية، مصر</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-yellow-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>035454313</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-yellow-400 flex-shrink-0"
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
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-indigo-800 text-center text-sm text-purple-400">
          <p>
            © {new Date().getFullYear()} المؤتمر الطلابي الأول لكلية التربية
            النوعية - جامعة الإسكندرية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;