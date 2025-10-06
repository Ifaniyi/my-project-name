import Getstarted from "../header/Getstarted";
import Logo from "../header/Logo";

export default function Navbar(){
    return(
        <div className="bg-lime-100 p-4 rounded">
            <div className="flex flex-row shadow text-xl m-1 mb-1 mt-1 rounded rounded-xl bg-white justify-between">
                <div className="pl-2 mb-1 mt-1">
                    <Logo />
                </div>
                <div className="text-center mb-2 mt-3">
                    <ul className="flex gap-14">
                        <li><a href="/home"></a>Home</li>
                        <li><a href="/aboutus"></a>About Us</li>
                        <li><a href="/how"></a>How It Works</li>
                        <li><a href="/plan"></a>Plans</li>
                        <li><a href="/about"></a>FAQs</li>
                    </ul>
                </div>
                <div className="pr-4 bg-green-400 mb-1 mt-1 rounded-lg">
                    <Getstarted />
                </div>
            </div>

        </div>
    )
}