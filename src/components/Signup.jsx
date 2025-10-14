export default function Signup(){
    return(
        <section className="mt-40 min-h-screen bg-[url('/bgphoto.png')] bg-cover bg-center">
            <div className="flex flex-row justify-center items-center">

            <div className=" text-center p-4 flex flex-col justify-center items-center text-center font-serif font-light">
                <h2 className="text-3xl mb-4">Welcome 💖</h2>
                <p className="mb-4 font-sm">Join HarvestPay and enjoy seamless access to  exclusive features</p>
            </div>

            
            <div className=" p-96 text-center">
                <form className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto ">
                    <h3>Sign Up</h3>
                    <input type="text" placeholder="Full Name" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"/>    
                    <input type="email" placeholder="Email Address" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"/>    
                    <input type="password" placeholder="Password" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"/>    
                    <input type="username" placeholder="Username" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"/>    
                    <button type="submit" className="bg-green-400 p-2 rounded-lg text-white m-2 cursor-pointer hover:bg-green-600 hover:text-white transition-colors duration-300">Sign Up</button>
                    <p className="">Already have am account! 
                        <span className="text-green-300"> Login here</span>
                    </p>
                </form>
                
            </div>
            </div>
        </section>
    )
}