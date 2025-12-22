// src/components/Footer.jsx
function Footer() {
    return (
        <footer className="bg-gradient-to-br from-teal-700 to-green-700 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <img
                            alt="Essential Oils Logo"
                            className="h-12 w-auto mb-4"
                            src="https://public.readdy.ai/ai/img_res/02f3aace-4593-48bc-8b44-026ea91a7a3d.png"
                        />
                        <p className="text-sm text-white/80 leading-relaxed">
                            Tinh dầu thiên nhiên nguyên chất, mang đến sự thư giãn và chăm sóc
                            sức khỏe toàn diện cho bạn và gia đình.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Liên kết nhanh</h3>
                        <ul className="space-y-3">
                            <li>
                                <button className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
                                    Trang chủ
                                </button>
                            </li>
                            <li>
                                <button className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
                                    Sản phẩm
                                </button>
                            </li>
                            <li>
                                <button className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
                                    Quy trình sản xuất
                                </button>
                            </li>
                            <li>
                                <button className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
                                    Nguồn gốc nguyên liệu
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Hỗ trợ</h3>
                        <ul className="space-y-3">
                            <li>
                                <button className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
                                    Hướng dẫn sử dụng
                                </button>
                            </li>
                            <li>
                                <button className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
                                    Liên hệ
                                </button>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                                >
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                                >
                                    Điều khoản sử dụng
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <i className="ri-map-pin-line text-lg mt-0.5" />
                                <span className="text-sm text-white/80">
                                    123 Đường Nguyễn Huệ, Q.1, TP.HCM
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ri-phone-line text-lg" />
                                <span className="text-sm text-white/80">1900 1234</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ri-mail-line text-lg" />
                                <span className="text-sm text-white/80">info@tinhdau.vn</span>
                            </li>
                        </ul>

                        <div className="flex gap-3 mt-6">
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                            >
                                <i className="ri-facebook-fill text-lg" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                            >
                                <i className="ri-instagram-line text-lg" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                            >
                                <i className="ri-youtube-fill text-lg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-white/70">
                            © 2024 Tinh Dầu Thiên Nhiên. All rights reserved.
                        </p>
                        <a
                            href="https://readdy.ai/?origin=logo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                        >
                            Powered by Readdy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
