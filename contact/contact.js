var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const messages  = document.getElementById('messages');
    let errorMessage = '';

    if (!errorMessage) {
        messages.innerHTML = `<div class="success-msg">Formuläret är skickat! Vi återkommer snarast.</div>`;
    }
});
