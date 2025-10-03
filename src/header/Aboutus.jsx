export default function Aboutus (){
    return (
        <section className="px-4 max-w-5xl mx-auto py-16">
            <div className="flex flex-col">
                <div className="justify-center flex">
                    <h2 className="text-center mb-4 text-4xl text-bold font-serif italic">About Us</h2>
                </div>
                <p className="text-center">
                    HarvestPay is a digital food savings platform designed to help communities in Lagos save 
                    money together and receive foodstuff at the end of their savings cycle. Our mission is to make food savings simple, 
                    transparent, and reliable.
                </p>
                <p className="text-center">
                    For years, families have relied on manual contribution methods to secure foodstuff. 
                    These offline systems often face challenges such as errors, lack of transparency, and poor record-keeping.
                    HarvestPay brings this trusted method online, providing organized records, contribution tracking, and easier access for everyone.
                </p>
            </div>

            <div className="flex flex-row mt-8 justify-center gap-6">
                <div>
                    <h3 className="text-center mb-4 text-2xl text-bold font-serif italic">Transparency</h3>
                    <p className="text-center">Clear Contribution records with no hidden details</p>
                </div>

                <div>
                    <h3 className="text-center mb-4 text-2xl text-bold font-serif italic">Community</h3>
                    <p className="text-center">Built for families and groups saving together</p>
                </div>
                <div>
                    <h3 className="text-center mb-4 text-2xl text-bold font-serif italic">Reliability</h3>
                    <p className="text-center">Secure, dependable platform for consistent savings cycles</p>
                </div>
            </div>
        </section>
    )
}