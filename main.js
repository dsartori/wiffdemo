

$(document).ready(function(){

	// sort the films by time of day
	data.sort(function(a,b){
		timeA = new Date("1970/01/01 " + a["Start Time"]);
		timeB = new Date("1970/01/01 " + b["Start Time"]);
		console.log(a["Start Time"]);
		return timeA - timeB;
	});


	// display films that are showing today

	// loop through array of films
	for (var i =0; i<data.length;i++){

		// create JS date from date
		d = new Date(data[i]["Date"]);

		// for demo purposes. In production, remove this line
		today = new Date("11/1/2016 16:50");

		// zero time from current date/time
		today.setHours(0,0,0,0);

		// is the film showing today? 
		if (d-today == 0){
				// add it to the list
			addItem(data[i]);
		}
	}


	// add the film to the list
	function addItem(film) {
		var newItem =  film["Title"];
		var startTime = film["Start Time"];

		// encode title for wiff website links
		var urlTitle = "http://www.windsorfilmfestival.com/films/" + film["Title"].toLowerCase().replace(/ /g,"-");

		// create new list item element 
		var $newListItem = $("<li>");

		// encode title for rotten tomatoes search
		var film = encodeURI(film["Title"]);

		// put all the content into our new list item
		$newListItem
			.addClass("item")
			.html("<div class=time>"+startTime+"</div><a href="+urlTitle + ">" + newItem + "</a>" 
				+ "<a class=search href=https://www.rottentomatoes.com/search/?search="+ film + " target='_blank'><img src='fresh.png' height=32px width=32px></a>")
			.hide();

	    // add the item at the bottom of the list
		$(".eol").before($newListItem);

		// special effects
		$newListItem.slideDown(500);
	}
	


});
