// Enhanced Portfolio JavaScript

// ANIMATION TEXT FOR DESIGNATION
const designationText = document.getElementById("sec-text")
const designationArray = ["UI/UX Designer", "AI Developer", "Graphic Designer", "Research Enthusiastic"]
let currentDesignation = 0

function changeDesignation() {
  if (designationText) {
    designationText.style.opacity = "0"
    setTimeout(() => {
      designationText.textContent = designationArray[currentDesignation]
      designationText.style.opacity = "1"
      currentDesignation = (currentDesignation + 1) % designationArray.length
    }, 300)
  }
}

// Start designation animation
setInterval(changeDesignation, 5000)

// ENHANCED MOBILE MENU
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav_toggle")
  const navMenu = document.getElementById("nav_menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")

      // Prevent body scroll when menu is open
      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
    })
  }

  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll(".nav_link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
        document.body.style.overflow = "auto"
      }
    })
  })
})

// ENHANCED ACTIVE LINK MANAGEMENT
const navLinks = document.querySelectorAll(".nav_link")

function setActiveLink() {
  const sections = document.querySelectorAll(".section")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

// Handle nav link clicks
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()

    // Remove active class from all links
    navLinks.forEach((l) => l.classList.remove("active"))

    // Add active class to clicked link
    this.classList.add("active")

    // Close mobile menu
    const navMenu = document.getElementById("nav_menu")
    const navToggle = document.getElementById("nav_toggle")
    if (navMenu && navToggle) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
      document.body.style.overflow = "auto"
    }

    // Smooth scroll to section
    const targetId = this.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ENHANCED SCROLL PROGRESS BAR
function updateScrollProgress() {
  const scrollProgress = document.getElementById("scroll-progress")
  if (scrollProgress) {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    scrollProgress.style.width = scrollPercent + "%"
  }
}

// ENHANCED LOADING SCREEN
function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen")
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = "0"
      setTimeout(() => {
        loadingScreen.style.display = "none"
      }, 500)
    }, 1500)
  }
}

// ENHANCED STATS COUNTER ANIMATION
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number")

  statNumbers.forEach((stat) => {
    const target = Number.parseInt(stat.getAttribute("data-count"))
    const increment = target / 50
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        stat.textContent = Math.ceil(current)
        requestAnimationFrame(updateCounter)
      } else {
        stat.textContent = target
      }
    }

    updateCounter()
  })
}

// ENHANCED SKILL BAR ANIMATION
function animateSkillBars() {
  const skillLevels = document.querySelectorAll(".skill_level")

  skillLevels.forEach((skill) => {
    const level = skill.getAttribute("data-level")
    skill.style.width = level + "%"
  })
}

// INTERSECTION OBSERVER FOR ANIMATIONS
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Trigger specific animations
      if (entry.target.classList.contains("about_stats")) {
        animateStats()
      }

      if (entry.target.classList.contains("skills_grid")) {
        setTimeout(animateSkillBars, 500)
      }
    }
  })
}, observerOptions)

// ENHANCED BACK TO TOP BUTTON
function handleBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top")

  if (backToTopBtn) {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show")
    } else {
      backToTopBtn.classList.remove("show")
    }

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
}

