// Neon Sign & LED Art Studio Navigation Bar
// Theme: Laser Green (#39FF14), White (#FFFFFF), Pure Black (#000000)

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white border-b border-black/5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] dark:bg-black dark:border-[#39FF14]/20">
  <div class="container mx-auto px-4 xl:px-8">
    <div class="flex items-center justify-between h-20 md:h-24">

      <a href="index.html" class="flex items-center space-x-3 group shrink-0">
        <div class="relative flex items-center justify-center w-11 h-11 rounded-xl bg-black dark:bg-transparent border-2 border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)] group-hover:shadow-[0_0_25px_rgba(57,255,20,0.5)] group-hover:scale-105 transition-all duration-500">
            <i class="fas fa-bolt text-[#39FF14] text-xl transform group-hover:rotate-12 transition-transform duration-500"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-2xl font-bold tracking-tighter uppercase text-black dark:text-white leading-none">
            Lumi<span class="text-[#39FF14]">Neon</span>
          </span>
          <span class="text-[8px] font-bold tracking-[0.3em] uppercase text-black/40 dark:text-white/40">Studio Excellence</span>
        </div>
      </a>

      <div class="hidden xl:flex flex-1 justify-center items-center space-x-0.5 font-bold text-[12px] tracking-tight uppercase">
        
        <div class="relative group/nav">
          <button id="homeBtn" class="nav-link-base flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
            <span>HOME</span>
            <i class="fas fa-chevron-down text-[8px] opacity-40 group-hover/nav:rotate-180 transition-transform duration-300"></i>
          </button>
          <div id="homeMenu" class="hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-black rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-4 z-50 border border-black/5 dark:border-[#39FF14]/20 overflow-hidden transform-gpu">
            <a href="index.html" class="block px-6 py-2 transition-all duration-200 hover:bg-[#39FF14]/10 hover:text-black dark:text-white">Home 1</a>
            <a href="home2.html" class="block px-6 py-2 transition-all duration-200 hover:bg-[#39FF14]/10 hover:text-black dark:text-white">Home 2</a>
          </div>
        </div>
        
        <a href="about.html" class="nav-link-base px-3 py-2 rounded-full transition-all duration-300 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">About</a>
        <a href="artworks.html" class="nav-link-base px-3 py-2 rounded-full transition-all duration-300 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Artworks</a>
        <a href="gallery.html" class="nav-link-base px-3 py-2 rounded-full transition-all duration-300 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Gallery</a>
        <a href="pricing.html" class="nav-link-base px-3 py-2 rounded-full transition-all duration-300 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Pricing</a>
        <a href="shop.html" class="nav-link-base px-3 py-2 rounded-full transition-all duration-300 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Orders</a>
        <a href="contact.html" class="nav-link-base px-3 py-2 rounded-full transition-all duration-300 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Contact</a>

        <div class="relative group/nav">
          <button id="dashBtn" class="nav-link-base flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
            <span>DASHBOARD</span>
            <i class="fas fa-chevron-down text-[8px] opacity-40 group-hover/nav:rotate-180 transition-transform duration-300"></i>
          </button>
          <div id="dashMenu" class="hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-black rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-4 z-50 border border-black/5 dark:border-[#39FF14]/20 overflow-hidden">
            <a href="user.html" class="block px-6 py-2 transition-all duration-200 hover:bg-[#39FF14]/10 hover:text-black dark:text-white"><i class="fas fa-user-circle mr-2 opacity-50"></i>User</a>
            <a href="admin.html" class="block px-6 py-2 transition-all duration-200 hover:bg-[#39FF14]/10 hover:text-black dark:text-white"><i class="fas fa-user-shield mr-2 opacity-50"></i>Admin</a>
          </div>
        </div>
      </div>

      <div class="hidden xl:flex items-center space-x-4 shrink-0">
        
        <div class="flex items-center space-x-1.5">
          <button id="rtlToggle" class="w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 border border-transparent hover:border-[#39FF14]/30 transition-all flex items-center justify-center group text-[9px] font-black text-black/60 dark:text-white/60">
            <span class="rtl-text transition-all group-hover:text-black dark:group-hover:text-white">RTL</span>
          </button>
          <button id="darkToggle" class="w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 border border-transparent hover:border-[#39FF14]/30 transition-all flex items-center justify-center group">
            <i id="darkIcon" class="fas fa-moon text-[13px] text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-all"></i>
          </button>
        </div>

        <div class="flex items-center space-x-2 border-l border-black/10 dark:border-white/10 pl-4">
          <a href="login.html" class="px-5 py-2.5 font-bold text-[11px] uppercase tracking-widest text-white bg-black rounded-full hover:-translate-y-0.5 transition-all">
            Login
          </a>
          <a href="signup.html" class="relative overflow-hidden group/btn px-6 py-3 rounded-full font-black text-[11px] uppercase tracking-[0.1em] text-black bg-[#39FF14] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(57,255,20,0.4)] hover:-translate-y-0.5">
            <span class="relative z-10">Signup</span>
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
          </a>
        </div>
      </div>

      <div class="flex xl:hidden">
        <button id="mobileBtn" class="relative flex items-center justify-center w-11 h-11 rounded-xl bg-black dark:bg-transparent border-2 border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all active:scale-95 group">
          <i id="mobileIcon" class="fas fa-bars text-xl text-[#39FF14] transition-all duration-300"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="xl:hidden bg-white dark:bg-black">
      
      <div class="flex flex-col space-y-1 font-bold tracking-wide uppercase text-[14px]">
        
        <div class="w-full">
          <button id="mobileHomeBtn" class="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
            <span>HOME</span>
            <i id="mobileHomeIcon" class="fas fa-chevron-down text-xs transition-transform duration-300"></i>
          </button>
          <div id="mobileHomeMenu" class="hidden px-8 py-2 space-y-2 bg-black/5 dark:bg-white/5 rounded-xl mt-1 mx-4">
            <a href="index.html" class="block py-2 text-black/60 dark:text-white/60 hover:text-[#39FF14]">Home 1</a>
            <a href="home2.html" class="block py-2 text-black/60 dark:text-white/60 hover:text-[#39FF14]">Home 2</a>
          </div>
        </div>
        
        <a href="about.html" class="px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">About</a>
        <a href="artworks.html" class="px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">Artworks</a>
        <a href="gallery.html" class="px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">Gallery</a>
        <a href="pricing.html" class="px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">Pricing</a>
        <a href="shop.html" class="px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">Orders</a>
        <a href="contact.html" class="px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">Contact</a>

        <div class="w-full">
          <button id="mobileDashBtn" class="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
            <span>DASHBOARD</span>
            <i id="mobileDashIcon" class="fas fa-chevron-down text-xs transition-transform duration-300"></i>
          </button>
          <div id="mobileDashMenu" class="hidden px-8 py-2 space-y-2 bg-black/5 dark:bg-white/5 rounded-xl mt-1 mx-4">
            <a href="user.html" class="block py-2 text-black/60 dark:text-white/60 hover:text-[#39FF14]">User</a>
            <a href="admin.html" class="block py-2 text-black/60 dark:text-white/60 hover:text-[#39FF14]">Admin</a>
          </div>
        </div>
      </div>

      <div class="mt-6 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col items-center space-y-6">
         <div class="flex space-x-4">
           <button id="mobileRtlToggle" class="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center">
             <span class="rtl-text text-xs font-black">RTL</span>
           </button>
           <button id="mobileDarkToggle" class="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center">
             <i id="mobileDarkIcon" class="fas fa-moon text-lg"></i>
           </button>
         </div>
         <div class="grid grid-cols-2 gap-4 w-full px-4">
            <a href="login.html" class="flex items-center bg-black text-white justify-center py-4 rounded-xl font-bold uppercase tracking-widest text-[11px]">Login</a>
            <a href="signup.html" class="flex items-center justify-center py-4 rounded-xl bg-[#39FF14] text-black font-black uppercase tracking-widest text-[11px] shadow-lg">Signup</a>
         </div>
      </div>
    </div>
  </div>
</nav>
`;

  /* ===============================
     INJECT PREMIUM CSS
  =============================== */
  const customStyles = document.createElement('style');
  customStyles.textContent = `
    :root {
      --laser-green: #39FF14;
      --laser-glow: rgba(57, 255, 20, 0.4);
    }

    /* Premium Typography & Smoothing */
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Active Link State */
    .active-nav-link {
      background: var(--laser-green) !important;
      color: black !important;
      box-shadow: 0 4px 15px var(--laser-glow);
    }
    
    .active-nav-link span { color: black !important; }
    
    html.dark .active-nav-link {
      background: var(--laser-green) !important;
      color: black !important;
    }

    /* Nav Hover Animation */
    .nav-link-base {
      position: relative;
      overflow: hidden;
    }

    /* RTL Adjustments */
    [dir="rtl"] .ml-auto { margin-left: 0; margin-right: auto; }
    [dir="rtl"] .mr-3 { margin-right: 0; margin-left: 0.75rem; }
    [dir="rtl"] .space-x-1 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    [dir="rtl"] .space-x-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    [dir="rtl"] .space-x-3 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    [dir="rtl"] .space-x-6 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }

    /* Solid Background Scroll Effect */
    nav.scrolled {
      background: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    }
    
    html.dark nav.scrolled {
      background: black;
      border-color: rgba(57, 255, 20, 0.3);
    }

    /* Seamless Mobile Menu Animation */
    #mobileMenu {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      visibility: hidden;
      border-top-width: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
    #mobileMenu.active {
      max-height: 100vh;
      opacity: 1;
      visibility: visible;
      border-top-width: 1px;
      padding-top: 1rem;
      padding-bottom: 3rem;
      overflow-y: auto;
    }
  `;
  document.head.appendChild(customStyles);

  /* ===============================
     SCROLL EFFECT
  =============================== */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  /* ===============================
     ACTIVE LINK HIGHLIGHTING
  =============================== */
  const currentPage = window.location.pathname.split("/").pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('a[href]');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      // Don't highlight the logo or action buttons
      if (!link.classList.contains('group') && !link.getAttribute('href').includes('quote.html')) {
        link.classList.add('active-nav-link');

        // IMPORTANT: Highlight parent dropdown button if page is inside a menu
        // FIX: Added `&& dropdownMenu.id !== 'mobileMenu'` to prevent hamburger glitch
        const dropdownMenu = link.closest('[id$="Menu"]');
        if (dropdownMenu && dropdownMenu.id !== 'mobileMenu') {
            const parentBtnId = dropdownMenu.id.replace('Menu', 'Btn');
            const parentBtn = document.getElementById(parentBtnId);
            if (parentBtn) parentBtn.classList.add('active-nav-link');
        }
      }
    }
  });

  // Explicitly handle Dashboard and Home main buttons to guarantee highlighting
  if (['user.html', 'admin.html', 'dashboard.html'].includes(currentPage)) {
      document.getElementById('dashBtn')?.classList.add('active-nav-link');
      document.getElementById('mobileDashBtn')?.classList.add('active-nav-link');
  }
  if (['index.html', 'home2.html', ''].includes(currentPage)) {
      document.getElementById('homeBtn')?.classList.add('active-nav-link');
      document.getElementById('mobileHomeBtn')?.classList.add('active-nav-link');
  }

  /* ===============================
     DROPDOWN CONTROL
  =============================== */
  const setupDropdown = (btnId, menuId) => {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = menu.classList.toggle('hidden');
      // Close other dropdowns
      document.querySelectorAll('[id$="Menu"]').forEach(m => {
        if (m.id !== menuId && m.id !== 'mobileMenu') m.classList.add('hidden');
      });
    });
  };

  setupDropdown('homeBtn', 'homeMenu');
  setupDropdown('dashBtn', 'dashMenu');
  setupDropdown('mobileHomeBtn', 'mobileHomeMenu');
  setupDropdown('mobileDashBtn', 'mobileDashMenu');

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('[id$="Menu"]').forEach(m => {
      if (m.id !== 'mobileMenu') m.classList.add('hidden');
    });
  });

  /* ===============================
     MOBILE MENU CONTROL (FIXED)
  =============================== */
  const mobileBtn = document.getElementById('mobileBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileIcon = document.getElementById('mobileIcon');

  if (mobileBtn && mobileMenu && mobileIcon) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      // Toggle menu visibility classes
      mobileMenu.classList.toggle('active');
      
      // Safely toggle the icon without overwriting the drop-shadow styling
      mobileIcon.classList.toggle('fa-bars');
      mobileIcon.classList.toggle('fa-times');
      
      // Slight scale effect on click
      mobileIcon.style.transform = 'scale(0.8)';
      setTimeout(() => mobileIcon.style.transform = 'scale(1)', 150);
    });
  }

  /* ===============================
     RTL MODE
  =============================== */
  const rtlToggles = [document.getElementById('rtlToggle'), document.getElementById('mobileRtlToggle')];
  
  function updateRTLDisplay(isRTL) {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    rtlToggles.forEach(btn => {
      if (btn) btn.querySelector('.rtl-text').textContent = isRTL ? 'LTR' : 'RTL';
    });
  }

  rtlToggles.forEach(btn => {
    btn?.addEventListener('click', () => {
      const isRTL = document.documentElement.dir === 'rtl';
      updateRTLDisplay(!isRTL);
      localStorage.setItem('NeonStudio-rtl', !isRTL);
    });
  });

  if (localStorage.getItem('NeonStudio-rtl') === 'true') {
    updateRTLDisplay(true);
  }

  /* ===============================
     DARK MODE
  =============================== */
  const darkToggles = [document.getElementById('darkToggle'), document.getElementById('mobileDarkToggle')];
  const darkIcons = [document.getElementById('darkIcon'), document.getElementById('mobileDarkIcon')];

  function updateThemeIcons(isDark) {
    darkIcons.forEach(icon => {
      if (icon) {
        icon.className = isDark ? 'fas fa-sun text-lg transition-all' : 'fas fa-moon text-lg transition-all';
      }
    });
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('NeonStudio-dark', isDark);
    updateThemeIcons(isDark);
  }

  darkToggles.forEach(btn => btn?.addEventListener('click', toggleTheme));

  // Initialize Theme (Default to Light)
  const savedDarkMode = localStorage.getItem('NeonStudio-dark') === 'true';
  if (savedDarkMode) {
    document.documentElement.classList.add('dark');
    updateThemeIcons(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcons(false);
  }
});