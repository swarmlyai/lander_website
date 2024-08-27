document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      // Here you would typically send the email to your server
      console.log(`Email submitted: ${email}`);
      alert('Thank you for your interest! We\'ll notify you when we launch.');
      form.reset();
  });
});