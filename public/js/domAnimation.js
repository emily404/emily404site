$(document).ready(function() {

	var height = $(window).height();
	var fadeOutFactor = height * 0.8;
    
	$(window).scroll(function(){
	    $("#frontPage").css("opacity", 1 - $(window).scrollTop() / fadeOutFactor);
	});

});
