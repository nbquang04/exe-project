// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = React.forwardRef((props, ref) => { 
    return (
        <section
            // GÁN REF: Gán ref đã nhận được vào phần tử DOM gốc (thẻ <section>)
            ref={ref} 
            id="hero"
            className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url("https://readdy.ai/api/search-image?query=serene%20natural%20forest%20landscape%20with%20lush%20green%20trees%20misty%20mountains%20and%20soft%20morning%20sunlight%20filtering%20through%20leaves%20creating%20peaceful%20atmosphere%20perfect%20for%20essential%20oils%20natural%20wellness%20products%20background%20with%20gentle%20earth%20tones%20and%20calming%20ambiance&width=1920&height=1080&seq=hero-bg-001&orientation=landscape")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Tinh Dầu Thiên Nhiên
                </h1>
                <p className="text-xl md:text-2xl text-white/95 mb-4 font-light">
                    Tinh túy từ thiên nhiên, chăm sóc sức khỏe toàn diện
                </p>
                <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                    Khám phá bộ sưu tập tinh dầu nguyên chất được chiết xuất từ những
                    loại gỗ quý hiếm, mang đến sự thư giãn và cân bằng cho cơ thể và tâm
                    hồn
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Bạn có thể thêm sự kiện cuộn cho nút này (ví dụ: cuộn đến 'sanpham') */}
                    <button className="px-8 py-4 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">
                        Khám phá sản phẩm
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/30 cursor-pointer whitespace-nowrap">
                        Liên hệ tư vấn
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <i className="ri-arrow-down-line text-3xl text-white/80" />
            </div>
        </section>
    );
});

export default HeroSection;