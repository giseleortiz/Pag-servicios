document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].style.transform = 'translateX(-100%)';
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].style.transform = 'translateX(0)';
    }

    setInterval(showNextImage, 3000);
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal
    var modal = document.getElementById("modalChatbot");

    // Obtener el enlace de la imagen del chatbot
    var chatbotLink = document.querySelector(".chatbot-logo");

    // Obtener el botón para cerrar el modal
    var closeModalButton = document.getElementById("closeModal");

    // Cuando se hace clic en el enlace
    chatbotLink.addEventListener("click", function(event) {
        // Mostrar el modal
        modal.style.display = "block";
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
    });

    // Cuando se hace clic en el botón para cerrar el modal
    closeModalButton.addEventListener("click", function() {
        // Ocultar el modal
        modal.style.display = "none";
    });

    // Cuando se hace clic en cualquier lugar fuera del modal, cerrar el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal y el elemento de entrada de texto
    var modal = document.getElementById("modalChatbot");
    var inputField = document.getElementById("userInput");

    // Cuando se hace clic en el enlace
    document.querySelector(".chatbot-logo").addEventListener("click", function(event) {
        // Mostrar el modal
        modal.style.display = "block";
        // Enfocar el campo de entrada de texto
        inputField.focus();
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
    });

    // Manejar el envío del formulario (pregunta del usuario)
    document.getElementById("chatbotForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener la pregunta del usuario
        var userQuestion = inputField.value;

        // Enviar la pregunta al chatbot y obtener la respuesta
        window.dfMessenger.sendTextQuery(userQuestion);

        // Limpiar el campo de entrada
        inputField.value = "";
    });

    // Cuando se hace clic en el botón para cerrar el modal
    document.getElementById("closeModal").addEventListener("click", function() {
        // Ocultar el modal
        modal.style.display = "none";
    });

    // Cuando se hace clic en cualquier lugar fuera del modal, cerrar el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});