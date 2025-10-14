export default function Benefit(){
   const benefits = [
        {
            id:1,
            words:"Farm Fresh Quality",
            desc:"Fresh farm produce at unbeatable price guaranteed."
        },
        {
            id:2,
            words:"Save Money",
            desc:"Enjoy prices lower than traditional markets like Mile 12 or Bodija."
        },
        {
            id:3,
            words:"Convenient Locations",
            desc:"Easily pick up your orders from our strategically located points in Lagos & Ibadan."
        },
        {
            id:4,
            words:"Earn Through Referrals",
            desc:"Get rewarded with every successful referral through our referral program."
        },
    ]

    return(
        <section className="px-4 max-w-5xl mx-auto py-16">

            {/* Header section - centered at top */}

            <div className="text-center mb-12">
                <h2 className="font-bold text-3xl text-gray-800 mb-4">Key Benefits</h2>
                <p className="text-gray-600 text-lg">
                    Discover the advantages of joining our food-sharing community:
                </p>
            </div>

            {/* Benefits row */}
            
            <div className="flex flex-row gap-6">
                {benefits.map((item) => (
                    <div key={item.id} className="flex-1">
                        <div className="flex flex-col rounded-lg p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="font-bold text-xl text-gray-600 mb-2">
                                {item.words}
                            </h3>
                            <p className="text-gray-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Div for Button */}
            <div className="text-center mt-12">
                <button className="bg-green-400 p-2 rounded-lg text-white-400 m-2 cursor-pointer hover:bg-green-600 hover:text-white transition-colors duration-300">
                    <a href="/plan">Join HarvestPay</a>
                </button>
            </div>
            
        </section>
    )
}