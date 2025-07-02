document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = emailInput.value.trim();
    const contrasena = passwordInput.value.trim();

    const correoValido = "admin@mail.com";
    const contrasenaValida = "123456";

    if (correo === correoValido && contrasena === contrasenaValida) {
      mostrarPopover("Bienvenido 😁","✅ Inicio de sesión exitoso.", true);
    } else {
      mostrarPopover("Inténtalo de nuevo 😕","❌ Credenciales incorrectas. Por favor, inténtalo nuevamente.");
    }
  });
});

function mostrarPopover(titulo, mensaje, redirigir = false) {
  const popover = document.getElementById("msgPopover");
  const mensajeTexto = document.getElementById("mensajePopover");
  const tituloPop = document.getElementById("tituloPopover");
  
  mensajeTexto.textContent = mensaje;
  tituloPop.textContent = titulo;
  popover.showPopover();

  setTimeout(() => {
    popover.hidePopover();
    if (redirigir) {
      window.location.href = "intranet.html";
    }
  }, 1500);
}