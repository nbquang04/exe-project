// src/App.jsx
import React, { useRef, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductHighlight from './components/ProductHighLight';
import ProcessSection from './components/ProcessSection';
import OriginSection from './components/OriginSection';
import GuideSection from './components/GuideSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  // Khai báo Refs cho tất cả các Sections
  const heroRef = useRef(null);
  const productRef = useRef(null);
  const processRef = useRef(null);
  const originRef = useRef(null);
  const guideRef = useRef(null);
  const contactRef = useRef(null);

  // Map tên section (key) với Ref (value)
  const sectionRefs = useMemo(() => ({
    trangchu: heroRef,
    sanpham: productRef,
    quytrinh: processRef,
    nguongoc: originRef,
    huongdan: guideRef,
    lienhe: contactRef, // Key cho ContactSection
  }), []);

  // Hàm xử lý cuộn trang
  const scrollToSection = (sectionName) => {
    const ref = sectionRefs[sectionName];

    if (ref && ref.current) {
      // Chiều cao của Navbar (ví dụ: 90px)
      const HEADER_HEIGHT = 80;

      const yOffset = -HEADER_HEIGHT;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    // Thêm padding-top cho App để tránh Navbar FIXED che mất nội dung
    <div className="min-h-screen pt-[80px]">

      {/* Truyền hàm cuộn vào Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Gán Refs cho các Sections */}
      <HeroSection ref={heroRef} />
      <ProductHighlight ref={productRef} />
      <ProcessSection ref={processRef} />
      <OriginSection ref={originRef} />
      <GuideSection ref={guideRef} />
      <ContactSection ref={contactRef} /> {/* Gán ref cuối cùng */}
      <Footer />
    </div>
  );
}

export default App;