function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu;
        $.each(menu, function(i, data){
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img class="card-img-top" src="/rest-api/wpu-hut/img/menu/'+ data.gambar+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+data.deskripsi+'</p> <h5 class="card-title">RP. '+data.harga+' </h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>');
        });
        //perulangan di jquery
    });
} 

$(document).ready(function(){
    tampilkanSemuaMenu();
});

/**
 * Untuk Mengambil DATA Khusus JSON dengan fungsi
 * $.getJSON
 * sedangkan untuk Mengambil DATA selain JSON dan ingin mengubah data ke JSON 
 * $.ajax
 */

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('#judul-mini-header').html(kategori);

    if( kategori == 'All Menu'){
        $('#daftar-menu').html('');
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) { 
             if(data.kategori == kategori.toLowerCase()){
                 content +='<div class="col-md-4"><div class="card mb-3"><img class="card-img-top" src="/rest-api/wpu-hut/img/menu/'+ data.gambar+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+data.deskripsi+'</p> <h5 class="card-title">RP. '+data.harga+' </h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>';
             }
        });

        $('#daftar-menu').html(content);
    });
});
