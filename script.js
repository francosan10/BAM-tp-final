// Obtener el formulario y el elemento de mensaje de éxito
let contactForm = document.getElementById("contact-form");
let successMessage = document.getElementById("success-message");

// Agregar un evento de envío al formulario
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores de los campos del formulario
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Validar los campos del formulario
  if (name === "" || email === "" || message === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Aquí puedes realizar cualquier acción con los datos del formulario, como enviarlos a un servidor o mostrarlos en la consola
  console.log("Nombre:", name);
  console.log("Email:", email);
  console.log("Mensaje:", message);

  // Mostrar el mensaje de éxito
  successMessage.style.display = "block";

  // Limpiar los campos del formulario
  contactForm.reset();
});
