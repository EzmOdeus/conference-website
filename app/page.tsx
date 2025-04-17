import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#1a2f5e] text-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="مؤتمر كلية التربية النوعية"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-lg font-bold">المؤتمر الطلابي الأول</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-[#e9b84f] transition-colors">
              عن المؤتمر
            </Link>
            <Link href="#speakers" className="text-sm font-medium hover:text-[#e9b84f] transition-colors">
              المتحدثون
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:text-[#e9b84f] transition-colors">
              جدول الأعمال
            </Link>
            <Link href="#venue" className="text-sm font-medium hover:text-[#e9b84f] transition-colors">
              المكان
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#e9b84f] transition-colors">
              اتصل بنا
            </Link>
          </nav>
          <Button className="bg-[#e9b84f] hover:bg-[#d9a83f] text-[#1a2f5e] font-bold">سجل الآن</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1a2f5e]/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/conference-bg.jpg')",
            filter: "brightness(0.7) saturate(1.2)",
          }}
        ></div>
        <div className="container relative z-20 h-full flex flex-col items-center justify-center text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Image src="/images/logo.png" alt="شعار المؤتمر" width={120} height={120} className="h-30 w-30" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">المؤتمر الطلابي الأول</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">لكلية التربية النوعية</h2>
          <div className="text-3xl md:text-4xl font-bold text-[#e9b84f] mb-8">الالتقاء - خطوات نحو التغيير</div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">CONVERGENCE - STEPS TOWARDS CHANGE</p>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Button className="bg-[#e9b84f] hover:bg-[#d9a83f] text-[#1a2f5e] text-lg px-8 py-6">سجل الآن</Button>
            <Button variant="outline" className="border-white text-black hover:bg-white/10 text-lg px-8 py-6">
              جدول الأعمال
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-[#e9b84f] via-[#5a9bd5] to-[#d94f70] z-20"></div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a2f5e] text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Calendar className="h-12 w-12 mb-4 text-[#e9b84f]" />
              <h3 className="text-xl font-bold mb-2">التاريخ</h3>
              <p className="text-lg">٢٢-٢٣ أبريل ٢٠٢٣</p>
            </div>
            <div className="bg-[#1a2f5e] text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <MapPin className="h-12 w-12 mb-4 text-[#e9b84f]" />
              <h3 className="text-xl font-bold mb-2">المكان</h3>
              <p className="text-lg">القاعة الزرقاء - كلية التمريض</p>
            </div>
            <div className="bg-[#1a2f5e] text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Users className="h-12 w-12 mb-4 text-[#e9b84f]" />
              <h3 className="text-xl font-bold mb-2">المشاركون</h3>
              <p className="text-lg">طلاب وأساتذة كلية التربية النوعية</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2f5e] mb-4">عن المؤتمر</h2>
            <div className="w-24 h-1 bg-[#e9b84f] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1a2f5e] mb-4">المؤتمر الطلابي الأول لكلية التربية النوعية</h3>
              <p className="text-lg mb-4 leading-relaxed text-gray-700">
                يتشرف المؤتمر الطلابي الأول لكلية التربية النوعية بجامعة الإسكندرية بدعوتكم لحضور فعالياته تحت عنوان
                "الالتقاء - خطوات نحو التغيير".
              </p>
              <p className="text-lg mb-6 leading-relaxed text-gray-700">
                يهدف المؤتمر إلى تعزيز التواصل بين الطلاب والأساتذة وتبادل الخبرات والمعارف في مجالات التربية النوعية
                المختلفة، وفتح آفاق جديدة للتطوير والابتكار.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button className="bg-[#1aقف2f5e] hover:bg-[#0a1f4e]">تحميل كتيب المؤتمر</Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/conference-hall.jpg" alt="قاعة المؤتمر" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2f5e] mb-4">المتحدثون الرئيسيون</h2>
            <div className="w-24 h-1 bg-[#e9b84f] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/speaker1.jpg"
                  alt="الأستاذ الدكتور عبد العزيز قنصوه"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2f5e] mb-2">الأستاذ الدكتور / عبد العزيز قنصوه</h3>
                <p className="text-[#5a9bd5] mb-4">رئيس جامعة الإسكندرية</p>
                <p className="text-gray-600">راعي المؤتمر</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image src="/images/speaker2.jpg" alt="الأستاذ الدكتور علي عبد المحسن" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2f5e] mb-2">الأستاذ الدكتور / علي عبد المحسن</h3>
                <p className="text-[#5a9bd5] mb-4">نائب رئيس الجامعة لشئون التعليم والطلاب</p>
                <p className="text-gray-600">راعي المؤتمر</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/speaker3.jpg"
                  alt="السيدة الأستاذ الدكتور نجدة إبراهيم ماضي"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2f5e] mb-2">السيدة الأستاذ الدكتور / نجدة إبراهيم ماضي</h3>
                <p className="text-[#5a9bd5] mb-4">عميد كلية التربية النوعية</p>
                <p className="text-gray-600">راعي المؤتمر</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2f5e] mb-4">جدول الأعمال</h2>
            <div className="w-24 h-1 bg-[#e9b84f] mx-auto"></div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-[#1a2f5e] text-white text-center">
              <h3 className="text-xl font-bold">اليوم الأول - ٢٢ أبريل ٢٠٢٣</h3>
            </div>
            <div className="divide-y">
              <div className="p-6 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#e9b84f] mr-2" />
                    <span className="text-lg font-semibold">٩:٠٠ - ١٠:٠٠</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-bold text-[#1a2f5e] mb-2">التسجيل واستقبال المشاركين</h4>
                  <p className="text-gray-600">استقبال المشاركين وتسجيل الحضور وتوزيع الحقائب</p>
                </div>
              </div>
              <div className="p-6 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#e9b84f] mr-2" />
                    <span className="text-lg font-semibold">١٠:٠٠ - ١١:٣٠</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-bold text-[#1a2f5e] mb-2">الجلسة الافتتاحية</h4>
                  <p className="text-gray-600">كلمات الافتتاح من رعاة المؤتمر</p>
                </div>
              </div>
              <div className="p-6 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#e9b84f] mr-2" />
                    <span className="text-lg font-semibold">١١:٣٠ - ١٢:٠٠</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-bold text-[#1a2f5e] mb-2">استراحة</h4>
                  <p className="text-gray-600">استراحة قهوة</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
            <div className="p-4 bg-[#1a2f5e] text-white text-center">
              <h3 className="text-xl font-bold">اليوم الثاني - ٢٣ أبريل ٢٠٢٣</h3>
            </div>
            <div className="divide-y">
              <div className="p-6 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#e9b84f] mr-2" />
                    <span className="text-lg font-semibold">٩:٣٠ - ١١:٠٠</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-bold text-[#1a2f5e] mb-2">جلسات علمية متوازية</h4>
                  <p className="text-gray-600">عرض أبحاث الطلاب في المجالات المختلفة</p>
                </div>
              </div>
              <div className="p-6 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#e9b84f] mr-2" />
                    <span className="text-lg font-semibold">١١:٠٠ - ١١:٣٠</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-bold text-[#1a2f5e] mb-2">استراحة</h4>
                  <p className="text-gray-600">استراحة قهوة</p>
                </div>
              </div>
              <div className="p-6 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#e9b84f] mr-2" />
                    <span className="text-lg font-semibold">١١:٣٠ - ١:٠٠</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-bold text-[#1a2f5e] mb-2">الجلسة الختامية</h4>
                  <p className="text-gray-600">توصيات المؤتمر وتوزيع الشهادات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-[#1a2f5e] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">سجل الآن</h2>
            <div className="w-24 h-1 bg-[#e9b84f] mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              سجل الآن للمشاركة في المؤتمر الطلابي الأول لكلية التربية النوعية وكن جزءًا من هذا الحدث المميز
            </p>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-[#1a2f5e]">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  الاسم الكامل
                </label>
                <input
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  رقم الهاتف
                </label>
                <input
                  id="phone"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="tel"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="affiliation">
                  الجهة
                </label>
                <input
                  id="affiliation"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="الجامعة / الكلية / القسم"
                />
              </div>
              <Button className="w-full bg-[#e9b84f] hover:bg-[#d9a83f] text-[#1a2f5e] font-bold py-3">تسجيل</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2f5e] mb-4">مكان المؤتمر</h2>
            <div className="w-24 h-1 bg-[#e9b84f] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
              <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.43394044763!2d29.9455566!3d31.208705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c499876f072d%3A0xd6276e4d4a94d1c1!2z2YPZhNmK2Kkg2KfZhNiq2YXYsdmK2LYg2KzYp9mF2LnYqSDYp9mE2KXYs9mD2YbYr9ix2YrYqQ!5e0!3m2!1sar!2seg!4v1744916991008!5m2!1sar!2seg"                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a2f5e] mb-4">القاعة الزرقاء - كلية التمريض</h3>
              <p className="text-lg mb-4 leading-relaxed text-gray-700">
                يقام المؤتمر في القاعة الزرقاء بكلية التمريض بجامعة الإسكندرية.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#e9b84f] mr-2 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a2f5e]">العنوان</h4>
                    <p className="text-gray-600">القاعة الزرقاء بكلية التمريض بجامعة الإسكندرية</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#e9b84f] mr-2 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a2f5e]">مواعيد المؤتمر</h4>
                    <p className="text-gray-600">٢٢-٢٣ أبريل ٢٠٢٣، من الساعة ٩ صباحًا حتى ٣ عصرًا</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2f5e] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/logo.png" alt="شعار المؤتمر" width={50} height={50} className="h-12 w-12" />
                <div>
                  <h3 className="font-bold text-lg">المؤتمر الطلابي الأول</h3>
                  <p className="text-sm text-gray-300">كلية التربية النوعية - جامعة الإسكندرية</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">الالتقاء - خطوات نحو التغيير</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-[#e9b84f] transition-colors">
                    عن المؤتمر
                  </Link>
                </li>
                <li>
                  <Link href="#speakers" className="text-gray-300 hover:text-[#e9b84f] transition-colors">
                    المتحدثون
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="text-gray-300 hover:text-[#e9b84f] transition-colors">
                    جدول الأعمال
                  </Link>
                </li>
                <li>
                  <Link href="#venue" className="text-gray-300 hover:text-[#e9b84f] transition-colors">
                    المكان
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4" id="contact">
                اتصل بنا
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>البريد الإلكتروني: conference@alexu.edu.eg</li>
                <li>الهاتف: +20 123456789</li>
                <li>العنوان: كلية التربية النوعية، جامعة الإسكندرية، مصر</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© ٢٠٢٣ المؤتمر الطلابي الأول لكلية التربية النوعية - جامعة الإسكندرية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
