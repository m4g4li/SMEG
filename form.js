document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado correctamente.');
    this.reset();
});