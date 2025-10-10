import Getstarted from "../header/Getstarted";
import Logo from "../header/Logo";
import MobileNavbar from "./MobileNavbar";

export default function Navbar(){
    return(
        <div className="bg-[#0F2E2E] p-4 rounded">
            <div className="flex flex-row shadow text-xl m-1 mb-1 mt-1 rounded rounded-xl bg-white justify-between">
                <div className="pl-2 mb-1 mt-1">
                    <Logo />
                </div>
                <MobileNavbar />
                <nav className="text-center mb-2 mt-3">
                    <ul className="sm:hidden md:flex gap-14">
                        <li><a href="/" class="hover:text-[#1C7C54] transition">Home</a></li>
                        <li><a href="aboutus" class="hover:text-[#1C7C54] transition">About Us</a></li>
                        <li><a href="how" class="hover:text-[#1C7C54] transition">How It Works</a></li>
                        <li><a href="plan" class="hover:text-[#1C7C54] transition">Plans</a></li>
                        <li><a href="faqs" class="hover:text-[#1C7C54] transition">FAQs</a></li>
                    </ul>
                </nav>

                
                <div className="pr-4 bg-green-400 mb-1 mt-1 rounded-lg">
                    <Getstarted />
                </div>
            </div>

        </div>
    )
}
