/**
 * SmartProtect Landing Page
 * Main JavaScript File
 */

'use strict';

/* ========================================
   DOM ELEMENTS
======================================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById('contact-form');

/* ========================================
   MOBILE MENU TOGGLE
======================================== */
const showMenu = () => {
  if (navMenu) {
    navMenu.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  }
};

const hideMenu = () => {
  if (navMenu) {
    navMenu.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
  }
};

// Show menu
if (navToggle) {
  navToggle.addEventListener('click', showMenu);
}

// Hide menu
if (navClose) {
  navClose.addEventListener('click', hideMenu);
}

// Hide menu when clicking on nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hideMenu();
  });
});

// Hide menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMenu && navMenu.classList.contains('show')) {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      hideMenu();
    }
  }
});

/* ========================================
   ACTIVE LINK ON SCROLL
======================================== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/* ========================================
   HEADER SHADOW ON SCROLL
======================================== */
const scrollHeader = () => {
  if (window.scrollY >= 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', scrollHeader);

/* ========================================
   SCROLL TO TOP BUTTON
======================================== */
const scrollTop = () => {
  if (window.scrollY >= 400) {
    scrollTopBtn?.classList.add('show');
  } else {
    scrollTopBtn?.classList.remove('show');
  }
};

window.addEventListener('scroll', scrollTop);

// Scroll to top on button click
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
======================================== */
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    // Ignore links that are just "#"
    if (href === '#') {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
      const headerHeight = header?.offsetHeight || 70;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ========================================
   CONTACT FORM SUBMISSION
======================================== */
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      message: formData.get('message')
    };

    // Basic validation
    if (!data.name || !data.company || !data.email || !data.message) {
      showNotification('Por favor, completa todos los campos obligatorios.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showNotification('Por favor, ingresa un email válido.', 'error');
      return;
    }

    try {
      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

      // Simulate form submission (replace with actual API call)
      await simulateFormSubmission(data);

      // Success
      showNotification('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.', 'success');
      contactForm.reset();

      // Restore button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

    } catch (error) {
      showNotification('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
      console.error('Form submission error:', error);

      // Restore button
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
    }
  });
}

/* ========================================
   UTILITY FUNCTIONS
======================================== */

/**
 * Simulate form submission (replace with actual API integration)
 * @param {Object} data - Form data
 * @returns {Promise}
 */
const simulateFormSubmission = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form data:', data);
      // Here you would send data to your backend or email service
      // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      resolve();
    }, 1500);
  });
};

/**
 * Show notification message
 * @param {string} message - Notification message
 * @param {string} type - Notification type (success, error, info)
 */
const showNotification = (message, type = 'info') => {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification__content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    </div>
    <button class="notification__close" aria-label="Cerrar">
      <i class="fas fa-times"></i>
    </button>
  `;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  `;

  // Add keyframes for animation
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
      .notification__content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .notification__close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
        transition: opacity 0.2s;
      }
      .notification__close:hover {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }

  // Add to DOM
  document.body.appendChild(notification);

  // Close button functionality
  const closeBtn = notification.querySelector('.notification__close');
  closeBtn.addEventListener('click', () => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/* ========================================
   INTERSECTION OBSERVER FOR ANIMATIONS
======================================== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      entry.target.style.opacity = '1';
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.benefit-card, .pricing-card, .feature');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// Add fadeInUp animation
if (!document.querySelector('#animation-styles')) {
  const animationStyle = document.createElement('style');
  animationStyle.id = 'animation-styles';
  animationStyle.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(animationStyle);
}

/* ========================================
   KEYBOARD NAVIGATION ACCESSIBILITY
======================================== */
document.addEventListener('keydown', (e) => {
  // Close mobile menu with Escape key
  if (e.key === 'Escape' && navMenu?.classList.contains('show')) {
    hideMenu();
  }

  // Navigate to top with Home key
  if (e.key === 'Home' && e.ctrlKey) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Navigate to bottom with End key
  if (e.key === 'End' && e.ctrlKey) {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
});

/* ========================================
   PERFORMANCE OPTIMIZATION
======================================== */

// Debounce scroll events
const debouncedScrollActive = debounce(scrollActive, 100);
const debouncedScrollHeader = debounce(scrollHeader, 50);
const debouncedScrollTop = debounce(scrollTop, 100);

window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', scrollHeader);
window.removeEventListener('scroll', scrollTop);

window.addEventListener('scroll', debouncedScrollActive);
window.addEventListener('scroll', debouncedScrollHeader);
window.addEventListener('scroll', debouncedScrollTop);

/* ========================================
   CONSOLE BRANDING
======================================== */
console.log(
  '%c SmartProtect 🌞 ',
  'background: linear-gradient(135deg, #ff6b35, #ff8c5f); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;'
);
console.log(
  '%c Protección Solar Inteligente para Empresas ',
  'color: #ff6b35; font-size: 14px; font-weight: bold;'
);
console.log(
  '%c smart.sun.protect@gmail.com ',
  'color: #718096; font-size: 12px;'
);

/* ========================================
   INITIALIZATION
======================================== */
document.addEventListener('DOMContentLoaded', () => {
  console.log('SmartProtect Landing Page initialized successfully ✓');

  // Initial calls
  scrollHeader();
  scrollActive();
  scrollTop();
});
