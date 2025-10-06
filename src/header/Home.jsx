export default function Home(){
    return(
        <section className=" px-4 max-w-5xl mx-auto py-16 flex gap-22 justify-center items-center w-full h-auto top-[117px] relative">
            <div>

            <div>
              <div className="flex flex-col mb-4 gap-4">  
                <h2 className="font-bold text-5xl text-gray-600 ">Save Today,
                    <br /> 
                    <span className="text-slate-400 font-serif">Harvest Food Tomorrow </span>
                </h2>
                <p className="text- xl font-semibold text-gray-500 dark:text-gray">Join Lagos'trusted food savings platform and seccure your foodstuff at teh end of every cycle.</p>
              </div>
            </div>

            <div className="">
                <button className="bg-green-400 p-2 rounded-lg text-white m-2">
                    <a href="/getstarted">Get Started</a>
                </button>
                <button className="bg-gray-100 p-2 rounded-lg text-gray-500 m-2">
                    <a href="/getstarted">Learn More</a>
                </button>
            </div>
            </div>

            <div className="flex w-full h-full pl-6">
                <div className="w-full h-full py-6 hover:scale-150 ease-in-out duration-700">
                    <img src="/public/hero_img.png" alt="img" className="w-200 h-auto opacity-70 rounded-lg"  />
                </div>
            </div>


        </section>
    )
}