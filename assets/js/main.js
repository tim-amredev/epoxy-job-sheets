// Use IIFE to avoid polluting global namespace
;(() => {
  // Wait for DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize components with a small delay to prioritize rendering
    setTimeout(initComponents, 100)
  })

  // Initialize all interactive components
  function initComponents() {
    initMobileMenu()
    initDropdowns()
    initFormValidation()
    initFileValidation()
    initConditionalFields()

    // Only initialize patriotic theme if needed
    if (document.body.classList.contains("patriotic-theme")) {
      initPatrioticTheme()
    }
  }

  // Mobile menu functionality
  function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle")
    const navLinks = document.querySelector(".nav-links")

    if (!menuToggle || !navLinks) return

    // Toggle menu on click
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active")

      // Toggle aria-expanded attribute
      const expanded = this.getAttribute("aria-expanded") === "true" || false
      this.setAttribute("aria-expanded", !expanded)
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (navLinks.classList.contains("active") && !event.target.closest(".main-nav")) {
        navLinks.classList.remove("active")
        if (menuToggle) {
          menuToggle.setAttribute("aria-expanded", "false")
        }
      }
    })
  }

  // Dropdown menu functionality
  function initDropdowns() {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        // Only prevent default on mobile
        if (window.innerWidth <= 768) {
          e.preventDefault()

          // Close other open dropdowns first
          const allDropdowns = document.querySelectorAll(".dropdown")
          allDropdowns.forEach(function (dropdown) {
            if (dropdown !== this.closest(".dropdown") && dropdown.classList.contains("active")) {
              dropdown.classList.remove("active")
              dropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false")
            }
          }, this)

          // Toggle current dropdown
          const dropdown = this.closest(".dropdown")
          dropdown.classList.toggle("active")

          // Update aria attributes
          const expanded = this.getAttribute("aria-expanded") === "true" || false
          this.setAttribute("aria-expanded", !expanded)
        }
      })
    })
  }

  // Form validation
  function initFormValidation() {
    const forms = document.querySelectorAll("form")

    forms.forEach((form) => {
      // Use passive event listener for better performance
      form.addEventListener("submit", function (event) {
        let isValid = true
        const requiredFields = this.querySelectorAll("[required]")

        requiredFields.forEach((field) => {
          if (!field.value.trim()) {
            isValid = false
            field.classList.add("error")

            // Add shake animation for better feedback
            field.classList.add("shake")
            setTimeout(() => {
              field.classList.remove("shake")
            }, 500)
          } else {
            field.classList.remove("error")
          }
        })

        if (!isValid) {
          event.preventDefault()

          // Scroll to first error with smooth behavior
          const firstError = form.querySelector(".error")
          if (firstError) {
            firstError.focus()
            window.scrollTo({
              top: firstError.getBoundingClientRect().top + window.pageYOffset - 100,
              behavior: "smooth",
            })
          }

          // Show error message
          alert("Please fill in all required fields.")
        }
      })
    })
  }

  // File size validation
  function initFileValidation() {
    const fileInputs = document.querySelectorAll('input[type="file"]')
    const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB in bytes

    fileInputs.forEach((input) => {
      // Create warning element only once
      const sizeWarning = document.createElement("div")
      sizeWarning.className = "file-size-warning"
      sizeWarning.style.display = "none"
      sizeWarning.style.color = "#ff0000"
      sizeWarning.style.marginTop = "5px"
      sizeWarning.textContent = "Warning: File exceeds 5MB limit. Please use a smaller file or provide a link instead."

      input.parentNode.insertBefore(sizeWarning, input.nextSibling)

      // Use passive event listener for better performance
      input.addEventListener(
        "change",
        function () {
          const file = this.files[0]
          if (file && file.size > MAX_FILE_SIZE) {
            sizeWarning.style.display = "block"
          } else {
            sizeWarning.style.display = "none"
          }
        },
        { passive: true },
      )
    })
  }

  // Conditional fields functionality
  function initConditionalFields() {
    // Combine all conditional fields
    const conditionalFields = {
      // Concrete evaluation form
      pitting: "pitting-sq-ft",
      "hollow-spots": "hollow-spots-sq-ft",
      "chipping-flaking": "chipping-flaking-sq-ft",
      cracks: "cracks-linear-ft",
      "heaving-settling": "heaving-settling-inches",
      "existing-coatings": "coating-type",

      // Roof evaluation form
      "roof-leaking": "leak-location",
      "interior-water-damage": "water-damage-location",
      "ceiling-stained": "ceiling-stain-location",
      "ceiling-bubbling": "ceiling-bubbling-location",
      "rotted-wood": "rotted-wood-location",
      "damaged-rafters": "damaged-rafters-location",

      // Window evaluation form
      "rotten-wood": "rotten-wood-location",
    }

    // Set up event listeners for radio buttons
    Object.keys(conditionalFields).forEach((radioName) => {
      const radioButtons = document.querySelectorAll(`input[name="${radioName}"]`)
      const conditionalFieldId = conditionalFields[radioName]

      radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
          const conditionalField = document.getElementById(conditionalFieldId)
          if (!conditionalField) return

          const conditionalFieldContainer = conditionalField.closest(".form-group")
          if (!conditionalFieldContainer) return

          if (this.value === "Yes") {
            conditionalFieldContainer.style.display = "block"
            conditionalField.focus()
          } else {
            conditionalFieldContainer.style.display = "none"
            conditionalField.value = ""
          }
        })
      })
    })

    // Initialize conditional fields on page load
    Object.keys(conditionalFields).forEach((radioName) => {
      const radioChecked = document.querySelector(`input[name="${radioName}"]:checked`)
      if (radioChecked) {
        // Use synthetic event to trigger change handler
        const event = new Event("change")
        radioChecked.dispatchEvent(event)
      } else {
        const conditionalFieldId = conditionalFields[radioName]
        const conditionalField = document.getElementById(conditionalFieldId)
        if (conditionalField) {
          const conditionalFieldContainer = conditionalField.closest(".form-group")
          if (conditionalFieldContainer) {
            conditionalFieldContainer.style.display = "none"
          }
        }
      }
    })
  }

  // Patriotic theme enhancements
  function initPatrioticTheme() {
    // Add subtle star animation to patriotic headers
    const patrioticHeaders = document.querySelectorAll(".patriotic-header")

    patrioticHeaders.forEach((header) => {
      // Create and append a limited number of stars for performance
      for (let i = 0; i < 3; i++) {
        const star = document.createElement("span")
        star.className = "floating-star"
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.animationDelay = `${Math.random() * 5}s`
        star.style.opacity = `${0.1 + Math.random() * 0.3}`
        star.style.fontSize = `${10 + Math.random() * 10}px`
        star.innerHTML = "★"
        header.appendChild(star)
      }
    })

    // Add subtle hover effect to form groups using event delegation
    const patrioticForm = document.querySelector(".patriotic-form")
    if (patrioticForm) {
      patrioticForm.addEventListener("mouseover", (e) => {
        const formGroup = e.target.closest(".form-group, .form-group-radio")
        if (formGroup) {
          formGroup.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)"
        }
      })

      patrioticForm.addEventListener("mouseout", (e) => {
        const formGroup = e.target.closest(".form-group, .form-group-radio")
        if (formGroup) {
          formGroup.style.boxShadow = "none"
        }
      })
    }
  }
})()

