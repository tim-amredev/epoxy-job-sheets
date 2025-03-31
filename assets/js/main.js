document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")

      // Toggle aria-expanded attribute
      const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false
      menuToggle.setAttribute("aria-expanded", !expanded)
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (navLinks && navLinks.classList.contains("active") && !event.target.closest(".main-nav")) {
      navLinks.classList.remove("active")
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false")
      }
    }
  })

  // Form validation
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      const requiredFields = form.querySelectorAll("[required]")
      let isValid = true

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.classList.add("error")
        } else {
          field.classList.remove("error")
        }
      })

      if (!isValid) {
        event.preventDefault()
        alert("Please fill in all required fields.")
      }
    })
  })
})

