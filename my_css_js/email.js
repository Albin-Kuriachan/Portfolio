function clearForm() {
  document.getElementById('form').reset();
}

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_pzaz2ba';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      swal({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        button: "OK",
      }).then(() => {
        clearForm(); // Call the function to clear the form after submission
      });
    })
    .catch((err) => {
      btn.value = 'Send Email';
      swal({
        title: "Error!",
        text: "There was an error sending your message. Please try again later.",
        icon: "error",
        button: "OK",
      });
    });
});
