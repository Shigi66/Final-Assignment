$(document).ready(function () {
  $('.lista img').click(function () {
    const imagenSeleccionada = $(this).data('ulmo');  

    //callback
    $('.ulmi-dog img').fadeOut(function () {  
      $(this).attr('src', imagenSeleccionada)  
             .fadeIn(200, function() {  
               console.log('La transición de imagen ha terminado.');
               
             });
    });
  });
});
