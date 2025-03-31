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

  // Mobile dropdown toggle
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault()
        this.closest(".dropdown").classList.toggle("active")
      }
    })
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

  // Conditional fields in concrete evaluation form
  const concreteConditionalFields = {
    pitting: "pitting-sq-ft",
    "hollow-spots": "hollow-spots-sq-ft",
    "chipping-flaking": "chipping-flaking-sq-ft",
    cracks: "cracks-linear-ft",
    "heaving-settling": "heaving-settling-inches",
    "existing-coatings": "coating-type",
  }

  // Conditional fields in roof evaluation form
  const roofConditionalFields = {
    "roof-leaking": "leak-location",
    "interior-water-damage": "water-damage-location",
    "ceiling-stained": "ceiling-stain-location",
    "ceiling-bubbling": "ceiling-bubbling-location",
    "rotted-wood": "rotted-wood-location",
    "damaged-rafters": "damaged-rafters-location",
  }

  // Conditional fields in window evaluation form
  const windowConditionalFields = {
    "rotten-wood": "rotten-wood-location",
  }

  // Combine all conditional fields
  const allConditionalFields = {
    ...concreteConditionalFields,
    ...roofConditionalFields,
    ...windowConditionalFields,
  }

  // Set up event listeners for radio buttons
  Object.keys(allConditionalFields).forEach((radioName) => {
    const radioButtons = document.querySelectorAll(`input[name="${radioName}"]`)
    const conditionalFieldId = allConditionalFields[radioName]

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
  Object.keys(allConditionalFields).forEach((radioName) => {
    const radioChecked = document.querySelector(`input[name="${radioName}"]:checked`)
    if (radioChecked) {
      const event = new Event("change")
      radioChecked.dispatchEvent(event)
    } else {
      const conditionalFieldId = allConditionalFields[radioName]
      const conditionalField = document.getElementById(conditionalFieldId)
      if (conditionalField) {
        const conditionalFieldContainer = conditionalField.closest(".form-group")
        if (conditionalFieldContainer) {
          conditionalFieldContainer.style.display = "none"
        }
      }
    }
  })

  // Add patriotic theme animations
  if (document.body.classList.contains("patriotic-theme")) {
    // Add subtle star animation to patriotic headers
    const patrioticHeaders = document.querySelectorAll(".patriotic-header")
    patrioticHeaders.forEach((header) => {
      header.classList.add("animated")
    })
  }

  // Enhanced animations for patriotic theme
  if (document.body.classList.contains("patriotic-theme")) {
    // Add subtle star animation to patriotic headers
    const patrioticHeaders = document.querySelectorAll(".patriotic-header")
    patrioticHeaders.forEach((header) => {
      // Create and append stars
      for (let i = 0; i < 5; i++) {
        const star = document.createElement("span")
        star.className = "floating-star"
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.animationDelay = `${Math.random() * 5}s`
        star.style.opacity = `${0.1 + Math.random() * 0.3}`
        star.style.fontSize = `${10 + Math.random() * 20}px`
        star.innerHTML = "★"
        header.appendChild(star)
      }
    })

    // Add animation to form section headers
    const sectionHeaders = document.querySelectorAll(".form-section-header.patriotic-header")
    sectionHeaders.forEach((header) => {
      header.addEventListener("mouseenter", () => {
        header.classList.add("header-glow")
      })
      header.addEventListener("mouseleave", () => {
        header.classList.remove("header-glow")
      })
    })

    // Enhance conditional field animations
    Object.keys(allConditionalFields).forEach((radioName) => {
      const radioButtons = document.querySelectorAll(`input[name="${radioName}"]`)
      const conditionalFieldId = allConditionalFields[radioName]

      radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
          const conditionalField = document.getElementById(conditionalFieldId)
          if (!conditionalField) return

          const conditionalFieldContainer = conditionalField.closest(".form-group")
          if (!conditionalFieldContainer) return

          if (this.value === "Yes") {
            conditionalFieldContainer.style.display = "block"
            conditionalFieldContainer.classList.add("fade-in")
            conditionalField.focus()
          } else {
            conditionalFieldContainer.classList.remove("fade-in")
            conditionalFieldContainer.style.display = "none"
            conditionalField.value = ""
          }
        })
      })
    })

    // Add subtle hover effect to form groups
    const formGroups = document.querySelectorAll(".patriotic-form .form-group, .patriotic-form .form-group-radio")
    formGroups.forEach((group) => {
      group.addEventListener("mouseenter", () => {
        group.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)"
      })
      group.addEventListener("mouseleave", () => {
        group.style.boxShadow = "none"
      })
    })

    // Add custom radio button behavior
    const radioLabels = document.querySelectorAll(".patriotic-form .radio-label")
    radioLabels.forEach((label) => {
      const radio = label.querySelector("input[type='radio']")
      if (!radio) return

      radio.addEventListener("change", function () {
        if (this.checked) {
          const name = this.getAttribute("name")
          document.querySelectorAll(`input[name="${name}"]`).forEach((r) => {
            const parentLabel = r.closest(".radio-label")
            if (parentLabel) {
              parentLabel.classList.remove("checked")
            }
          })
          label.classList.add("checked")
        }
      })

      // Initialize checked state
      if (radio.checked) {
        label.classList.add("checked")
      }
    })
  }
})

