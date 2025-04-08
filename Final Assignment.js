$(document).ready(function () {
  $('.lista img').click(function () {
    const imagenSeleccionada = $(this).data('ulmo');

    $('.ulmi-dog img').fadeOut( function () {
      $(this).attr('src', imagenSeleccionada).fadeIn(200);
    });
  });
});
