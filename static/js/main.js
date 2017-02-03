(function ($) {

    if($('.isotopeWrapper').length){

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');

        
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false,
            masonry: {
                columnWidth: $container.width() / $resize
            }


            
        });

        $('#filter a').click(function(){



            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        
        

        

}  


	new WOW().init();
		
		
		Flickity.createMethods.push('_createPrevNextCells');

	Flickity.prototype._createPrevNextCells = function() {
	  this.on( 'cellSelect', this.setPrevNextCells );
	};

	Flickity.prototype.setPrevNextCells = function() {
	  // remove classes
	  if ( this.previousCell ) {
		classie.remove( this.previousCell.element, 'is-previous' );
	  }
	  if ( this.nextCell ) {
		classie.remove( this.nextCell.element, 'is-next' );
	  }
	  // set cells
	  this.previousCell = this.cells[ this.selectedIndex - 1 ];
	  this.nextCell = this.cells[ this.selectedIndex + 1 ];
	  // add classes
	  if ( this.previousCell ) {
		classie.add( this.previousCell.element, 'is-previous' );
	  }
	  if ( this.nextCell ) {
		classie.add( this.nextCell.element, 'is-next' );
	  }
	};

	$('.gallery').flickity({
	  
	  cellAlign: 'center',
	  setGallerySize: false,
	  wrapAround: true,
	  //prevNextButtons: false,
	  pageDots: false,
	  freeScroll: true
	  
	});




	jQuery(".fancybox").fancybox();

    //Google Map
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);

})(jQuery);

$(".Lorem2").html("Fapibus non interdum quis, suscipit nec dolor. Vivamus tempor tempus mauris vitae fermentum. In vitae nulla lacus. Sed sagittis tortor vel arcu sollicitudin nec tincidunt metus suscipit.Nunc velit risus, dapibus non interdum.");
$(".Lorem").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.");
$(".Ipsum").html("Integer nec odio");
$(".Name").html("Add Name Here");
$(".Title").html("Add Title Here");
