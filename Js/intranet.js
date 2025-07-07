document.addEventListener("DOMContentLoaded", function () {
    window.cerrarSesion = function() {
        const confirmacion = confirm("¿Realmente desea cerrar sesión?");
        
        if (confirmacion) {
            window.location.href = "login.html";
        }

    };
});
