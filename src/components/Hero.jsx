import Plancard from "../ui/Plancard";

export default function Hero(){
    return(
        <section className="px-4 max-w-5xl mx-auto py-16">
            <div className="text-center">
                <h2 className="font-serif text-center mb-4 text-4xl text-bold font-serif italic">
                    Why Choose HarvestPay
                </h2>
                <p className="">
                    Achieve your savings goals faster: With HarvestPay, you have a clear target to work towards, 
                    making it easier to save consistently.
                </p>
            </div>

            <div className="">
                <Plancard />
            </div>
        </section>
    )
}