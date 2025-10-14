export default function Faqs (){
    return(
        <section className="px-4 max-w-5xl mx-auto py-16 min-h-screen pt-36">
            <div className="">

            <div className="">
               <h2 className="text-center mb-2 text-4xl text-bold font-serif italic">
                Frequently Asked Questions
                </h2>
               <p className="text-center font-serif">
                Find answers to common questions about HarvestPay and how it works.
                </p>
            </div>

            <div className="flex mt-8 justify-between gap-10 flex-col md:flex-row px-42">
                <div className="mt-3 items-center">
                    <h3 className="font-semibold mb-1">How does HarvestPay work?</h3>
                    <p className="text-gray-600 text-lg font-mono">
                        Member contribute money regularly and receive foodstuff worth their total savins.
                    </p>
                    <h3 className="font-semibold mb-1 mt-2">When can i collect my foodstuff</h3>
                    <p className="text-gray-600 text-lg font-mono">
                        Members can collect thier foodstuff at the end of their chosen savings cycle-usually  
                        <span className="text-sm font-serif font-sm"> after 3 , 6 or 12 months of </span>
                        consistent contributions.
                        Once your contribution period is complete, you'll receive a notification or message from HarvestPay
                        confirming your collection date and the list of food items availble for pickup or delivery.
                    </p>
                    <h3 className="font-semibold mb-1 mt-2">How do i start contributing?</h3>
                    <p className="text-gray-600 text-lg font-mono">Simply sign up, choose a plan, and begin
                        <span className="text-lg">!</span>
                    </p>
                </div>

            </div>
            
            </div>
        </section>
    )
}