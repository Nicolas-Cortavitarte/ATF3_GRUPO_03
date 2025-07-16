document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Formulario');
    const dialogModal = document.getElementById('dialogModal');
    const btnCerrarModal = document.getElementById('btnCerrarModal');

    function setBorderColor(input, isValid) {
        if (input.value.trim() === "") {
            input.style.borderColor = "#f8fffc"; 
        } else {
            input.style.borderColor = isValid ? "green" : "red";
        }
    }

    function validarNombre() {
        const campo = document.getElementById('txtNombre');
        const valido = campo.value.trim().length >= 3;
        setBorderColor(campo, valido);
    }

    function validarNumero() {
        const campo = document.getElementById('txtNumero');
        const regex = /^[0-9]{9}$/;
        const valido = regex.test(campo.value.trim());
        setBorderColor(campo, valido);
    }

    function validarCorreo() {
        const campo = document.getElementById('txtCorreo');
        const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        const valido = regex.test(campo.value.trim());
        setBorderColor(campo, valido);
    }

    const nombreField = document.getElementById('txtNombre');
    const numeroField = document.getElementById('txtNumero');
    const correoField = document.getElementById('txtCorreo');

    nombreField.addEventListener('input', validarNombre);
    nombreField.addEventListener('blur', validarNombre);

    numeroField.addEventListener('input', validarNumero);
    numeroField.addEventListener('blur', validarNumero);

    correoField.addEventListener('input', validarCorreo);
    correoField.addEventListener('blur', validarCorreo);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = nombreField.value.trim();
        const numero = numeroField.value.trim();
        const correo = correoField.value.trim();
        const consulta = form.txtConsulta.value.trim();

        if (!nombre || !numero || !correo || !consulta) {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        document.getElementById('resNombre').textContent = nombre;
        document.getElementById('resNumero').textContent = numero;
        document.getElementById('resCorreo').textContent = correo;
        document.getElementById('resConsulta').textContent = consulta;

        fetch('https://formsubmit.co/ajax/happypets.can@gmail.com', {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                dialogModal.showModal();
            } else {
                alert("Error al enviar el formulario.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error al enviar el formulario.");
        });
    });

    btnCerrarModal.addEventListener('click', function () {
        dialogModal.close();
        form.reset();
        
        [nombreField, numeroField, correoField].forEach(el => {
            el.style.borderColor = "#f8fffc";
        });
    });
});
