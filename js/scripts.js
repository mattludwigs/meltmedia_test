//Variable to hold current window state- small, medium, or large

	var windowState = 'large';

	//check initial width of the screen and respond with appropriate menu
	$(document).ready(function() {
		var sw = document.body.clientWidth;
		if (sw <= 800){
			smMenu();
		} else {
			lgMenu();
		}
	});

	// handles resizing the window
	$(window).resize(function() {
		sw = document.body.clientWidth;
		if(sw <= 800 && windowState != 'small'){
			smMenu();
		} else {
			lgMenu();
		}
	});
	//handle munus for small screen
	function smMenu(){
		// Clears out other menu setting from last resize
		$('.menu-toggle a').off('click')
		$('.expand').removeClass('expand');
		$('.menu-toggle').remove();
		// Displays new menu
		$('.main-nav').before("<div class='menu-toggle'><a href='#'>menu<span class='indicator'> +</span></a></div>");
		// Add expand class for toggle menu and adds + or - symbol depending on nav bar toggle state
		$('.menu-toggle a').click(function() {
			$('.main-nav').toggleClass('expand');
			var newValue = $(this).find('span.indicator').text() == ' -' ? ' +' : ' -';
			$(this).find('span.indicator').text(newValue);
		});
		// Set window state
		var windowState = 'small';
	}

	//handles menu for not in small function
	function lgMenu() {
		// unbind click events
		$('.menu-toggle a').off('click');

		// remove dynamic classes and span tags
		$('.main-nav').find('span.indicator').remove();
		$('.menu-toggle a').remove();

		// return windowState
		windowState = 'large';
	}

// Hide and show elements base of screensize
$(document).ready(function() {
	var sw = document.body.clientWidth;
	if(sw <= 640){
		hideElements();
	} 
});

$(window).resize(function() {
		sw = document.body.clientWidth;
		if(sw <=640){
			hideElements();
		} else if(sw > 641) {
			showElements();
		}
});
// Hide these elements
function hideElements(){
	$('header').find('div ul').hide();
	$('header').find('.sponser').hide();
}
// Show these elements
function showElements(){
	$('header').find('div ul').show();
	$('header').find('.sponser').show();
}



