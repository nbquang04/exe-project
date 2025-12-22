// src/components/ContactSection.jsx
import React from 'react';

// BƯỚC QUAN TRỌNG: Bọc component bằng React.forwardRef
// để nó có thể nhận được 'ref' từ component cha (App.jsx)
const ContactSection = React.forwardRef((props, ref) => {
    return (
        <section 
            // GÁN REF: Gán ref đã nhận được vào thẻ <section>
            ref={ref} 
            id="contact" 
            className="py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Liên Hệ Với Chúng Tôi
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn và hỗ trợ bạn trong
                        thời gian sớm nhất
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <div>
                        <form id="contact-form" className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Họ và tên <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    type="text"
                                    placeholder="Nhập họ và tên của bạn"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    required
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Số điện thoại <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    required
                                    type="tel"
                                    placeholder="0123 456 789"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Nội dung tin nhắn <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    maxLength={500}
                                    placeholder="Nhập nội dung bạn muốn tư vấn..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                                />
                                <p className="text-xs text-gray-500 mt-1">0/500 ký tự</p>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                            >
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>

                    {/* Info + social */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Thông tin liên hệ
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
                                        <i className="ri-map-pin-line text-xl text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Địa chỉ</h4>
                                        <p className="text-sm text-gray-600">
                                            123 Đường Nguyễn Huệ, Quận 1
                                            <br />
                                            Thành phố Hồ Chí Minh, Việt Nam
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
                                        <i className="ri-phone-line text-xl text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Điện thoại</h4>
                                        <p className="text-sm text-gray-600">
                                            Hotline: 1900 1234
                                            <br />
                                            Mobile: 0901 234 567
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
                                        <i className="ri-mail-line text-xl text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                                        <p className="text-sm text-gray-600">
                                            info@tinhdau.vn
                                            <br />
                                            support@tinhdau.vn
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
                                        <i className="ri-time-line text-xl text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">
                                            Giờ làm việc
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Thứ 2 - Thứ 6: 8:00 - 18:00
                                            <br />
                                            Thứ 7 - CN: 9:00 - 17:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
                            <p className="text-sm text-white/90 mb-6">
                                Theo dõi chúng tôi trên mạng xã hội để cập nhật những thông tin
                                mới nhất về sản phẩm và chương trình ưu đãi
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors cursor-pointer"
                                >
                                    <i className="ri-facebook-fill text-xl" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors cursor-pointer"
                                >
                                    <i className="ri-instagram-line text-xl" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors cursor-pointer"
                                >
                                    <i className="ri-youtube-fill text-xl" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors cursor-pointer"
                                >
                                    <i className="ri-tiktok-fill text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ContactSection;