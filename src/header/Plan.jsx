import Plancard from "../ui/Plancard";

export default function Plan(){
    return(
        <section className="px-4 max-w-5xl mx-auto py-16">
            <div>
                <h2 className="text-center mb-2 text-4xl text-bold font-serif italic">
                    Our Plan
                </h2>
                <p className="text-center">
                    Choose the plan that fits your needs and start contributing to your food savings today!
                </p>
            </div>
            <div>
                <Plancard />
            </div>
        </section>
    )
}