export default function Plancard() {
    const Card = [
        {
            id: 1,
            title: "Starter Plan",
            classname:'bg-green-300',
            amount: "#1,000/month",
            src: "/ice-cream-bowl.png",
            text: "Collect basic food items after 6 months",
            ton: "bg-green-400 "
        },
        {
            id: 2,
            title: "Family Plan",
            classname:'bg-blue-300',
            amount: "#3,000/month",
            src: "/public/package.png",
            text: "Collect bigger packages after 6 months",
            ton: "bg-blue-400 "
        },
        {
            id: 3,
            title: "Bulk Plan",
            classname:'bg-yellow-200',
            amount: "#6,000/month",
            src: "/public/handbag.png",
            text: "Get bulk foodstuff after 6 months",
            ton: "bg-yellow-400 "
        },
    ]

    return(
       <section className="flex flex-wrap justify-center mt-8">
            {
                Card.map((item) => (
                    <div className="flex flex-wrap justify-center">
                        <div key={item.id} className="border-2 border-green-500 rounded-2xl p-6 m-4 text-center  w-72">
                            <div className={item.classname + " text-white p-4 rounded-lg mb-4"}>
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-xl mb-4">{item.amount}</p>
                            </div>

                            <div className="">
                                <img src={item.src} alt={item.title} className="w-20 h-20 mx-auto mb-4 font-yellow-200" />
                                <p className="font-semibold">{item.text}</p>
                            </div>

                            <div className="mt-6 cursor-pointer">
                                <button className={item.ton + "p-2 rounded-lg text-white m-2"}>
                                <a href="/getstarted">Get Started</a>
                                </button>
                            </div>

                        </div>
                    </div>
                ))
            }
       </section>
        )
}