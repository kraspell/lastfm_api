const API_KEY = "c7d6fda79b9d13166963145f417e4bc3";

//------------------------------------кнопка поиска---------------------------------//
$("#search").click(function(){
var req_text = $("#input_request").val();

$("#output_list").empty();

if ($("#inputGroupSelect01 option:selected").text() == "Артист"){
	$.ajax({
    	url: `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${req_text}&api_key=${API_KEY}&format=json`,
    	success: function(data){
	      	searchArtist(data);
    	}
  	});
}

if ($("#inputGroupSelect01 option:selected").text() == "Альбом"){
	$.ajax({
    	url: `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${req_text}&api_key=${API_KEY}&format=json`,
    	success: function(data){
	      	searchAlbum(data);
    	}
  	});
}

if ($("#inputGroupSelect01 option:selected").text() == "Трэк"){
	$.ajax({
    	url: `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${req_text}&api_key=${API_KEY}&format=json`,
    	success: function(data){
	      	searchTrack(data);
    	}
  	});
}
});

//------------------------------------кнопка ТОПа---------------------------------//
$("#topArtist").click(function(){

$("#output_list_top").empty();

	$.ajax({
    	url: `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`,
    	success: function(data){
	      	getTopArtist(data);
    	}
  	});
});

$("#topTrack").click(function(){

$("#output_list_top").empty();
	
	$.ajax({
	    	url: `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`,
	    	success: function(data){
		      	getTopTrack(data);
	    	}
	  	});
});