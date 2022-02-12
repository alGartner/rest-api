function searchMovie(){
    $('#movie-list').html('');
    $.ajax({
        type: "get",
        url: "http://omdbapi.com",
        data: {
            'apikey' : 'e813a779',
            's' :$('#search-input').val()
        },
        dataType: "json",
        success: function (datgit a) {
            console.log(data);
           if (data.Response == "True"){
                let movies = data.Search;

                $.each(movies, function (i , data) { 
                     $('#movie-list').append(`
                        <div class ="col-md-4">
                            <div class="card mb-3" >
                                <img src="`+data.Poster+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+data.Title+`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+data.Year+`</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+data.imdbID+`">Se Detail</a>
                                </div>
                            </div>
                        </div>`)
                });

                $('#search-input').val('');
           }else {
               $('#movie-list').html(`
               <div class="col"> 
                    <h class="text-center">`+ data.Error +`</h>
                </div>`)
           }
        }
    });
}

$('#search-button').on('click', function(){
   searchMovie();
});

$('#search-input').on('keyup', function(event){
    if (event.which === 13) {
        searchMovie();
    }
});

$('#movie-list').on('click', '.see-detail',function(){
    $.ajax({
        type: "get",
        url: "http://omdbapi.com",
        data: {
            'apikey' : 'e813a779',
            'i' :$(this).data('id')
        },
        dataType: "json",
        success: function (movie) {
            if (movie.Response === 'True') {
                $('.modal-body').html(`
                    <div class ="container-fluid">
                        <div class ="row">
                            <div class ="col-md-4">
                                <img src ="`+movie.Poster+`" class ="img-fluid"
                            </div>

                            <div class ="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+data.Title+`</h3></li>
                                    <li class="list-group-item">Released : `+data.Release+`</li>
                                    <li class="list-group-item">Genre : `+data.Genre+`</li>
                                    <li class="list-group-item">Director : `+data.Director+`</li>
                                    <li class="list-group-item">Actor : `+data.Actors+`</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
        }
    });

});
// baru sampai menit 35