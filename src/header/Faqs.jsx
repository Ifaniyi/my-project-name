export default function Faqs (){
    return(
        <section className="px-4 max-w-5xl mx-auto py-16">
            <div className="">

            <div className="">
               <h2 className="text-center mb-2 text-4xl text-bold font-serif italic">
                Frequently Asked Questions
                </h2>
               <p className="text-center font-serif">
                Jolin Lagos' trusted food savins platform and secure your foodstuff at the end of every cycle.
                </p>
            </div>

            <div className="flex mt-8 justify-between gap-10 flex-col md:flex-row px-42">
                <div className="mt-3 items-center">
                    <h3 className="font-semibold mb-1">How does HarvestPay work?</h3>
                    <p className="text-gray-600 text-lg font-mono">
                        Member contribute money regularly and receive foodstuff worth their total savins.
                    </p>
                    <h3 className="font-semibold mb-1 mt-2">How do i start contributing?</h3>
                    <p className="text-gray-600 text-lg font-mono">Simply sign up, choose a plan, and begin</p>
                </div>

                <div className="mt-3 items-center">
                    <img src="/public/howit.jpg" alt="" className="rounded-lg" />
                </div>
            </div>

            </div>
        </section>
    )
}