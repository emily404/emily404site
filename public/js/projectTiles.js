$('#projectList').imagesLoaded()
			.always( function() {
				var wookmark = new Wookmark('#projectList', {
					flexibleWidth: true,
					offset: 40,
					itemWidth: 200
				});
			})
			.done( function( instance ) {
	    		console.log('all project list images successfully loaded');
	  		})
		    .fail( function() {
    			console.log('at least one project list image is broken');
  			});