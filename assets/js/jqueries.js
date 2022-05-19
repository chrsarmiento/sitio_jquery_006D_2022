$(document).ready(function() {
    
    $('h1').click(function() {
        $(this).hide();
    });

    $('h2').click(function() {
        $('h1').css('color','red');
    });

    $('.link_interno').click(function() {
        $(this).prop('target','_self');
    });

    $('.link_externo').click(function() {
        $(this).prop('target','_blank');
        alert("Estas dejando nuestra página...");
    });

    $('#encender').click(function() {
        $('#img-ampolleta').prop('src','assets/img/pic_bulbon.gif').prop('alt','Luz encendida');
    });

    $('#apagar').click(function() {
        $('#img-ampolleta').attr('src','assets/img/pic_bulboff.gif').attr('alt','Luz apagada');
    });

    // $('#text-hover').hover(function() {
    //     $(this).append('Este texto apareció de la nada...');
    // });

    $('#button01').click(function() {
        var mi_frase = $('#frase').val();
        $('#frase-ingresada').text(mi_frase);
        alert(mi_frase);
    });

    $('#button02').click(function() {
        $('p .texto-rojo').css('color','red');
    });

    $('#accion01').on('click',function(){
        var ancho = screen.width;
        var alto = screen.height;
        $('#resolucion').text('La resolución de tu pantalla es ' + ancho + " x " + alto + " pixeles.");
    });

    $('#accion02').on('click', function(){
        $('#parrafo-accion02').hide(1000);
    });

    $('#accion03').on('click', function(){
        $('#parrafo-accion02').show(1000);
    })

    $('#accion04').on('click', function(){
        $('#imagen-accion04').toggle('slow');
    });

    $('#accion05').on('click', function(){
        $('#imagen-accion05').slideDown('slow',function(){
            alert('Estamos funcionando');
        });
    });

    $('#accion06').on('click', function(){
        $('#imagen-accion06').slideUp(3000);
    });

    $('#accion07').on('click', function() {
        $('#lista-accion07').slideToggle();
    });

    $('#accion08_1').on('click', function(){
        $('#parrafo-accion08').addClass('text-purple fw-bold');
    });

    $('#accion08_2').on('click', function(){
        $('#parrafo-accion08').addClass('fst-italic');
    });

    $('#accion08_3').on('click', function(){
        $('#parrafo-accion08').removeClass('text-purple fw-bold fst-italic');
    });

    $('#accion09').on('click', function(){
        var parrafo = '<p>Este es un párrafo que se agregó antes del otro...</p>';
        $('#parrafo-accion09').before(parrafo);
    });

    $('#accion10').on('click', function(){
        var parrafo = '<p>Este es un párrafo que se agregó después del otro...</p>';
        $('#parrafo-accion10').after(parrafo);
    });

    $('#accion11').on('click', function(){
        var parrafo = '<p>Este es un párrafo que se agregó después del otro...</p>';
        $('#parrafo-accion11').append(parrafo);
    });

    $('#accion12').on('click', function(){
        var parrafo = '<p>Este es un párrafo que reemplazó al otro...</p>';
        $('#parrafo-accion12').html(parrafo);
    });






})