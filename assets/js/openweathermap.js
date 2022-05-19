$('#buscar_clima').on('click', function() {
    var ciudad = $('#ciudad_buscada').val();
    if(ciudad.trim().length > 0){
        var units = 'metric';
        var languaje = 'sp';
        var apiid = 'cdb9c62f4eac5a55de3f9c944100cca6';
        var url_clima = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=${languaje}&units=${units}&appid=${apiid}`;
    
        $.getJSON(url_clima, function(data_clima) {
            var url_pais = `https://restcountries.com/v3.1/alpha/${data_clima.sys.country}`;
            $.getJSON(url_pais,function(data_pais) {
                var html = `<h4 id="ciudad" class="text-capitalize">${data_clima.name} (${data_pais[0].translations.spa.common}): ${data_clima.weather[0].description}</h4>
                        <h4 id="temperatura">Temperatura: ${data_clima.main.temp}°C</h4>
                        <h4 id="coordenadas">Coordenadas: ${data_clima.coord.lat},${data_clima.coord.lon}</h4>`;
                var iconurl = `http://openweathermap.org/img/w/${data_clima.weather[0].icon}.png`;
                var html_img = `<img class="img-clima" src="${iconurl}" alt="">`;
                $('#info_clima').removeClass('fw-bold text-danger').html(html);
                $('#icon_clima').html(html_img);
            });            
        }).fail(function() {
            $('#info_clima').addClass('fw-bold text-danger').html("<h4>No se encuentra la ciudad ingresada</h4>");
            $('#icon_clima').html("");
        });
    }
    else{
        alert("Debe ingresar una ciudad para su búsqueda...");
    }

});


