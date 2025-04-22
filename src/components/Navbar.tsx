import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-indigo-950/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="كلية التربية النوعية" 
              className="h-14 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold">المؤتمر الطلابي الأول</h1>
              <p className="text-sm text-purple-200">كلية التربية النوعية - جامعة الإسكندرية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <a href="#hero" className="nav-link">الرئيسية</a>
            <a href="#about" className="nav-link">عن المؤتمر</a>
            <a href="#patrons" className="nav-link">الرعاة</a>
            <a href="#topics" className="nav-link">المحاور</a>
            <a href="#schedule" className="nav-link">جدول الأعمال</a>
            <a href="#registration" className="nav-link  text-purple-900 ">  <img 
              src="/Layer 5 copy 2.png" 
              alt="كلية التربية النوعية" 
              className="h-14 w-auto"
            /></a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-950/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="#hero" className="nav-link" onClick={toggleMenu}>الرئيسية</a>
            <a href="#about" className="nav-link" onClick={toggleMenu}>عن المؤتمر</a>
            <a href="#patrons" className="nav-link" onClick={toggleMenu}>الرعاة</a>
            <a href="#topics" className="nav-link" onClick={toggleMenu}>المحاور</a>
            <a href="#schedule" className="nav-link" onClick={toggleMenu}>جدول الأعمال</a>
            <a href="#registration" className="nav-link bg-yellow-500 text-purple-900 w-full text-center" onClick={toggleMenu}>التسجيل</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;