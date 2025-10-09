export default function Plancard() {
    const Card = [
        {
            id: 1,
            title: "Starter Plan",
            amount: "#1,000/month",
            src: "",
            text: "Collect basic food items after 6 months"
        },
        {
            id: 2,
            title: "Family Plan",
            amount: "#3,000/month",
            src: "",
            text: "Collect bigger packages after 6 months"
        },
        {

            title: "Bulk Plan",
            amount: "#6,000/month",
            src: "",
            text: "Get bulk foodstuff after 6 months"
        },
    ]

    return(
       <section className="">
            {
                Card.map((item) => (
                    <div className="">
                        <div key={item.id} className="border-2 border-green-500 rounded-2xl p-6 m-4 text-center">
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-xl mb-4">{item.amount}</p>
                            <p className="font-semibold">{item.text}</p>
                        </div>
                    </div>
                ))
            }
       </section>
        )
}