export default function Footer(){
    return(
     <section>
       <footer class="bg-[#0F2E2E] text-white py-12 px-8 md:px-20">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h2 class="text-2xl font-bold text-[#1C7C54] mb-3">🌿 HarvestPay</h2>
              <p class="text-gray-300 mb-6">
                Empowering farmers with smarter payments.
              </p>
              <p class="text-sm text-gray-400">
                © 2025 HarvestPay. All rights reserved.
              </p>
            </div>
        <div>
      <h3 class="text-lg font-semibold text-[#1C7C54] mb-4">Quick Links</h3>
      <ul class="space-y-2">
        <li><a href="/" class="hover:text-[#1C7C54] transition">Home</a></li>
        <li><a href="aboutus" class="hover:text-[#1C7C54] transition">About</a></li>
        <li><a href="#" class="hover:text-[#1C7C54] transition">Services</a></li>
        <li><a href="#" class="hover:text-[#1C7C54] transition">Pricing</a></li>
        <li><a href="#" class="hover:text-[#1C7C54] transition">Contact</a></li>
      </ul>
        </div>

  
        <div>
      <h3 class="text-lg font-semibold text-[#1C7C54] mb-4">Resources</h3>
      <ul class="space-y-2">
        <li><a href="faqs" class="hover:text-[#1C7C54] transition">FAQs</a></li>
        <li><a href="#" class="hover:text-[#1C7C54] transition">Blog</a></li>
        <li><a href="#" class="hover:text-[#1C7C54] transition">Support</a></li>
        <li><a href="#" class="hover:text-[#1C7C54] transition">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-[#1C7C54] transition">Terms of Service</a></li>
      </ul>
        </div>

   
        <div>
      <h3 class="text-lg font-semibold text-[#1C7C54] mb-4">Contact</h3>
      <p class="text-gray-300 mb-2">📧 support@harvestpay.com</p>
      <p class="text-gray-300 mb-4">📞 +1 (800) 555-0199</p>

        <div class="flex space-x-4 text-gray-300 text-xl">
        <a href="#" class="hover:text-[#1C7C54] transition"><i class="fab fa-facebook"></i></a>
        <a href="#" class="hover:text-[#1C7C54] transition"><i class="fab fa-twitter"></i></a>
        <a href="#" class="hover:text-[#1C7C54] transition"><i class="fab fa-linkedin"></i></a>
        <a href="#" class="hover:text-[#1C7C54] transition"><i class="fab fa-instagram"></i></a>
       </div>
        </div>

      </div>
       </footer>
     </section>
    )
}