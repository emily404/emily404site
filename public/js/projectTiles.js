 $(document).ready(function() {
 	$('#projectList').imagesLoaded()
		.always( function() {
			var options = {
				autoresize: true,
				flexibleWidth: true,
				offset: 40,
				itemWidth: 200
			}

			var wookmark = new Wookmark('#projectList', options);

			$(window).load(function() {
	   			handler.wookmark(options);
			});
		})
		.done( function( instance ) {
			console.log('all project list images successfully loaded');
			})
	    .fail( function() {
			console.log('at least one project list image is broken');
			});
});