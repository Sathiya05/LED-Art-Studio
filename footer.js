// Neon Sign & LED Art Studio Footer (Light Theme)
// Theme: Laser Green (#39FF14), White (#FFFFFF), Near Black (#0A0A0A)

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full transition-colors duration-500 bg-white border-t border-gray-200 dark:bg-black dark:border-white/10 relative overflow-hidden">
  
  <div class="absolute top-0 left-0 w-64 h-64 bg-[#39FF14]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
  <div class="absolute bottom-0 right-0 w-80 h-80 bg-[#39FF14]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 grid-cols-1 md:grid-cols-12">

    <div class="md:col-span-6 lg:col-span-4 flex flex-col items-start text-left rtl:lg:text-right pr-0 lg:pr-8">
     <a href="index.html" class="flex items-center space-x-3 group shrink-0">
        <div class="relative flex items-center justify-center w-11 h-11 rounded-xl bg-black dark:bg-transparent border-2 border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)] group-hover:shadow-[0_0_25px_rgba(57,255,20,0.5)] group-hover:scale-105 transition-all duration-500">
            <i class="fas fa-bolt text-[#39FF14] text-xl transform group-hover:rotate-12 transition-transform duration-500"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-2xl font-bold tracking-tighter uppercase text-black dark:text-white leading-none">
            Lumi<span class="text-[#39FF14] ">Neon</span>
          </span>
          <span class="text-[8px] font-bold tracking-[0.3em] uppercase text-black/40 dark:text-white/40">Studio Excellence</span>
        </div>
      </a>
      <br>
      <p class="text-sm font-bold text-gray-600 dark:text-gray-400 tracking-wider leading-relaxed mb-8 max-w-md">
        Handcrafted, premium LED neon artistry. We transform your boldest ideas into vivid, high-contrast light pieces for businesses, events, and modern interiors.
      </p>
      
      <div class="flex gap-4 justify-start">
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 text-gray-500 bg-gray-50 border border-gray-200 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-black hover:bg-[#39FF14] hover:border-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]">
          <i class="fab fa-instagram text-lg"></i>
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 text-gray-500 bg-gray-50 border border-gray-200 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-black hover:bg-[#39FF14] hover:border-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]">
          <i class="fab fa-tiktok text-lg"></i>
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 text-gray-500 bg-gray-50 border border-gray-200 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-black hover:bg-[#39FF14] hover:border-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]">
          <i class="fab fa-twitter text-lg"></i>
        </a>
      </div>
    </div>

    <div class="md:col-span-6 lg:col-span-2 flex flex-col items-start text-left">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-[#0A0A0A] dark:text-white border-b-2 inline-block pb-1 border-[#39FF14]">Studio</h3>
      <ul class="space-y-4 text-sm font-bold flex flex-col items-start">
        <li>
          <a href="index.html" class="footer-link flex items-center text-gray-600 dark:text-gray-400 transition-all duration-300 relative group">
            <i class="fas fa-arrow-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300 text-[#39FF14]"></i>
            <span class="group-hover:text-[#0A0A0A] dark:group-hover:text-white">Main Studio</span>
          </a>
        </li>
        <li>
          <a href="custom.html" class="footer-link flex items-center text-gray-600 dark:text-gray-400 transition-all duration-300 relative group">
            <i class="fas fa-arrow-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300 text-[#39FF14]"></i>
            <span class="group-hover:text-[#0A0A0A] dark:group-hover:text-white">Custom Signs</span>
          </a>
        </li>
        <li>
          <a href="gallery.html" class="footer-link flex items-center text-gray-600 dark:text-gray-400 transition-all duration-300 relative group">
            <i class="fas fa-arrow-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300 text-[#39FF14]"></i>
            <span class="group-hover:text-[#0A0A0A] dark:group-hover:text-white">Gallery</span>
          </a>
        </li>
        <li>
          <a href="shop.html" class="footer-link flex items-center text-gray-600 dark:text-gray-400 transition-all duration-300 relative group">
            <i class="fas fa-arrow-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300 text-[#39FF14]"></i>
            <span class="group-hover:text-[#0A0A0A] dark:group-hover:text-white">Shop Pre-made</span>
          </a>
        </li>
      </ul>
    </div>
    
    <div class="md:col-span-6 lg:col-span-2 flex flex-col items-start text-left">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-[#0A0A0A] dark:text-white border-b-2 inline-block pb-1 border-[#39FF14]">Support</h3>
      <ul class="space-y-4 text-sm font-bold flex flex-col items-start">
        <li>
          <a href="faq.html" class="footer-link flex items-center text-gray-600 dark:text-gray-400 transition-all duration-300 relative group">
            <i class="fas fa-arrow-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300 text-[#39FF14]"></i>
            <span class="group-hover:text-[#0A0A0A] dark:group-hover:text-white">Design FAQs</span>
          </a>
        </li>
        <li>
          <a href="installation.html" class="footer-link flex items-center text-gray-600 dark:text-gray-400 transition-all duration-300 relative group">
            <i class="fas fa-arrow-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300 text-[#39FF14]"></i>
            <span class="group-hover:text-[#0A0A0A] dark:group-hover:text-white">Install Guide</span>
          </a>
        </li>
        <li>
          <a href="warranty.html" class="footer-link flex items-center text-gray-600 dark:text-gray-400 transition-all duration-300 relative group">
            <i class="fas fa-arrow-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300 text-[#39FF14]"></i>
            <span class="group-hover:text-[#0A0A0A] dark:group-hover:text-white">Warranty Info</span>
          </a>
        </li>
        <li>
          <a href="contact.html" class="footer-link flex items-center text-gray-600 dark:text-gray-400 transition-all duration-300 relative group">
            <i class="fas fa-arrow-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300 text-[#39FF14]"></i>
            <span class="group-hover:text-[#0A0A0A] dark:group-hover:text-white">Contact Us</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="md:col-span-6 lg:col-span-4 flex flex-col items-start text-left">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-[#0A0A0A] dark:text-white border-b-2 inline-block pb-1 border-[#39FF14]">Light Up Your Inbox</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 font-bold mb-5 tracking-wider leading-relaxed max-w-md text-left">
        Subscribe for design inspiration, new drops, and <span class="text-[#39FF14] font-black drop-shadow-sm">10% off</span> your first order.
      </p>

      <form class="flex flex-col sm:flex-row gap-0 w-full max-w-md border border-gray-300 dark:border-white/10 focus-within:border-[#39FF14] focus-within:shadow-[0_0_8px_rgba(57,255,20,0.2)] transition-all duration-300 rounded-sm overflow-hidden text-left" id="newsletterForm">
        <input type="email" placeholder="YOUR EMAIL ADDRESS..." class="flex-1 px-5 py-4 bg-gray-50 dark:bg-white/5 text-[#0A0A0A] dark:text-white font-bold text-xs tracking-widest focus:outline-none w-full uppercase placeholder-gray-400">
        <button type="submit" class="px-8 py-4 font-black uppercase tracking-widest text-[#0A0A0A] transition-all duration-300 bg-[#39FF14] hover:bg-[#32e612] w-full sm:w-auto border-l border-gray-300 dark:border-white/10 sm:border-none">
          Join
        </button>
      </form>
    </div>
  </div>

  <div class="border-t border-gray-200 dark:border-white/10 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest text-left md:text-center">
      
      <div class="flex items-center gap-2">
        <p>© 2026 LumiNeon Studio. All rights reserved.</p>
      </div>

      <div class="flex flex-wrap justify-start md:justify-center gap-6">
        <a href="#" class="hover:text-[#39FF14] transition-colors duration-300">Privacy Policy</a>
        <a href="#" class="hover:text-[#39FF14] transition-colors duration-300">Terms of Service</a>
        <a href="#" class="hover:text-[#39FF14] transition-colors duration-300">Refunds</a>
      </div>
    </div>
  </div>

</footer>
`;

  /* ===============================
     FOOTER INTERACTIVITY
  =============================== */
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        alert('⚡ Welcome to LumiNeon! Check your inbox for your 10% off code.');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address to join.');
      }
    });
  }

  /* ===============================
     RTL SUPPORT (Flipping Icons)
  =============================== */
  function updateFooterRTL() {
    const isRTL = document.documentElement.dir === 'rtl';
    const footer = document.querySelector('footer');
    
    if (isRTL) {
      footer?.classList.add('rtl');
    } else {
      footer?.classList.remove('rtl');
    }
  }

  const rtlObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'dir') {
        updateFooterRTL();
      }
    });
  });

  rtlObserver.observe(document.documentElement, { attributes: true });
  updateFooterRTL();

  /* ===============================
     INJECT CUSTOM STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    /* Custom Link Hover Animation (Sharp slide right) */
    .footer-link:hover {
      color: #0A0A0A !important;
      transform: translateX(8px);
    }
    
    html.dark .footer-link:hover {
      color: white !important;
    }

    .footer-link:hover i.fa-arrow-right {
      opacity: 1;
      margin-left: 0;
    }

    /* RTL specific hover animation */
    footer.rtl .footer-link:hover {
      transform: translateX(-8px);
    }
    
    footer.rtl .footer-link i.fa-arrow-right {
      transform: scaleX(-1);
      margin-right: -1rem;
      margin-left: 0.5rem;
    }
    
    footer.rtl .footer-link:hover i.fa-arrow-right {
      margin-right: 0;
    }
    
    [dir="rtl"] footer .pr-0.lg\\:pr-8 {
      padding-right: 0;
      padding-left: 2rem;
    }
  `;
  document.head.appendChild(footerStyles);
});
