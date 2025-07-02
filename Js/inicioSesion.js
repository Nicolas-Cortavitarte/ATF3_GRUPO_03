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
      mostrarDialogo("✅ Inicio de sesión exitoso. Serás redirigido a la intranet.", true);
    } else {
      mostrarDialogo("❌ Credenciales incorrectas. Por favor, inténtalo nuevamente.");
    }
  });
});

function mostrarDialogo(mensaje, redirigir = false) {
  const dialog = document.getElementById("dialogModal");
  dialog.querySelector("h2").textContent = "Mensaje";
  dialog.querySelector("p").textContent = mensaje;
  dialog.showModal();

  if (redirigir) {
    setTimeout(() => {
      dialog.close();
      window.location.href = "intranet.html";
    }, 2000);
  }
}
