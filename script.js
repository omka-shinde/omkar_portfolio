// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Handle form submission with an alert
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
  });
  