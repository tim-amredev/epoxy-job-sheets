/* Base Styles */
:root {
  --primary-color: #ff0000; /* Red from logo */
  --secondary-color: #cc0000; /* Darker red */
  --accent-color: #ff3333; /* Lighter red */
  --text-color: #e0e0e0; /* Light text for dark backgrounds */
  --text-muted: #a0a0a0; /* Muted text color */
  --light-text: #ffffff; /* White text */
  --dark-bg: #121212; /* Very dark background */
  --card-bg: #1e1e1e; /* Slightly lighter than main background */
  --header-bg: #0a0a0a; /* Very dark header */
  --border-color: #333333; /* Dark borders */
  --input-bg: #2a2a2a; /* Dark input background */
  --input-border: #444444; /* Input border color */
  --success-color: #4caf50; /* Green */
  --error-color: #f44336; /* Red */
  --section-bg: #1a1a1a; /* Section background */
  --hover-bg: #333333; /* Hover background */

  /* Patriotic Theme for Roof Evaluation */
  /* Patriotic Colors */
  --patriotic-red: #b22234; /* Old Glory Red */
  --patriotic-white: #ffffff;
  --patriotic-blue: #3c3b6e; /* Old Glory Blue */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--dark-bg);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--primary-color);
}

img {
  max-width: 100%;
  height: auto;
}

/* Logo Styling */
.logo-image {
  max-height: 80px;
  width: auto; /* This ensures the width adjusts proportionally to the height */
  object-fit: contain; /* This ensures the image maintains its aspect ratio */
  background-color: transparent;
}

.footer-logo .logo-image {
  max-height: 70px;
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 1rem;
  line-height: 1.2;
  color: var(--light-text);
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
}

p {
  margin-bottom: 1rem;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--light-text);
}

.btn-primary:hover {
  background-color: var(--secondary-color);
  color: var(--light-text);
}

.btn-secondary {
  background-color: var(--card-bg);
  color: var(--light-text);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background-color: var(--hover-bg);
  color: var(--light-text);
}

/* Hero Buttons */
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

/* Small Button */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  margin-top: 1rem;
}

@media (max-width: 576px) {
  .hero-buttons,
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
}

/* Header */
.site-header {
  background-color: var(--header-bg);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.site-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  max-height: 80px;
  background-color: transparent;
}

.main-nav {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 1.5rem;
}

.nav-links a {
  font-weight: 600;
  color: var(--light-text);
}

.nav-links a:hover {
  color: var(--accent-color);
}

/* Dropdown Menu Styles */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--card-bg);
  min-width: 200px;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
  list-style: none;
  padding: 0.5rem 0;
}

.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--light-text);
  transition: background-color 0.3s ease;
}

.dropdown-menu a:hover {
  background-color: var(--hover-bg);
  color: var(--accent-color);
}

/* Mobile Dropdown Styles */
@media (max-width: 768px) {
  .dropdown-menu {
    position: static;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: none;
    min-width: 100%;
    opacity: 1;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    transform: none;
    transition: height 0.3s ease;
  }

  .dropdown.active .dropdown-menu {
    visibility: visible;
    height: auto;
  }

  .dropdown-toggle {
    width: 100%;
    justify-content: center;
  }
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle .bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: var(--light-text);
  transition: all 0.3s ease;
}

/* Hero Section */
.hero {
  background-color: var(--header-bg);
  color: var(--light-text);
  padding: 5rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--text-muted);
}

/* Services Section */
.services {
  padding: 5rem 0;
  background-color: var(--dark-bg);
}

.services h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-card i {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

/* CTA Section */
.cta {
  background-color: var(--header-bg);
  color: var(--light-text);
  padding: 4rem 0;
  text-align: center;
}

.cta h2 {
  margin-bottom: 1rem;
}

.cta p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: var(--text-muted);
}

/* Footer */
.site-footer {
  background-color: var(--header-bg);
  color: var(--text-color);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-logo img {
  max-height: 80px;
  margin-bottom: 1rem;
}

.footer-contact h3,
.footer-social h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--light-text);
  transition: background-color 0.3s ease;
}

.social-icons a:hover {
  background-color: var(--primary-color);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Page Header */
.page-header {
  background-color: var(--header-bg);
  color: var(--light-text);
  padding: 3rem 0;
  text-align: center;
}

/* Form Styles */
.form-section {
  padding: 3rem 0;
}

.form-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: var(--text-muted);
}

.job-form,
.contact-form form {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group.full-width {
  grid-column: span 2;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--light-text);
}

/* Remove the default asterisk styling */
label::after {
  content: "";
}

/* Add red asterisk only to required fields */
label.required::after {
  content: " *";
  color: var(--primary-color);
}

/* Enhanced Form Styling */
input[type="text"],
input[type="number"],
input[type="email"],
input[type="tel"],
input[type="date"],
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--primary-color); /* Red border for all input fields */
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  background-color: var(--input-bg);
  color: var(--light-text);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.2);
}

textarea {
  resize: vertical;
}

/* Form Section Headers */
.form-section-header {
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
  grid-column: span 2;
}

.form-section-header h2 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0;
}

