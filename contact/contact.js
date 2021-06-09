// var contactForm = document.getElementById('contact-form');
//
// const submit    = document.getElementsByClassName('button');
// const firstname = document.getElementsByClassName('firstname');
// const lastname  = document.getElementsByClassName('lastname');
// const email     = document.getElementsByClassName('email');
// const mobile    = document.getElementsByClassName('mobile');
// const question  = document.getElementsByClassName('question');
// const messages  = document.getElementById('messages');
//
//
//
// contactForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let errorMessage = '';
//     // let re = ^\S+@\S+$;
//     console.log(firstname.value);
//     if (firstname.value === '') {
//         errorMessage += "Du måste ange ditt förnamn."
//     }
//
//     if (lastname.value === '') {
//         errorMessage += "Du måste ange ditt efternamn."
//     }
//
//     if (email.value === '') {
//         errorMessage += "Du måste ange en giltig epost."
//     }
//
//     if (mobile.value === '') {
//         errorMessage += "Du måste ange ditt mobilnummer."
//     }
//
//     if (question.value === '') {
//         errorMessage += "Du måste ange en fråga."
//     }
//
//
//     if (errorMessage) {
//         messages.innerHTML = `
//         <div class="alert-danger">${errorMessage}</div>
//         `;
//     } else {
//         messages.innerHTML = `<div class="alert-success">Formuläret är skickat! Vi återkommer snarast.</div>`;
//     }
// });


// function validateEmail(email) {
//     let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     return re;
// }
//
// function validate() {
//     if (validateEmail(email)) {
//
//     }
// }
