var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const messages  = document.getElementById('messages');
    let successMessage = '';

    // Display a message when user sends a form.
    if (!successMessage) {
        messages.innerHTML = `<div class="success-msg">Formuläret är skickat! Vi återkommer snarast.</div>`;
    }
});
