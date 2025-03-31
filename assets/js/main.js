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
  const conditionalFields = {
    pitting: "pitting-sq-ft",
    "hollow-spots": "hollow-spots-sq-ft",
    "chipping-flaking": "chipping-flaking-sq-ft",
    cracks: "cracks-linear-ft",
    "heaving-settling": "heaving-settling-inches",
    "existing-coatings": "coating-type",
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
          if (radioName === "existing-coatings") {
            conditionalField.focus()
          }
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
})

