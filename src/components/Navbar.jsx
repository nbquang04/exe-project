import React, { useState } from 'react';

function Navbar({ scrollToSection }) {
    // 1. Tạo state để quản lý việc đóng/mở menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hàm tiện ích: Vừa cuộn trang, vừa đóng menu mobile
    const handleNavClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false); // Đóng menu sau khi chọn
    };

    const navLinks = [
        { name: 'Trang chủ', key: 'trangchu' },
        { name: 'Sản phẩm', key: 'sanpham' },
        { name: 'Quy trình', key: 'quytrinh' },
        { name: 'Nguồn gốc', key: 'nguongoc' },
        { name: 'Hướng dẫn', key: 'huongdan' },
        { name: 'Liên hệ', key: 'lienhe' },
    ];

    return (
        <nav className="w-full z-50 transition-all duration-300 fixed top-0 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            alt="Essential Oils Logo"
                            className="h-12 w-auto cursor-pointer"
                            src="https://public.readdy.ai/ai/img_res/02f3aace-4593-48bc-8b44-026ea91a7a3d.png"
                            onClick={() => handleNavClick('trangchu')}
                        />
                    </div>

                    {/* Desktop Menu (Ẩn trên mobile) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.key}
                                onClick={() => scrollToSection(link.key)}
                                className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-700 hover:text-teal-600"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Chỉ hiện trên mobile) */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-gray-700"
                    >
                        <i className={isMenuOpen ? "ri-close-line text-2xl" : "ri-menu-line text-2xl"} />
                    </button>
                </div>

                {/* Mobile Dropdown Menu (Hiển thị khi isMenuOpen là true) */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col space-y-4 pb-4 border-t border-gray-100 pt-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.key}
                                onClick={() => handleNavClick(link.key)}
                                className="text-left text-base font-medium text-gray-700 hover:text-teal-600 transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;