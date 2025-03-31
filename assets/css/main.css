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
  --patriotic-light-blue: #5c5b8e;
  --patriotic-light-red: #d24254;
  --patriotic-bg: #f8f8ff; /* Almost white background */
  --patriotic-text: #333333;
  --patriotic-border: #b22234;
  --patriotic-shadow: rgba(60, 59, 110, 0.2);
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

/* Full Patriotic Theme Styling */
.patriotic-theme {
  background-color: var(--patriotic-bg);
  color: var(--patriotic-text);
}

.patriotic-theme .site-header {
  background: linear-gradient(135deg, var(--patriotic-blue) 0%, var(--patriotic-red) 100%);
  box-shadow: 0 4px 15px var(--patriotic-shadow);
}

.patriotic-theme .site-footer {
  background: linear-gradient(135deg, var(--patriotic-blue) 0%, var(--patriotic-red) 100%);
  color: var(--patriotic-white);
}

.patriotic-theme .footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.patriotic-main {
  background-color: var(--patriotic-bg);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233c3b6e' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Enhanced Patriotic Header */
.patriotic-header {
  background: linear-gradient(135deg, var(--patriotic-red) 0%, var(--patriotic-blue) 100%);
  position: relative;
  overflow: hidden;
  border-radius: 0 0 30% 30% / 15%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.patriotic-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%23ffffff' fill-opacity='0.15' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'%3E%3C/path%3E%3C/svg%3E");
  z-index: 0;
  opacity: 0.7;
}

.patriotic-header .container {
  position: relative;
  z-index: 1;
  padding: 3rem 0;
}

.patriotic-header h1,
.patriotic-header h2 {
  color: var(--patriotic-white);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
}

.patriotic-header h1::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--patriotic-white);
  border-radius: 2px;
}

.page-header.patriotic-header {
  padding: 5rem 0 6rem;
}

/* Enhanced Form Section Headers */
.form-section-header.patriotic-header {
  background: linear-gradient(90deg, var(--patriotic-red) 0%, var(--patriotic-blue) 100%);
  border-bottom: none;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateZ(0);
  overflow: hidden;
}

.form-section-header.patriotic-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  z-index: 0;
}

.form-section-header.patriotic-header h2 {
  color: var(--patriotic-white);
  margin-bottom: 0;
  position: relative;
  z-index: 1;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
}

.form-section-header.patriotic-header h2::before {
  content: "★";
  margin-right: 10px;
  font-size: 1.2rem;
}

/* Enhanced Patriotic Form Section */
.patriotic-section {
  background-color: var(--patriotic-bg);
  padding: 3rem 0 5rem;
}

.patriotic-section .form-intro {
  color: var(--patriotic-text);
  font-weight: 500;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--patriotic-red);
  border-right: 4px solid var(--patriotic-blue);
}

/* Enhanced Patriotic Form Styling */
.patriotic-form {
  background-color: var(--patriotic-white);
  color: var(--patriotic-text);
  border: none;
  border-radius: 12px;
  box-shadow: 0 15px 40px var(--patriotic-shadow);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
}

.patriotic-form::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--patriotic-red) 0%, var(--patriotic-white) 50%, var(--patriotic-blue) 100%);
}

.patriotic-form label {
  color: var(--patriotic-blue);
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
}

.patriotic-form label.required::after {
  content: " *";
  color: var(--patriotic-red);
  font-size: 1.2rem;
  margin-left: 4px;
}

.patriotic-form input[type="text"],
.patriotic-form input[type="number"],
.patriotic-form input[type="email"],
.patriotic-form input[type="tel"],
.patriotic-form input[type="date"],
.patriotic-form select,
.patriotic-form textarea {
  border: 2px solid #d1d5db;
  border-radius: 8px;
  background-color: var(--patriotic-white);
  color: var(--patriotic-text);
  padding: 0.9rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.patriotic-form input:focus,
.patriotic-form select:focus,
.patriotic-form textarea:focus {
  border-color: var(--patriotic-blue);
  box-shadow: 0 0 0 3px rgba(60, 59, 110, 0.2);
  outline: none;
}

.patriotic-form input:hover,
.patriotic-form select:hover,
.patriotic-form textarea:hover {
  border-color: var(--patriotic-light-blue);
}

/* Enhanced Radio Button Styling */
.patriotic-form .radio-group {
  display: flex;
  gap: 2rem;
  margin-top: 0.75rem;
  align-items: center;
  min-height: 2.5rem;
}

.patriotic-form .radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
  margin-bottom: 0;
  position: relative;
  padding-left: 35px;
  font-size: 1.05rem;
}

.patriotic-form .radio-label input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.patriotic-form .radio-label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border: 2px solid var(--patriotic-blue);
  border-radius: 50%;
  background-color: white;
  transition: all 0.2s ease;
}

