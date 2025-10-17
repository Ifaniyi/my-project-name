import Hero from "../components/Hero"
import Benefit from "../ui/Benefit"
export default function Home(){
    return(
        <section className="min-h-screen pt-20">
            <div className="px-4 max-w-5xl mx-auto py-16 flex gap-23 justify-center items-center w-full h-auto hover:scale-150 ease-in-out duration-500">

            <div className="">

            <div>
              <div className="flex flex-col mb-4 gap-4">  
                <h2 className="font-bold text-5xl text-gray-600 ">Save Today,
                    <br /> 
                    <span className="text-slate-400 font-serif">Harvest Food Tomorrow </span>
                </h2>
                <p className="text- xl font-semibold text-gray-500 dark:text-gray font-sans">
                    Join Lagos trusted food savings platform and secure your foodstuff at the end of every cycle.
                </p>
              </div>
            </div>

            <div className="">
                <button className="bg-green-400 p-2 rounded-lg text-white m-2">
                    <a href="/signup">Get Started</a>
                </button>
                <button className="bg-gray-100 p-2 rounded-lg text-gray-500 m-2">
                    <a href="/learn">Learn More</a>
                </button>
            </div>
            </div>

            <div className="flex w-full h-full pl-6">
                <div className="w-full h-full py-6 hover:scale-60 duration-400">
                    <img src="/homephoto.jpg" alt="img" className="w-200 h-auto opacity-70 rounded-lg"  />
                </div>
            </div>
            </div>

            <Hero />
            <Benefit />

        </section>
    )
}