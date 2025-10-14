import { UserRoundPlus, HandCoins, MonitorUp, Soup } from 'lucide-react';


export default function Howitwork () {
    return (
        <section className=" flex justify-center px-4 mx-auto py-16 min-h-screen pt-38">
            <div className='max-w-150 h-vh flex flex-col justify-center'>
                <div className="flex items-center justify-center">
                    <h2 className="font-bold text-5xl mb-8">How it works</h2>
                </div>

                <div className='flex flex-row gap-4 mb-6'>
                    <div className="">
                        <UserRoundPlus className='mt-3 text-green-600 mb-2 w-15 h-15'/>
                    </div>
                    <div className=''>
                        <h4 className=' mb-2 text-2xl font-semibold'>Join HarvestPay</h4>
                        <p className='text-gray-600 text-start text-lg items-center'>Create a free account and become part of a trusted food savings group in your community.</p>
                     </div>
                </div>

                <div className='flex gap-4 mb-6'>
                    <div className="">
                        <HandCoins  className='mt-3 text-green-600 mb-2 w-15 h-15'/>
                    </div>
                    <div className=''>
                        <h4 className=' mb-2 text-2xl font-semibold'>Contribute Regularly</h4>
                        <p className='text-gray-600 text-start text-lg'>Save a fixed amount of money weekly into your gropu contribution.</p>
                    </div>
                </div>

                <div className='flex gap-4 mb-6'>
                    <div className="">
                        <MonitorUp  className='mt-3 text-green-600 mb-2 w-15 h-15'/>
                    </div>
                    <div className=''>
                        <h4 className=' mb-2 text-2xl font-semibold'>Track Your Progress</h4>
                        <p className='text-gray-600 text-start text-lg'>Use your dashboard to see your savings. payment history, and remaining balance in real time.</p>
                    </div>
                </div>

                <div className='flex gap-4 mb-6'>
                    <div className="">
                        <Soup  className='mt-3 text-green-600 mb-2 w-15 h-15'/>
                    </div>
                    <div className=''>
                        <h4 className=' mb-2 text-2xl font-semibold'>Collect Foodstuff</h4>
                        <p className='text-gray-600 text-start text-lg'>At the end of the agreed cycle(e.g 6 months). you'll receive food items worth your contribution-simple, transparent, and stress-free.</p>
                    </div>
                </div>

               
            </div>
            <div className="">
                <img src="/hero_img.png" alt="img" className="w-200 h-auto opacity-70 rounded-lg"  />
            </div>
            
        </section>
    )
}