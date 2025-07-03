document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Formulario');
    const dialogModal = document.getElementById('dialogModal');
    const btnEnviar = document.getElementById('btnEnviar');
    const btnCerrarModal = document.getElementById('btnCerrarModal');

    const resNombre = document.getElementById('resNombre');
    const resNumero = document.getElementById('resNumero');
    const resCorreo = document.getElementById('resCorreo');
    const resConsulta = document.getElementById('resConsulta');
    const confirmado = document.getElementById('confirmado');

    let listoParaEnviar = false;


    form.addEventListener('submit', function (event) {
        if (!listoParaEnviar) {
            event.preventDefault();

           
            const nombre = form.txtNombre.value.trim();
            const numero = form.txtNumero.value.trim();
            const correo = form.txtCorreo.value.trim();
            const consulta = form.txtConsulta.value.trim();

            if (!nombre || !numero || !correo || !consulta) {
                alert('Por favor, completa todos los campos antes de enviar.');
                return;
            }

            
            resNombre.textContent = nombre;
            resNumero.textContent = numero;
            resCorreo.textContent = correo;
            resConsulta.textContent = consulta;

            dialogModal.showModal();
        }
    });

   
    btnCerrarModal.addEventListener('click', function () {
        dialogModal.close();
        confirmado.value = "true";
        listoParaEnviar = true;

       
        form.submit();

       
        setTimeout(() => {
            window.location.href = " http://127.0.0.1:5501/contacto.html";
        }, 500);
    });
});

