$('#search-button').on('click', function(){
    $.ajax({
        type: "get",
        url: "http://omdbapi.com",
        data: {
            'apikey' : 'e813a779',
            's' :$('#search-input').val()
        },
        dataType: "json",
        success: function (data) {
           if (data.Response == "True"){
                let movies = data.Search;

                $.each(movies, function (i , data) { 
                     $('#movie-list').append(`
                        <div class="card" >
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>`)
                });
           }else {
               $('#movie-list').html(`
               <div class="col"> 
                    <h class="text-center">`+ data.Error +`</h>
                </div>`)
           }
        }
    });
});
// baru sampai menit 35