// ENHANCED FORM HANDLING
function handleContactForm() {
  const contactForm = document.querySelector(".contact_form")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const name = this.querySelector('input[type="text"]').value
      const email = this.querySelector('input[type="email"]').value
      const subject = this.querySelector('input[placeholder="Subject"]').value
      const message = this.querySelector("textarea").value

      // Create mailto link
      const mailtoLink = `mailto:vendhanv59@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

      // Open email client
      window.location.href = mailtoLink

      // Show success message (you can customize this)
      alert("Thank you for your message! Your email client should open now.")

      // Reset form
      this.reset()
    })
  }
}

// ENHANCED PARALLAX EFFECT
function handleParallax() {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".floating-card")

  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
}

// ENHANCED PARTICLE ANIMATION
function createParticles() {
  const particlesContainer = document.querySelector(".particles-container")

  if (particlesContainer && window.innerWidth > 768) {
    // Clear existing particles
    particlesContainer.innerHTML = ""

    // Create new particles
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement("div")
      particle.classList.add("particle")
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 15 + "s"
      particle.style.animationDuration = Math.random() * 10 + 10 + "s"
      particlesContainer.appendChild(particle)
    }
  }
}

// ENHANCED SMOOTH SCROLLING FOR ANCHOR LINKS
function enhancedSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const href = this.getAttribute("href")

      // Handle logo click (href="#")
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        return
      }

      const target = document.querySelector(href)

      if (target) {
        const headerOffset = 80
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// ENHANCED HEADER SCROLL EFFECT
function handleHeaderScroll() {
  const header = document.querySelector(".header")

  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "rgba(247, 250, 252, 0.98)"
      header.style.backdropFilter = "blur(20px)"
    } else {
      header.style.background = "rgba(247, 250, 252, 0.95)"
      header.style.backdropFilter = "blur(10px)"
    }
  }
}

// ENHANCED TYPING EFFECT FOR DESIGNATION
function enhancedTypingEffect() {
  const designationElement = document.getElementById("sec-text")
  if (!designationElement) return

  let currentIndex = 0
  let currentText = ""
  let isDeleting = false

  function type() {
    const fullText = designationArray[currentIndex]

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1)
    } else {
      currentText = fullText.substring(0, currentText.length + 1)
    }

    designationElement.textContent = currentText

    let typeSpeed = isDeleting ? 50 : 100

    if (!isDeleting && currentText === fullText) {
      typeSpeed = 2000
      isDeleting = true
    } else if (isDeleting && currentText === "") {
      isDeleting = false
      currentIndex = (currentIndex + 1) % designationArray.length
      typeSpeed = 500
    }

    setTimeout(type, typeSpeed)
  }

  // Start typing effect
  setTimeout(type, 1000)
}

// ENHANCED SCROLL EVENT HANDLER
function handleScroll() {
  updateScrollProgress()
  setActiveLink()
  handleBackToTop()
  handleHeaderScroll()

  // Throttle parallax for performance
  if (window.innerWidth > 768) {
    requestAnimationFrame(handleParallax)
  }
}

// ENHANCED RESIZE HANDLER
function handleResize() {
  createParticles()

  // Close mobile menu on resize to desktop
  if (window.innerWidth > 768) {
    const navMenu = document.getElementById("nav_menu")
    const navToggle = document.getElementById("nav_toggle")

    if (navMenu && navToggle) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  }
}

// ENHANCED INITIALIZATION
function initializePortfolio() {
  // Hide loading screen
  hideLoadingScreen()

  // Initialize AOS
  if (typeof AOS !== "undefined") {
    window.AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    })
  }

  // Initialize enhanced typing effect
  enhancedTypingEffect()

  // Initialize particles
  createParticles()

  // Initialize smooth scrolling
  enhancedSmoothScroll()

  // Initialize form handling
  handleContactForm()

  // Observe elements for animations
  const elementsToObserve = document.querySelectorAll(
    ".about_stats, .skills_grid, .fade-in, .slide-in-left, .slide-in-right, .scale-in",
  )
  elementsToObserve.forEach((el) => observer.observe(el))

  // Initial scroll handler call
  handleScroll()
}

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", initializePortfolio)
window.addEventListener("scroll", handleScroll)
window.addEventListener("resize", handleResize)

// ENHANCED ERROR HANDLING
window.addEventListener("error", (e) => {
  console.warn("Portfolio Error:", e.error)
})

// ENHANCED PERFORMANCE OPTIMIZATION
let ticking = false

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(handleScroll)
    ticking = true
  }
}

// Replace the scroll event listener with throttled version
window.removeEventListener("scroll", handleScroll)
window.addEventListener("scroll", () => {
  requestTick()
  ticking = false
})

// ACCESSIBILITY ENHANCEMENTS
document.addEventListener("keydown", (e) => {
  // Close mobile menu with Escape key
  if (e.key === "Escape") {
    const navMenu = document.getElementById("nav_menu")
    const navToggle = document.getElementById("nav_toggle")

    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  }
})

// ENHANCED PRELOADER
function enhancedPreloader() {
  const loadingProgress = document.querySelector(".loading-progress")

  if (loadingProgress) {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
      }
      loadingProgress.style.width = progress + "%"
    }, 100)
  }
}

// Start enhanced preloader
enhancedPreloader()

// Ensure the mobile menu closes when clicking outside
document.addEventListener("click", (event) => {
  const navMenu = document.getElementById("nav_menu")
  const navToggle = document.getElementById("nav_toggle")

  if (navMenu && navToggle && !navMenu.contains(event.target) && !navToggle.contains(event.target)) {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
    document.body.style.overflow = "auto"
  }
})
// Theme Toggle

const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.className = "bx bx-sun";
}

// Toggle Theme
toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.className = "bx bx-sun";
        localStorage.setItem("theme", "dark");
    } else {
        icon.className = "bx bx-moon";
        localStorage.setItem("theme", "light");
    }

});