/* First section header doesn't need top margin */
.form-section-header:first-of-type {
  margin-top: 0;
}

/* Form Help Text */
.form-help-text {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
}

/* File Upload Styling */
input[type="file"] {
  padding: 0.5rem 0;
  border: none;
  background-color: transparent;
}

input[type="file"]::file-selector-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: var(--card-bg);
  border: 2px solid var(--primary-color);
  color: var(--light-text);
  cursor: pointer;
  margin-right: 1rem;
  transition: background-color 0.3s ease;
}

input[type="file"]::file-selector-button:hover {
  background-color: var(--hover-bg);
}

/* Form Validation Styling */
input:invalid,
select:invalid,
textarea:invalid {
  border-color: var(--error-color);
}

/* Improved Radio Button Styling */
.radio-group {
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
  align-items: center; /* Better vertical alignment */
  min-height: 2.5rem; /* Consistent height for all radio groups */
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
  margin-bottom: 0; /* Remove bottom margin to fix alignment */
}

.radio-label input[type="radio"] {
  width: 1.25rem; /* Larger radio buttons */
  height: 1.25rem;
  margin-right: 0.5rem;
  cursor: pointer;
  accent-color: var(--primary-color); /* Red radio buttons */
}

/* Form Group with Radio Buttons */
.form-group-radio {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.form-group-radio label {
  margin-bottom: 0.5rem;
}

/* Thank You Page */
.thank-you {
  padding: 5rem 0;
}

.thank-you-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--card-bg);
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.thank-you-content i {
  font-size: 5rem;
  color: var(--success-color);
  margin-bottom: 2rem;
}

.thank-you-content h1 {
  margin-bottom: 1rem;
}

.thank-you-content p {
  margin-bottom: 2rem;
  color: var(--text-muted);
}

/* Thank You Page Styles */
.thank-you-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 576px) {
  .thank-you-actions {
    flex-direction: column;
  }
}

/* About Page */
.about-content {
  padding: 3rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  align-items: center;
}

.about-text h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.about-text h2:first-child {
  margin-top: 0;
}

.about-text ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

/* Contact Page */
.contact-section {
  padding: 3rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.contact-item i {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
  width: 30px;
  text-align: center;
}

.contact-social {
  margin-top: 2rem;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .about-image {
    order: -1;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: var(--header-bg);
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-150%);
    transition: transform 0.3s ease;
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .nav-links li {
    margin: 1rem 0;
  }

  .job-form,
  .contact-form form {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .form-group.full-width {
    grid-column: 1;
  }

  input[type="file"] {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }
}

/* Patriotic Form Styling */
.patriotic-form {
  background-color: var(--patriotic-white);
  color: #333;
  border: 2px solid var(--patriotic-blue);
}

.patriotic-form label {
  color: var(--patriotic-blue);
  font-weight: 600;
}

.patriotic-form label.required::after {
  content: " *";
  color: var(--patriotic-red);
}

.patriotic-header {
  background: linear-gradient(135deg, var(--patriotic-red) 0%, var(--patriotic-blue) 100%);
}

.patriotic-header h1,
.patriotic-header h2 {
  color: var(--patriotic-white);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.form-section-header.patriotic-header {
  background: linear-gradient(90deg, var(--patriotic-red) 0%, var(--patriotic-blue) 100%);
  border-bottom: none;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}

.form-section-header.patriotic-header h2 {
  color: var(--patriotic-white);
  margin-bottom: 0;
}

.patriotic-form input[type="text"],
.patriotic-form input[type="number"],
.patriotic-form input[type="email"],
.patriotic-form input[type="tel"],
.patriotic-form input[type="date"],
.patriotic-form select,
.patriotic-form textarea {
  border: 2px solid var(--patriotic-blue);
  background-color: var(--patriotic-white);
  color: #333;
}

.patriotic-form input:focus,
.patriotic-form select:focus,
.patriotic-form textarea:focus {
  border-color: var(--patriotic-red);
  box-shadow: 0 0 0 2px rgba(178, 34, 52, 0.2);
}

.patriotic-form .radio-label input[type="radio"] {
  accent-color: var(--patriotic-red);
}

.btn-patriotic {
  background: linear-gradient(135deg, var(--patriotic-red) 0%, var(--patriotic-blue) 100%);
  color: var(--patriotic-white);
  border: none;
  transition: all 0.3s ease;
}

.btn-patriotic:hover {
  background: linear-gradient(135deg, var(--patriotic-blue) 0%, var(--patriotic-red) 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.patriotic-form input[type="file"]::file-selector-button {
  background-color: var(--patriotic-blue);
  border: 2px solid var(--patriotic-blue);
  color: var(--patriotic-white);
}

.patriotic-form input[type="file"]::file-selector-button:hover {
  background-color: var(--patriotic-red);
  border-color: var(--patriotic-red);
}

/* Alternating rows for better readability */
.patriotic-form .form-group-radio:nth-child(odd) {
  background-color: rgba(60, 59, 110, 0.05);
  padding: 0.5rem;
  border-radius: 4px;
}

.patriotic-form .form-group:nth-child(odd) {
  background-color: rgba(60, 59, 110, 0.05);
  padding: 0.5rem;
  border-radius: 4px;
}

