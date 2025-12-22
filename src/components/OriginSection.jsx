// src/components/OriginSection.jsx
import React from 'react';
import imgGuHuong from '../assets/images/goguhuong.jpeg';
import imgLongNao from '../assets/images/golongnao.jpg';
import imgNgocAm from '../assets/images/gongocam.jpg';
import imgThongQue from '../assets/images/gothongque.jpg';

const OriginSection = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="origin" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Nguồn Gốc Gỗ Quý & Nguyên Liệu
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Chúng tôi tự hào sử dụng các loại gỗ và nguyên liệu quý hiếm, mang tinh hoa của núi rừng Việt Nam vào từng giọt tinh dầu.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Gỗ Gù Hương */}
                    <div className="flex flex-col lg:flex-row gap-10 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    alt="Gỗ Gù Hương"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    src={imgGuHuong}
                                />
                                <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium">
                                    Tây Nguyên, Việt Nam
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Gỗ Gù Hương (Xá Xị)</h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-6">
                                Gỗ Gù Hương, còn gọi là Xá Xị, nổi tiếng với hương thơm tự nhiên đặc trưng, có tác dụng thư giãn và thanh lọc không khí. Chúng tôi khai thác gỗ từ các khu vực được quản lý bền vững ở Tây Nguyên.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg">
                                    <i className="ri-checkbox-circle-fill text-teal-600" />
                                    <span className="text-sm font-medium text-gray-700">Hương thơm ấm áp</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg">
                                    <i className="ri-checkbox-circle-fill text-teal-600" />
                                    <span className="text-sm font-medium text-gray-700">Giá trị phong thủy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gỗ Long Não */}
                    <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    alt="Gỗ Long Não"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    src={imgLongNao}
                                />
                                <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium">
                                    Miền núi phía Bắc
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Gỗ Long Não</h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-6">
                                Tinh dầu Long Não được chiết xuất từ thân và rễ của cây Long Não. Loại gỗ này nổi tiếng với khả năng xua đuổi côn trùng và hương thơm the mát, nồng ấm, thường được trồng phổ biến ở vùng khí hậu mát mẻ phía Bắc.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg">
                                    <i className="ri-checkbox-circle-fill text-teal-600" />
                                    <span className="text-sm font-medium text-gray-700">Kháng khuẩn mạnh</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg">
                                    <i className="ri-checkbox-circle-fill text-teal-600" />
                                    <span className="text-sm font-medium text-gray-700">Hương the mát</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gỗ Ngọc Am */}
                    <div className="flex flex-col lg:flex-row gap-10 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    alt="Gỗ Ngọc Am"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    src={imgNgocAm}
                                />
                                <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium">
                                    Hà Giang, Việt Nam
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Gỗ Ngọc Am</h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-6">
                                Ngọc Am là loại gỗ cực kỳ quý hiếm, được khai thác ở vùng núi cao Hà Giang. Tinh dầu của nó mang hương thơm thanh khiết, giúp cân bằng năng lượng và được dùng để chế tác các vật phẩm tâm linh cao cấp.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg">
                                    <i className="ri-checkbox-circle-fill text-teal-600" />
                                    <span className="text-sm font-medium text-gray-700">Tinh dầu quý hiếm</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg">
                                    <i className="ri-checkbox-circle-fill text-teal-600" />
                                    <span className="text-sm font-medium text-gray-700">Hương thơm thanh khiết</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gỗ Thông & Quế */}
                    <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    alt="Gỗ Thông và Vỏ Quế"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    src={imgThongQue}
                                />
                                <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium">
                                    Yên Bái & Tây Nguyên
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Thông & Quế</h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-6">
                                <strong>Thông:</strong> Tinh dầu Thông được chưng cất từ lá và kim Thông vùng núi cao Tây Nguyên, mang lại hương thơm sảng khoái, hỗ trợ hô hấp. <strong>Quế:</strong> Vỏ Quế (chủ yếu từ Yên Bái, Quảng Nam) nổi tiếng với hương ấm, ngọt, có đặc tính giữ ấm và khử mùi mạnh.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg">
                                    <i className="ri-checkbox-circle-fill text-teal-600" />
                                    <span className="text-sm font-medium text-gray-700">Thông: Sảng khoái</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg">
                                    <i className="ri-checkbox-circle-fill text-teal-600" />
                                    <span className="text-sm font-medium text-gray-700">Quế: Ấm áp</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Commitment block */}
                <div className="mt-16 bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 flex items-center justify-center bg-teal-600 rounded-full flex-shrink-0">
                            <i className="ri-leaf-line text-4xl text-white" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Cam kết về nguồn gốc
                            </h3>
                            <p className="text-base text-gray-600">
                                Tất cả nguyên liệu của chúng tôi đều có nguồn gốc rõ ràng, được
                                thu hoạch bền vững và đảm bảo chất lượng cao nhất. Chúng tôi
                                hợp tác chặt chẽ với các nông hộ địa phương để đảm bảo quy trình
                                sản xuất thân thiện với môi trường và mang lại lợi ích cho cộng
                                đồng.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default OriginSection;