// src/components/ProductHighlight.jsx
import React, { useState, useMemo } from 'react';
import imgGuHuong from '../assets/images/guhuong.jpg';
import imgLongNao from '../assets/images/longlao.jpg';
import imgNgocAm from '../assets/images/ngocam.jpg';
import imgQue from '../assets/images/que.jpg';
import imgThong from '../assets/images/thong.png';
// Dữ liệu cho 5 loại Tinh dầu mới
const PRODUCT_DATA = [
    {
        id: 1,
        title: "TINH DẦU GÙ HƯƠNG",
        english: "LITSEA CUBEBA OIL",
        description: "Tinh dầu Gù Hương có hương thơm ấm áp, dịu nhẹ, giúp thư giãn tinh thần, giảm căng thẳng và hỗ trợ giấc ngủ. Nó còn được sử dụng rộng rãi trong y học cổ truyền và làm hương liệu cao cấp.",
        facts: "Gỗ Gù Hương có mùi thơm tự nhiên rất bền, được khai thác từ thân cây Gù Hương (Xá xị) lâu năm. Đây là loại gỗ quý tại Việt Nam.",
        benefits: ["Thư giãn tinh thần", "Cải thiện giấc ngủ", "Giảm đau nhức cơ"],
        image: imgGuHuong,
    },
    {
        id: 2,
        title: "TINH DẦU LONG NÃO",
        english: "CAMPHOR OIL",
        description: "Tinh dầu Long Não có mùi thơm the mát, nồng ấm, thường được dùng để giảm đau, chống viêm, và xua đuổi côn trùng. Nó có tác dụng kích thích tuần hoàn máu và hỗ trợ điều trị cảm cúm, nghẹt mũi hiệu quả.",
        facts: "Gỗ Long Não chứa hàm lượng tinh dầu cao, được chưng cất từ thân, rễ và lá cây. Long Não là loại cây thân gỗ lớn, có nguồn gốc từ châu Á.",
        benefits: ["Chống viêm, giảm đau", "Xua đuổi côn trùng", "Thông mũi, giảm cảm"],
        image: imgLongNao,
    },
    {
        id: 3,
        title: "TINH DẦU NGỌC AM",
        english: "FOKIENIA OIL",
        description: "Tinh dầu Ngọc Am mang hương thơm độc đáo, thanh khiết, được ví như 'linh hồn của núi rừng'. Nó giúp làm sạch không khí, mang lại cảm giác tĩnh tâm và được tin dùng để tăng cường phong thủy, xua đuổi tà khí.",
        facts: "Ngọc Am là loại gỗ quý hiếm, thường mọc ở vùng núi cao phía Bắc Việt Nam. Gỗ có tinh dầu với mùi thơm đặc trưng, không bị mối mọt, thường dùng để chế tác đồ mỹ nghệ.",
        benefits: ["Thanh lọc không khí", "Mang lại cảm giác tĩnh tâm", "Tăng cường phong thủy"],
        image: imgNgocAm,
    },
    {
        id: 4,
        title: "TINH DẦU THÔNG",
        english: "PINE OIL",
        description: "Tinh dầu Thông có hương thơm tươi mát, sảng khoái của rừng. Nó được sử dụng để hỗ trợ đường hô hấp, giảm mệt mỏi và làm sạch bề mặt tự nhiên nhờ đặc tính kháng khuẩn mạnh. Hương thông giúp tăng cường sự tập trung.",
        facts: "Tinh dầu được chiết xuất từ lá, kim và nón của các loài Thông phổ biến ở miền núi phía Bắc và Tây Nguyên của Việt Nam. Cây Thông có nhựa thơm và tinh dầu giá trị cao.",
        benefits: ["Hỗ trợ hô hấp", "Tăng cường tập trung", "Kháng khuẩn tự nhiên"],
        image: imgThong,
    },
    {
        id: 5,
        title: "TINH DẦU QUẾ",
        english: "CINNAMON OIL",
        description: "Tinh dầu Quế có mùi thơm ấm áp, ngọt ngào đặc trưng. Nó giúp giữ ấm cơ thể, kích thích tuần hoàn máu và thường được dùng để xông hương vào mùa lạnh. Quế còn có đặc tính kháng nấm và khử mùi rất mạnh.",
        facts: "Quế được thu hoạch từ vỏ thân cây Quế, chủ yếu ở các vùng như Yên Bái, Quảng Nam. Vỏ Quế có chứa tinh dầu cao nhất và được coi là một trong những gia vị và dược liệu cổ nhất.",
        benefits: ["Giữ ấm cơ thể", "Kích thích tuần hoàn máu", "Khử mùi, kháng nấm"],
        image: imgQue,
    },
];

