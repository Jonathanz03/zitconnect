/* ZIT Connect — Contact Form Handler */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const messageEl = document.getElementById('formMessage');
    const originalText = submitBtn.innerHTML;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="lang-fr">Envoi en cours...</span><span class="lang-es">Enviando...</span>';

    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      _next: window.location.href // Redirect after submit (optional)
    };

    // Send to Formspree
    fetch('https://formspree.io/f/mqpzbpln', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        // Success
        messageEl.classList.remove('error');
        messageEl.classList.add('success');
        messageEl.innerHTML = '<span class="lang-fr">✓ Merci! Je vais vous répondre rapidement.</span><span class="lang-es">✓ ¡Gracias! Le responderé pronto.</span>';

        // Reset form
        contactForm.reset();

        // Reset button
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          messageEl.classList.remove('success');
        }, 4000);
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      messageEl.classList.remove('success');
      messageEl.classList.add('error');
      messageEl.innerHTML = '<span class="lang-fr">✗ Erreur lors de l\'envoi. Vérifiez votre connexion.</span><span class="lang-es">✗ Error al enviar. Verifique su conexión.</span>';

      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Hide error after 5 seconds
      setTimeout(() => {
        messageEl.classList.remove('error');
      }, 5000);
    });
  });
});
