$((function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


}))

$(document).ready(function() {
	$("#carousel").owlCarousel({
		autoPlay: 3000,

		items : 1,
	});
});
