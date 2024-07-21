document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('productForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const productDetail = document.getElementById('productDetail').value.trim();

        if (!name || !phone || !email || !productDetail) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        if (!validarPhone(phone)) {
            alert('Por favor ingrese un número de celular válido.');
            return;
        }
        
        if (!validarEmail(email)) {
            alert('Por favor ingrese un email válido.');
            return;
        }

        form.submit();
        alert('Formulario enviado correctamente.');
    });

    function validarEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validarPhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }
});
