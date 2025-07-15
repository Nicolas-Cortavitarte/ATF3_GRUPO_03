document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        limpiarErrores();

        let isValid = true;

        const campos = {
            nombres: document.getElementById("nombres"),
            apellidos: document.getElementById("apellidos"),
            correo: document.getElementById("correo"),
            numero: document.getElementById("numero"),
            pass1: document.getElementById("pass1"),
            pass2: document.getElementById("pass2")
        };

        if (campos.nombres.value.trim() === "") {
            mostrarError(campos.nombres, "Ingrese sus nombres.");
            isValid = false;
        }

        if (campos.apellidos.value.trim() === "") {
            mostrarError(campos.apellidos, "Ingrese sus apellidos.");
            isValid = false;
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(campos.correo.value)) {
            mostrarError(campos.correo, "Correo electrónico inválido.");
            isValid = false;
        }

        if (!/^\d{9}$/.test(campos.numero.value)) {
            mostrarError(campos.numero, "Número debe tener 9 dígitos.");
            isValid = false;
        }

        if (campos.pass1.value.length < 6) {
            mostrarError(campos.pass1, "La contraseña debe tener al menos 6 caracteres.");
            isValid = false;
        }

        if (campos.pass1.value !== campos.pass2.value) {
            mostrarError(campos.pass2, "Las contraseñas no coinciden.");
            isValid = false;
        }

        if (isValid) {
            alert("Cuenta creada exitosamente.");
            form.reset();
        }
    });

    function mostrarError(input, mensaje) {
        const error = document.createElement("div");
        error.className = "mensaje-error";
        error.innerText = mensaje;
        input.parentNode.insertBefore(error, input.nextSibling);
    }

    function limpiarErrores() {
        const errores = document.querySelectorAll(".mensaje-error");
        errores.forEach(error => error.remove());
    }
});