.patriotic-form .radio-label::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--patriotic-red);
  transition: all 0.2s ease;
  opacity: 0;
}

.patriotic-form .radio-label input[type="radio"]:checked ~ ::after {
  opacity: 1;
}

.patriotic-form .radio-label:hover::before {
  border-color: var(--patriotic-red);
}

/* Form Group Styling */
.patriotic-form .form-group {
  margin-bottom: 2rem;
  position: relative;
  transition: all 0.3s ease;
}

.patriotic-form .form-group:hover {
  transform: translateY(-2px);
}

/* Alternating rows with better styling */
.patriotic-form .form-group-radio {
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.patriotic-form .form-group-radio:nth-child(odd) {
  background-color: rgba(60, 59, 110, 0.05);
}

.patriotic-form .form-group:nth-child(odd):not(.full-width) {
  background-color: rgba(60, 59, 110, 0.05);
  padding: 1rem;
  border-radius: 8px;
}

/* Enhanced Submit Button */
.btn-patriotic {
  background: linear-gradient(135deg, var(--patriotic-red) 0%, var(--patriotic-blue) 100%);
  color: var(--patriotic-white);
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: bold;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.btn-patriotic::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all 0.6s ease;
}

.btn-patriotic:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(135deg, var(--patriotic-blue) 0%, var(--patriotic-red) 100%);
}

.btn-patriotic:hover::before {
  left: 100%;
}

/* File Upload Styling */
.patriotic-form input[type="file"] {
  padding: 0.75rem 0;
  border: none;
  background-color: transparent;
  width: 100%;
}

.patriotic-form input[type="file"]::file-selector-button {
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  background-color: var(--patriotic-blue);
  border: none;
  color: var(--patriotic-white);
  cursor: pointer;
  margin-right: 1rem;
  transition: all 0.3s ease;
  font-weight: 600;
}

.patriotic-form input[type="file"]::file-selector-button:hover {
  background-color: var(--patriotic-red);
  transform: translateY(-2px);
}

/* Form Help Text */
.patriotic-form .form-help-text {
  color: var(--patriotic-light-blue);
  font-style: italic;
  margin-top: 0.5rem;
}

/* Conditional Field Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.patriotic-form .form-group.fade-in {
  animation: fadeIn 0.4s ease forwards;
}

/* Star decoration for the form */
.patriotic-form::before {
  content: "";
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='60' height='60'%3E%3Cpath fill='%233c3b6e' fill-opacity='0.1' d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  z-index: 0;
  opacity: 0.5;
}

/* Add a subtle wave pattern to the bottom of the form */
.patriotic-form::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: linear-gradient(90deg, var(--patriotic-red) 0%, var(--patriotic-white) 50%, var(--patriotic-blue) 100%);
  opacity: 0.7;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .patriotic-form {
    padding: 1.5rem;
  }

  .page-header.patriotic-header {
    padding: 3rem 0 4rem;
    border-radius: 0 0 15% 15% / 10%;
  }

  .patriotic-form .radio-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

/* Add these styles at the end of the file */

/* Floating stars animation */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

.floating-star {
  position: absolute;
  color: white;
  animation: float 5s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}

/* Header glow effect */
@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
}

.header-glow {
  animation: glow 2s ease-in-out infinite;
}

/* Custom radio button checked state */
.patriotic-form .radio-label.checked::before {
  border-color: var(--patriotic-red);
  border-width: 2px;
}

.patriotic-form .radio-label.checked::after {
  opacity: 1;
}

/* Form group focus state */
.patriotic-form .form-group:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Required field indicator with animation */
.patriotic-form label.required::after {
  content: " *";
  color: var(--patriotic-red);
  font-size: 1.2rem;
  margin-left: 4px;
  display: inline-block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Enhanced form section styling */
.patriotic-form .form-section-header + .form-group,
.patriotic-form .form-section-header + .form-group-radio {
  border-top-left-radius: 0;
  position: relative;
}

.patriotic-form .form-section-header + .form-group::before,
.patriotic-form .form-section-header + .form-group-radio::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, var(--patriotic-red), var(--patriotic-blue));
  border-radius: 2px;
  opacity: 0.7;
}

/* Improved select dropdown */
.patriotic-form select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%233c3b6e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  padding-right: 40px;
}

/* Focus visible outline for accessibility */
.patriotic-form input:focus-visible,
.patriotic-form select:focus-visible,
.patriotic-form textarea:focus-visible {
  outline: 2px solid var(--patriotic-red);
  outline-offset: 2px;
}

/* Form intro animation */
.patriotic-section .form-intro {
  position: relative;
  overflow: hidden;
}

.patriotic-section .form-intro::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Submit button container */
.patriotic-form .form-group.full-width:last-child {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px dashed rgba(60, 59, 110, 0.2);
}

