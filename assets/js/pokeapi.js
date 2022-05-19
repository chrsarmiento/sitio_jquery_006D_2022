$(document).ready(function() {
    for(let i=1; i <= 898; i++){
        var url = `<img id=${i} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`;
        $('#img-pokemon').append(url);
    }
});

$(document).on('mouseover', 'img' , function() {
    var id = $(this).attr('id');
    $(this).css('background-color', 'lightgray');
    console.log(id);
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`;


    $.get(url, function(data) {
        $('#pokemon_imagen').attr('src', data.sprites.front_default);
        $('#pokemon_nombre').text(capitalizarTexto(data.name));

        var tipo = '<h5 class="card-title fw-bold">Type</h5><ul>';
        for(let i=0; i< data.types.length; i++){
            tipo = tipo + ('<li>' + capitalizarTexto(data.types[i].type.name) + '</li>');
        }
        tipo = tipo + '</ul>';
        $('#pokemon_tipo').html(tipo);

        var peso = `<h5 class="card-title fw-bold">Weight</h5><p>${data.weight/10} kgs.</p>`;
        $('#pokemon_peso').html(peso);

        var estatura = `<h5 class="card-title fw-bold">Height</h5><p>${data.height/10} mts.</p>`;
        $('#pokemon_estatura').html(estatura);
        
    });
});

$(document).on('mouseout','img', function() {
    var id = $(this).attr('id');
    $(this).css('background-color', 'transparent');
    $('#pokemon_imagen').attr('src', '#');
    $('#pokemon_nombre').text('');
    $('#pokemon_tipo').html('');
    $('#pokemon_peso').html('');
    $('#pokemon_estatura').html('');
});


function capitalizarTexto(texto) {
    var capitalizado = texto.substr(0,1).toUpperCase() + texto.substr(1, texto.length).toLowerCase();
    return capitalizado;
}