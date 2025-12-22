// src/components/ProcessSection.jsx
import React, { useState, useMemo } from 'react';
// Đảm bảo bạn vẫn đang dùng forwardRef ở đây để giữ chức năng cuộn trang
const ProcessSection = React.forwardRef((props, ref) => {

    // 1. Dữ liệu cho từng bước sản xuất
    const PROCESS_STEPS = useMemo(() => ([
        {
            id: 1,
            title: "Thu Hoạch Nguyên Liệu",
            content: "Chọn lọc và thu hoạch nguyên liệu thô từ các vùng trồng uy tín, đảm bảo chất lượng tốt nhất. Nguyên liệu được thu hoạch vào đúng thời điểm để đạt hàm lượng tinh dầu cao nhất.",
            image: "https://readdy.ai/api/search-image?query=Farmers%20carefully%20harvesting%20fresh%20aromatic%20herbs%20and%20plants%20in%20lush%20green%20organic%20farm%20field%20at%20sunrise%2C%20natural%20essential%20oil%20raw%20materials%20collection%2C%20sustainable%20agriculture%2C%20soft%20morning%20light%2C%20professional%20photography&width=800&height=600&seq=process1&orientation=landscape",
            iconClass: "ri-plant-line" // Biểu tượng cho bước 1
        },
        {
            id: 2,
            title: "Làm Sạch & Phân Loại",
            content: "Nguyên liệu được làm sạch kỹ lưỡng, loại bỏ tạp chất và phân loại theo tiêu chuẩn chất lượng nghiêm ngặt. Quá trình này đảm bảo chỉ những nguyên liệu tốt nhất được đưa vào sản xuất.",
            image: "https://readdy.ai/api/search-image?query=Workers%20in%20clean%20white%20facility%20sorting%20and%20cleaning%20fresh%20aromatic%20plant%20materials%20on%20stainless%20steel%20tables%2C%20quality%20control%20process%20for%20essential%20oil%20production%2C%20bright%20natural%20lighting%2C%20professional%20industrial%20photography&width=800&height=600&seq=process2&orientation=landscape",
            iconClass: "ri-filter-3-line" // Biểu tượng cho bước 2
        },
        {
            id: 3,
            title: "Chưng Cất Tinh Dầu",
            content: "Sử dụng phương pháp chưng cất hơi nước hiện đại để chiết xuất tinh dầu nguyên chất. Nhiệt độ và áp suất được kiểm soát chặt chẽ để bảo toàn các thành phần quý giá.",
            image: "https://readdy.ai/api/search-image?query=Modern%20steam%20distillation%20equipment%20extracting%20pure%20essential%20oils%20in%20professional%20laboratory%2C%20copper%20and%20glass%20distillation%20apparatus%20with%20aromatic%20vapor%2C%20clean%20industrial%20setting%2C%20soft%20lighting%2C%20high%20quality%20photography&width=800&height=600&seq=process3&orientation=landscape",
            iconClass: "ri-flask-line" // Biểu tượng cho bước 3
        },
        {
            id: 4,
            title: "Kiểm Tra Chất Lượng",
            content: "Mỗi mẻ tinh dầu được kiểm tra kỹ lưỡng về độ tinh khiết, hàm lượng hoạt chất và các tiêu chuẩn an toàn. Chỉ những sản phẩm đạt chuẩn mới được đóng chai.",
            image: "https://readdy.ai/api/search-image?query=Laboratory%20scientist%20in%20white%20coat%20testing%20essential%20oil%20quality%20with%20professional%20equipment%2C%20microscope%20and%20test%20tubes%20with%20amber%20liquid%20samples%2C%20modern%20clean%20lab%20environment%2C%20bright%20professional%20lighting&width=800&height=600&seq=process4&orientation=landscape",
            iconClass: "ri-microscope-line" // Biểu tượng cho bước 4
        },
        {
            id: 5,
            title: "Đóng Chai & Đóng Gói",
            content: "Tinh dầu được đóng chai trong môi trường vô trùng, sử dụng chai thủy tinh tối màu để bảo vệ khỏi ánh sáng. Mỗi chai được dán nhãn rõ ràng với đầy đủ thông tin sản phẩm.",
            image: "https://readdy.ai/api/search-image?query=Automated%20bottling%20line%20filling%20dark%20amber%20glass%20bottles%20with%20essential%20oils%20in%20clean%20modern%20facility%2C%20professional%20packaging%20process%2C%20workers%20in%20protective%20gear%2C%20bright%20industrial%20lighting%2C%20high%20quality%20photography&width=800&height=600&seq=process5&orientation=landscape",
            iconClass: "ri-archive-line" // Biểu tượng cho bước 5
        },
        {
            id: 6,
            title: "Vận Chuyển & Phân Phối",
            content: "Sản phẩm được vận chuyển trong điều kiện nhiệt độ phù hợp, đảm bảo chất lượng không bị ảnh hưởng. Hệ thống phân phối nhanh chóng đưa sản phẩm đến tay người tiêu dùng.",
            image: "https://readdy.ai/api/search-image?query=Professional%20logistics%20warehouse%20with%20organized%20shelves%20of%20packaged%20essential%20oil%20products%20ready%20for%20distribution%2C%20clean%20modern%20storage%20facility%2C%20workers%20managing%20inventory%2C%20bright%20professional%20lighting&width=800&height=600&seq=process6&orientation=landscape",
            iconClass: "ri-truck-line" // Biểu tượng cho bước 6
        },
    ]), []);

    // 2. State quản lý bước hiện tại
    const [currentStep, setCurrentStep] = useState(1);

    // 3. Lấy dữ liệu của bước hiện tại
    const stepData = PROCESS_STEPS.find(step => step.id === currentStep);

    // 4. Hàm xử lý chuyển bước
    const handleNext = () => {
        setCurrentStep(prev => Math.min(prev + 1, PROCESS_STEPS.length));
    };

    const handlePrev = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleStepClick = (stepId) => {
        setCurrentStep(stepId);
    };

    // Tính toán thanh tiến độ
    const progressWidth = `${(currentStep / PROCESS_STEPS.length) * 100}%`;

    return (
        <section
            ref={ref}
            id="process"
            className="py-24 bg-white"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Quy Trình Sản Xuất
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Quy trình sản xuất tinh dầu của chúng tôi tuân thủ các tiêu chuẩn
                        quốc tế nghiêm ngặt, đảm bảo mang đến sản phẩm tinh khiết và an
                        toàn nhất
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="relative bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl overflow-hidden shadow-xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image side */}
                            <div className="relative w-full h-[500px]">
                                <img
                                    alt={stepData.title}
                                    className="w-full h-full object-cover object-center"
                                    // SỬ DỤNG HÌNH ẢNH THEO BƯỚC HIỆN TẠI
                                    src={stepData.image}
                                />
                                <div className="absolute top-6 left-6 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                                    <i className={`${stepData.iconClass} text-3xl text-white`} />
                                </div>
                            </div>

                            {/* Text side */}
                            <div className="p-12 flex flex-col justify-center">
                                <div className="space-y-6">
                                    <div className="inline-block px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-full">
                                        Bước {stepData.id}
                                    </div>
                                    <h3 className="text-4xl font-bold text-gray-900">
                                        {stepData.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {stepData.content}
                                    </p>

                                    <div className="pt-8">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-gray-700">
                                                Tiến Độ
                                            </span>
                                            <span className="text-sm font-semibold text-teal-600">
                                                {stepData.id}/{PROCESS_STEPS.length}
                                            </span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                            {/* THANH TIẾN ĐỘ THAY ĐỔI THEO BƯỚC */}
                                            <div
                                                className="h-full bg-teal-600 transition-all duration-500 rounded-full"
                                                style={{ width: progressWidth }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Steps navigation - Sửa đổi để dùng handleNext/handlePrev */}
                    <div className="flex items-center justify-between mt-12">
                        <button
                            onClick={handlePrev}
                            disabled={currentStep === 1} // Vô hiệu hóa nút khi ở bước 1
                            className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-teal-600 hover:text-teal-600 transition-all cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-900"
                        >
                            <i className="ri-arrow-left-line text-xl" />
                            <span className="font-semibold whitespace-nowrap">Trước</span>
                        </button>

                        <div className="flex gap-3">
                            {/* Các nút tròn đại diện cho tiến độ */}
                            {PROCESS_STEPS.map((step) => (
                                <button
                                    key={step.id}
                                    onClick={() => handleStepClick(step.id)}
                                    aria-label={`Đến bước ${step.id}`}
                                    // Thay đổi kích thước/màu sắc dựa trên bước hiện tại
                                    className={`transition-all cursor-pointer w-3 h-3 rounded-full 
                                        ${step.id === currentStep ? 'bg-teal-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`
                                    }
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={currentStep === PROCESS_STEPS.length} // Vô hiệu hóa nút khi ở bước cuối
                            className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-teal-600 hover:text-teal-600 transition-all cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-900"
                        >
                            <span className="font-semibold whitespace-nowrap">Tiếp Theo</span>
                            <i className="ri-arrow-right-line text-xl" />
                        </button>
                    </div>

                    {/* Step icons - Sửa đổi để dùng handleStepClick */}
                    <div className="mt-12 grid grid-cols-6 gap-4">
                        {PROCESS_STEPS.map((step) => (
                            <button
                                key={`icon-${step.id}`}
                                onClick={() => handleStepClick(step.id)}
                                // Thay đổi kiểu dáng dựa trên bước hiện tại
                                className={`p-4 rounded-xl transition-all cursor-pointer 
                                    ${step.id === currentStep
                                        ? 'bg-teal-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`
                                }
                            >
                                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                                    <i className={`${step.iconClass} text-2xl`} />
                                </div>
                                <div className="text-xs font-semibold text-center">Bước {step.id}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ProcessSection;