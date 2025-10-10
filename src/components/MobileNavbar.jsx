import React, { useState } from 'react';

const name = ''
const MobileNavbar = () => {
    const [menu, setMenu] = useState(name)


    return (
        <div className="flex gap-4 ">
            <nav className="text-left mb-3 ">
                <ul className="  sm:block sm:bg-grey-300 md:hidden gap-14">
                    <li><a href="/" class="hover:text-[#1C7C54] transition">Home</a></li>
                    <li><a href="aboutus" class="hover:text-[#1C7C54] transition">About Us</a></li>
                    <li><a href="how" class="hover:text-[#1C7C54] transition">How It Works</a></li>
                    <li><a href="plan" class="hover:text-[#1C7C54] transition">Plans</a></li>
                    <li><a href="faqs" class="hover:text-[#1C7C54] transition">FAQs</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default MobileNavbar;