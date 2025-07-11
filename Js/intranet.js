document.addEventListener("DOMContentLoaded", function () {
    const dialog = document.getElementById("dialogCerrarSesion");
    const confirmar = document.getElementById("confirmarCerrar");
    const cancelar = document.getElementById("cancelarCerrar");

    window.cerrarSesion = function () {
        dialog.showModal(); 
    };

    confirmar.addEventListener("click", function () {
        dialog.close(); 
        window.location.href = "index.html"; 
    });

    cancelar.addEventListener("click", function () {
        dialog.close(); 
    });
});
