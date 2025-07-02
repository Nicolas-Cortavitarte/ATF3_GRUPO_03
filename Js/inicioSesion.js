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
            alert("✅ Inicio de sesión exitoso. Serás redirigido a la intranet.");
            window.location.href = "intranet.html";
        } else {
            alert("❌ Credenciales incorrectas. Por favor, inténtalo nuevamente.");
        }
    });
});