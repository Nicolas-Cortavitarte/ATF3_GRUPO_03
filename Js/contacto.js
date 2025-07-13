document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Formulario');
    const dialogModal = document.getElementById('dialogModal');
    const btnCerrarModal = document.getElementById('btnCerrarModal');

    window.validarNombre = function () {
        const nombre = document.getElementById('txtNombre').value.trim();
        document.getElementById('txtNombre').style.borderColor = nombre.length < 3 ? "red" : "green";
    }

    window.validarNumero = function () {
        const numero = document.getElementById('txtNumero').value.trim();
        const regex = /^[0-9]{9}$/;
        document.getElementById('txtNumero').style.borderColor = regex.test(numero) ? "green" : "red";
    }

    window.validarCorreo = function () {
        const correo = document.getElementById('txtCorreo').value.trim();
        document.getElementById('txtCorreo').style.borderColor = correo.includes('@') ? "green" : "red";
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = form.txtNombre.value.trim();
        const numero = form.txtNumero.value.trim();
        const correo = form.txtCorreo.value.trim();
        const consulta = form.txtConsulta.value.trim();

        if (!nombre || !numero || !correo || !consulta) {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        document.getElementById('resNombre').textContent = nombre;
        document.getElementById('resNumero').textContent = numero;
        document.getElementById('resCorreo').textContent = correo;
        document.getElementById('resConsulta').textContent = consulta;

        dialogModal.showModal();
    });

    btnCerrarModal.addEventListener('click', function () {
        // Animación de salida
        dialogModal.classList.add('cerrar-animacion');

        dialogModal.addEventListener('animationend', function handler() {
            dialogModal.classList.remove('cerrar-animacion');
            dialogModal.close();
            form.submit();
            dialogModal.removeEventListener('animationend', handler);
        });
    });
});