const ProductHighlight = React.forwardRef((props, ref) => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const currentProduct = PRODUCT_DATA[currentProductIndex];
    const totalProducts = PRODUCT_DATA.length;

    const handleNext = () => {
        setCurrentProductIndex(prev => (prev + 1) % totalProducts);
    };

    const handlePrev = () => {
        setCurrentProductIndex(prev => (prev - 1 + totalProducts) % totalProducts);
    };

    const handleDotClick = (index) => {
        setCurrentProductIndex(index);
    };

    return (
        <section ref={ref} id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text side */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                {/* 01, 02, 03... */}
                                <div className="text-8xl font-bold text-gray-200">
                                    0{currentProduct.id}
                                </div> 
                                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                                    {currentProduct.title}
                                </h2>
                                <p className="text-xl text-gray-500 font-light">
                                    {currentProduct.english}
                                </p>
                            </div>

                            {/* ĐẢM BẢO CHIỀU CAO ĐỒNG NHẤT CHO PHẦN MÔ TẢ */}
                            <div className="min-h-[120px] flex items-center"> 
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {currentProduct.description}
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                                    MUA NGAY
                                </button>
                                <button className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                                    KHÁM PHÁ
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 pt-8">
                                <div className="min-h-[140px]">
                                    <h3 className="text-sm font-bold text-gray-900 mb-3">
                                        Đặc Tính & Sự Thật
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {currentProduct.facts}
                                    </p>
                                </div>
                                <div className="min-h-[140px]">
                                    <h3 className="text-sm font-bold text-gray-900 mb-3">
                                        Lợi Ích Chính
                                    </h3>
                                    <div className="space-y-1">
                                        {currentProduct.benefits.map((benefit, index) => (
                                            <p key={index} className="text-sm text-gray-600 leading-relaxed flex items-center gap-1">
                                                <i className="ri-check-line text-teal-600"></i> {benefit}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image side */}
                        <div className="relative">
                            <div className="relative">
                                {/* ... các thông tin trang trí tĩnh (9.6M, Khách Hàng) giữ nguyên ... */}

                                <div className="relative z-10 w-full h-[600px]">
                                    <img
                                        alt={currentProduct.title}
                                        className="w-full h-full object-contain object-center transition-opacity duration-300"
                                        src={currentProduct.image}
                                    />
                                </div>

                                {/* ... các thông tin trang trí tĩnh khác giữ nguyên ... */}
                            </div>
                        </div>
                    </div>

                    {/* Slider controls (sử dụng State và hàm Next/Prev) */}
                    <div className="flex items-center justify-between mt-16">
                        <button 
                            onClick={handlePrev}
                            className="text-gray-900 font-semibold hover:text-teal-600 transition-colors cursor-pointer flex items-center gap-2 disabled:opacity-50"
                            disabled={currentProductIndex === 0}
                        >
                            <i className="ri-arrow-left-line text-xl" /> PREV
                        </button>

                        <div className="flex gap-3">
                            {PRODUCT_DATA.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    aria-label={`Đến sản phẩm ${index + 1}`}
                                    className={`w-3 h-3 rounded-full transition-all cursor-pointer 
                                        ${index === currentProductIndex ? 'bg-teal-600 w-8' : 'bg-gray-300'}`
                                    }
                                />
                            ))}
                        </div>

                        <button 
                            onClick={handleNext}
                            className="text-gray-900 font-semibold hover:text-teal-600 transition-colors cursor-pointer flex items-center gap-2 disabled:opacity-50"
                            disabled={currentProductIndex === totalProducts - 1}
                        >
                            NEXT <i className="ri-arrow-right-line text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ProductHighlight;