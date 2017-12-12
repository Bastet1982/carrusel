$(document).ready(function(){  // cuando cargue la pagina va a ejecutar una funcion del codigo //
   // Lamaré a clase slider y a diapositivas img //
    var imgItems = $('.slider li').length; // esta variable se usara para mostrar la cantidad de circulos equivalente a las img //
    
    // agregando paginacion //
    for (i = 1; i <= imgItems; i++) {
        $('.pagination').append('<li><span class= "fa fa-circle"></span></li>');
    }

    $('.slider li').hide();    // llamamos a slider y diapositivas... img, se van a ocultar //
    $('.slider li:first').show();  // dejamos que llame al primero de la clase slider li de las diapositivas //
    $('.pagination li:first').css({'color': ' #FB3A17'});

    //Click a los botones ejecutando todas las funciones //
    $('.pagination li').click(pagination);  // al darle click se ejecuta la funcion paginacion//
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider); 

    // Funciones ================================================//
    function pagination(){
        var paginationPos = $(this).index() + 1;   // traigo el n° de la posicion del elemento que le hago click//
        
        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPos +')').fadeIn(); // por cada n° una imagen//

        // Estilos a la paginación seleccionada
        $('.pagination li').css({'color':'#630476'}); //  al hacerle clik a un circle cambia de color y el resto mantiene el color morado //
        $(this).css({'color': '#FB3A17'}); // solo al que hagamos clik y se mostrara naranja

    }

   // function nextSlider() {
    //    $('.slider li').hide();
      //  $('.slider li:nth-child(2)').fadeIn();.
    //}
});