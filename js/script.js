$(document).ready(function(){


    const anoAtual = new Date().getFullYear();
    $('#ano-atual').text(anoAtual);

    $('.cartao').hover(
        function() {
            $(this).addClass('cartao-hover');
        },
        function() {
            $(this).removeClass('cartao-hover');
        }
    );

    $('#form-contato').on('submit', function(event) {
        event.preventDefault();

        $(this).slideUp();

        $('#mensagem-sucesso').slideDown();

        setTimeout(() => {
            this.reset();
        }, 5000); 
    });

    console.log("jQuery e script.js carregados e prontos!");

}); 
