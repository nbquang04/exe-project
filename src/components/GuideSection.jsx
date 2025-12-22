// src/components/GuideSection.jsx
import React, { useState, useMemo } from 'react';

// Định nghĩa dữ liệu cho tab "Lưu ý quan trọng"
const IMPORTANT_NOTES = [
    {
        icon: "ri-alert-line",
        title: "Pha loãng trước khi sử dụng",
        content: "Tinh dầu nguyên chất có nồng độ cao, cần pha loãng với dầu nền trước khi thoa lên da để tránh kích ứng.",
    },
    {
        icon: "ri-test-tube-line",
        title: "Test thử trên da",
        content: "Thử một lượng nhỏ trên cánh tay trước khi sử dụng rộng rãi để kiểm tra phản ứng dị ứng.",
    },
    {
        icon: "ri-eye-off-line",
        title: "Tránh tiếp xúc với mắt",
        content: "Không để tinh dầu tiếp xúc trực tiếp với mắt và niêm mạc. Nếu dính vào mắt, rửa ngay bằng nước sạch.",
    },
    {
        icon: "ri-archive-line",
        title: "Bảo quản đúng cách",
        content: "Để tinh dầu ở nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp. Đậy nắp kín sau mỗi lần sử dụng.",
    },
    {
        icon: "ri-parent-line",
        title: "Phụ nữ mang thai",
        content: "Phụ nữ có thai hoặc cho con bú nên tham khảo ý kiến bác sĩ trước khi sử dụng tinh dầu.",
    },
    {
        icon: "ri-user-smile-line",
        title: "Trẻ em dưới 3 tuổi",
        content: "Không sử dụng tinh dầu cho trẻ em dưới 3 tuổi. Với trẻ lớn hơn, giảm liều lượng xuống một nửa.",
    },
];

// Định nghĩa dữ liệu cho tab "Cách sử dụng" (từ code cũ của bạn)
const USAGE_GUIDES = [
    {
        alt: "Xông hơi thư giãn",
        src: "https://readdy.ai/api/search-image?query=modern%20essential%20oil%20diffuser%20releasing%20aromatic%20mist%20in%20peaceful%20room%20with%20soft%20lighting%20and%20plants%20creating%20relaxing%20spa%20like%20atmosphere%20lifestyle%20photography%20style&width=600&height=400&seq=usage-001&orientation=landscape",
        iconClass: "ri-mist-line",
        title: "Xông hơi thư giãn",
        content: "Thêm 3-5 giọt tinh dầu vào máy khuếch tán hoặc bát nước nóng. Hít thở sâu để hương thơm lan tỏa trong không gian, giúp thư giãn tinh thần và thanh lọc không khí.",
    },
    {
        alt: "Massage thư giãn",
        src: "https://readdy.ai/api/search-image?query=spa%20massage%20therapy%20with%20essential%20oils%20in%20bottles%20and%20natural%20ingredients%20on%20wooden%20tray%20with%20soft%20towels%20and%20candles%20creating%20peaceful%20wellness%20atmosphere%20spa%20photography%20style&width=600&height=400&seq=usage-002&orientation=landscape",
        iconClass: "ri-hand-heart-line",
        title: "Massage thư giãn",
        content: "Pha loãng 2-3 giọt tinh dầu với 10ml dầu nền (dầu dừa, dầu jojoba). Massage nhẹ nhàng lên da để thư giãn cơ bắp, giảm căng thẳng và dưỡng da.",
    },
    {
        alt: "Tắm thư giãn",
        src: "https://readdy.ai/api/search-image?query=luxurious%20bathtub%20with%20essential%20oil%20drops%20creating%20ripples%20in%20warm%20water%20surrounded%20by%20candles%20and%20natural%20elements%20creating%20spa%20like%20relaxation%20atmosphere%20lifestyle%20photography%20style&width=600&height=400&seq=usage-003&orientation=landscape",
        iconClass: "ri-drop-line",
        title: "Tắm thư giãn",
        content: "Thêm 5-8 giọt tinh dầu vào bồn tắm nước ấm. Ngâm mình trong 15-20 phút để thư giãn toàn thân, giảm stress và cải thiện giấc ngủ.",
    },
    {
        alt: "Chăm sóc da mặt",
        src: "https://readdy.ai/api/search-image?query=skincare%20routine%20with%20essential%20oil%20dropper%20and%20natural%20beauty%20products%20on%20clean%20white%20surface%20with%20fresh%20flowers%20and%20soft%20natural%20lighting%20beauty%20photography%20style&width=600&height=400&seq=usage-004&orientation=landscape",
        iconClass: "ri-heart-pulse-line",
        title: "Chăm sóc da mặt",
        content: "Pha 1-2 giọt tinh dầu với kem dưỡng hoặc serum. Thoa đều lên da mặt sau khi làm sạch để dưỡng da, chống lão hóa và cải thiện làn da.",
    },
];

const GuideSection = React.forwardRef((props, ref) => {
    
    // State quản lý tab đang hoạt động: 'usage' hoặc 'notes'
    const [activeTab, setActiveTab] = useState('usage');

    // Logic để render nội dung dựa trên tab hoạt động
    const renderContent = () => {
        if (activeTab === 'usage') {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {USAGE_GUIDES.map((guide, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="relative w-full h-64 overflow-hidden">
                                <img
                                    alt={guide.alt}
                                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                                    src={guide.src}
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full">
                                        <i className={`${guide.iconClass} text-2xl text-teal-600`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{guide.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{guide.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else if (activeTab === 'notes') {
            return (
                // Sắp xếp layout giống như ảnh và code bạn cung cấp cho Lưu ý quan trọng
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {IMPORTANT_NOTES.map((note, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 flex items-center justify-center bg-amber-100 rounded-full mb-4">
                                <i className={`${note.icon} text-2xl text-amber-600`}></i>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{note.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{note.content}</p>
                        </div>
                    ))}
                </div>
            );
        }
    };

    return (
        <section ref={ref} id="guide" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Hướng Dẫn Sử Dụng &amp; Lưu Ý
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Tìm hiểu cách sử dụng tinh dầu đúng cách để đạt hiệu quả tốt nhất và
                        đảm bảo an toàn cho sức khỏe
                    </p>
                </div>

                {/* Thanh chuyển đổi Tab */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-100 rounded-full p-1">
                        <button 
                            onClick={() => setActiveTab('usage')}
                            className={`px-8 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap 
                                ${activeTab === 'usage' ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'}`
                            }
                        >
                            Cách sử dụng
                        </button>
                        <button 
                            onClick={() => setActiveTab('notes')}
                            className={`px-8 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap 
                                ${activeTab === 'notes' ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'}`
                            }
                        >
                            Lưu ý quan trọng
                        </button>
                    </div>
                </div>

                {/* Nội dung Tab */}
                {renderContent()}

                <div className="mt-16 bg-teal-600 rounded-2xl p-8 md:p-12 text-center">
                    {/* ... Phần Liên hệ tư vấn giữ nguyên ... */}
                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-6">
                        <i className="ri-customer-service-2-line text-3xl text-teal-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Cần tư vấn thêm?
                    </h3>
                    <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto">
                        Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn và hướng dẫn
                        bạn cách sử dụng tinh dầu phù hợp nhất với nhu cầu của bạn
                    </p>
                    <button className="px-8 py-4 bg-white text-teal-600 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                        Liên hệ ngay
                    </button>
                </div>
            </div>
        </section>
    );
});

export default GuideSection;