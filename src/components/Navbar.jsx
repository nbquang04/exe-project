// src/components/Navbar.jsx
import React from 'react'; // Chỉ cần import React nếu bạn đang dùng các Hooks, ở đây không dùng nên có thể bỏ useRef

// 1. Nhận props 'scrollToSection' từ component cha (App.jsx)
function Navbar({ scrollToSection }) { 

    return (
        <nav className="w-full z-50 transition-all duration-300 fixed top-0 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            alt="Essential Oils Logo"
                            className="h-12 w-auto"
                            src="https://public.readdy.ai/ai/img_res/02f3aace-4593-48bc-8b44-026ea91a7a3d.png"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {/* 2. Thêm onClick và gọi hàm cuộn với key tương ứng */}
                        <button 
                            onClick={() => scrollToSection('trangchu')} // Key phải khớp với App.jsx
                            className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-700 hover:text-teal-600">
                            Trang chủ
                        </button>
                        <button 
                            onClick={() => scrollToSection('sanpham')} // Key: 'sanpham'
                            className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-700 hover:text-teal-600">
                            Sản phẩm
                        </button>
                        <button 
                            onClick={() => scrollToSection('quytrinh')} // Key: 'quytrinh'
                            className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-700 hover:text-teal-600">
                            Quy trình
                        </button>
                        <button 
                            onClick={() => scrollToSection('nguongoc')} // Key: 'nguongoc'
                            className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-700 hover:text-teal-600">
                            Nguồn gốc
                        </button>
                        <button 
                            onClick={() => scrollToSection('huongdan')} // Key: 'huongdan'
                            className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-700 hover:text-teal-600">
                            Hướng dẫn
                        </button>
                        <button 
                            onClick={() => scrollToSection('lienhe')} // Key: 'lienhe'
                            className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-700 hover:text-teal-600">
                            Liên hệ
                        </button>
                    </div>

                    <button className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer">
                        <i className="ri-menu-line text-2xl text-gray-700" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;