/*---------Поиск по артисту---------*/
function searchArtist(data){
   	for(var i = 0; i <= data.results.artistmatches.artist.length; i++){
   		$("#output_list").append('<li>'+
						        '<img src="' + data.results.artistmatches.artist[i].image[2]["#text"] + '">' +
							    '<h2>' + data.results.artistmatches.artist[i].name + '</h2>' +
							    '<p>Profile: </p><a href="' + data.results.artistmatches.artist[i].url + '" target="_blank">' + data.results.artistmatches.artist[i].name + '</a>' +
							    '<br><p>Listeners: ' + data.results.artistmatches.artist[i].listeners + '</p>' + 
							    '<div id="aboutArtist"><button onclick="getInfo(\u0027' + data.results.artistmatches.artist[i].name + '\u0027)" type="button" data-toggle="modal" data-target="#myModal">Подробнее</button></div></li><hr>');
    }
}

/*---------Поиск по альбому---------*/
function searchAlbum(data){
   	for(var i = 0; i <= data.results.albummatches.album.length; i++){
   		$("#output_list").append('<li>'+
						        '<img src="' + data.results.albummatches.album[i].image[2]["#text"] + '">' +
							    '<h2>"' + data.results.albummatches.album[i].name + '" - ' + data.results.albummatches.album[i].artist + '</h2>' +
							    '<p>Album link: </p><a href="' + data.results.albummatches.album[i].url + '" target="_blank">' + data.results.albummatches.album[i].artist + '</a>' + 
							    '</li><hr>');
    }
}

/*---------Поиск по трэку---------*/
function searchTrack(data){
   	for(var i = 0; i <= data.results.trackmatches.track.length; i++){
   		$("#output_list").append('<li>'+
						        '<img src="' + data.results.trackmatches.track[i].image[2]["#text"] + '">' +
							    '<h2>' + data.results.trackmatches.track[i].name + '</h2>' +
							    '<p>Profile: </p><a href="' + data.results.trackmatches.track[i].url + '" target="_blank">' + data.results.trackmatches.track[i].artist + '</a>' +
							    '<br><p>Listeners: ' + data.results.trackmatches.track[i].listeners + '</p>' + 
							    '</li><hr>');
    }
}

/*---------Топ артистов---------*/
function getTopArtist(data){
   	for(var i = 0; i <= data.artists.artist.length; i++){
   		$("#output_list_top").append('<li><h3>'+ (i+1) +
						        '</h3><img src="' + data.artists.artist[i].image[2]["#text"] + '">' +
							    '<h2>' + data.artists.artist[i].name + '</h2>' +
							    '<p>Profile: </p><a href="' + data.artists.artist[i].url + '" target="_blank">' + data.artists.artist[i].name + '</a>' +
							    '<br><p>Listeners: ' + data.artists.artist[i].listeners + '</p>' + 
							    '<br><p>Playcount: ' + data.artists.artist[i].playcount + '</p>' + 
							    '</li><hr>');
    }
}

/*---------Топ трэков---------*/
function getTopTrack(data){
   	for(var i = 0; i <= data.tracks.track.length; i++){
   		$("#output_list_top").append('<li><h3>'+ (i+1) +
						        '</h3><img src="' + data.tracks.track[i].image[2]["#text"] + '">' +
							    '<h2>"' + data.tracks.track[i].name + '" - ' + data.tracks.track[i].artist.name + '</h2>' +
							    '<p>Profile: </p><a href="' + data.tracks.track[i].url + '" target="_blank">' + data.tracks.track[i].artist.name + '</a>' +
							    '<br><p>Listeners: ' + data.tracks.track[i].listeners + '</p>' + 
							    '<br><p>Playcount: ' + data.tracks.track[i].playcount + '</p>' + 
							    '</li><hr>');
    }
}

/*-----Информация об артисте----*/
function getInfo(artist_name) {
	$(".modal-body").empty();
	$(".modal-title").empty();
	$(".modal-footer").empty();

	var tags_info = "";
	var sim_art = "";

	$.ajax({
	    	url: `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist_name}&api_key=${API_KEY}&format=json`,
	    	success: function(data){
	    		$(".modal-title").append('<img src="' + data.artist.image[2]["#text"] + '">' + '<h5>' + artist_name + '</h5>');
	    		for(var i = 0; i < data.artist.tags.tag.length; i++){
	    			tags_info += '<button class="tags" style="outline: none;box-shadow: none;">' + data.artist.tags.tag[i].name +'</button>';
	    		}

				$(".modal-body").append(tags_info + '<br><p>' + data.artist.bio.content + '</p>');

				for(var i = 0; i < data.artist.similar.artist.length; i++){
					sim_art += '<a href="' + data.artist.similar.artist[i].url + '" target="_blank" class="tags" style="outline: none;box-shadow: none;">' + data.artist.similar.artist[i].name + '</a>';
				}

				$(".modal-footer").append('<p>Похожие артисты:</p><div>' + sim_art + '</div>');	
	    	}
	  	});
}