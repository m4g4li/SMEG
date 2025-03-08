document.addEventListener("DOMContentLoaded", function() {
    // Establece la imagen inicial como la de la opción 'BLACK'
    const blackOption = document.querySelector(".color-option.BLACK");

    // Agrega la clase 'active' al primer color (Negro)
    blackOption.classList.add("active");

    // Cambia la imagen del producto al negro
    document.querySelector(".product-pic").style.backgroundImage = `url('${blackOption.getAttribute("data-pic")}')`;

    // Cambiar el color de la caja de producto cuando el usuario haga clic en las opciones de color
    document.querySelectorAll(".product-colors span").forEach(span => {
        span.addEventListener("click", function() {
            // Quita la clase 'active' de todos los elementos
            document.querySelectorAll(".product-colors span").forEach(s => s.classList.remove("active"));
            this.classList.add("active");

            // Cambia el color de fondo de la caja del producto
            document.querySelector(".product-card").style.backgroundColor = this.getAttribute("data-color");

            // Cambia la imagen del producto correctamente
            document.querySelector(".product-pic").style.backgroundImage = `url('${this.getAttribute("data-pic")}')`;
        });
    });
});



