$(document).ready(function() {
    $('#telefone').mask('(00) 0 0000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome',
            email: 'Por favor insira um email válido',
            mensagem: 'Por favor insira uma mensagem'
        },
        submitHandler: function(form, event) {
            event.preventDefault(); // Evita que a página seja recarregada
            console.log(form);
            // Adicione aqui o código para enviar o formulário, por exemplo:
            // form.submit();
        }
    });
});
