document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".header .navbar");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Activar/desactivar menú principal en responsive
    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Manejo de submenús en responsive
    dropdowns.forEach((dropdown) => {
        const link = dropdown.querySelector("a"); // Enlace "Productos"

        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita la navegación por defecto
            e.stopPropagation(); // Evita que el evento cierre el menú

            const submenu = dropdown.querySelector(".submenu");

            // Cerrar otros submenús antes de abrir uno nuevo
            document.querySelectorAll(".submenu").forEach((otherSubmenu) => {
                if (otherSubmenu !== submenu) {
                    otherSubmenu.classList.remove("active");
                }
            });

            submenu.classList.toggle("active"); // Mostrar u ocultar el submenú
        });
    });

    // Cerrar el menú cuando se haga clic fuera de él
    document.addEventListener("click", function (e) {
        if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
            navbar.classList.remove("active");
            document.querySelectorAll(".submenu").forEach((submenu) => {
                submenu.classList.remove("active");
            });
        }
    });
});
