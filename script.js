document.querySelectorAll('#year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Submit the signup form to MailerLite in the background and show an inline
// thank-you message instead of navigating away.
document.querySelectorAll('form[data-mailerlite]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    fetch(form.action, { method: 'POST', body: formData, mode: 'no-cors' }).catch(function () {});
    form.hidden = true;
    var success = form.nextElementSibling;
    if (success && success.classList.contains('signup-success')) {
      success.hidden = false;
    }
  });
});
